<template>
  <div class="uploadImage">
    <!-- Opcje wyboru: Kamera lub Plik -->
    <div class="selection-buttons">
      <button v-if="!showCamera && !showFileUpload" @click="startCamera" class="btn btn-secondary me-2">
        Zrób zdjęcie
      </button>
      <button v-if="!showCamera && !showFileUpload" @click="selectFile" class="btn btn-secondary">
        Wybierz zdjęcie
      </button>
    </div>

    <!-- Podgląd z kamery -->
    <div v-if="showCamera">
      <video ref="video" autoplay playsinline></video>
      <button @click="takeSnapshot" class="btn btn-primary me-2">Zrób zdjęcie</button>
      <button @click="cancelCamera" class="btn btn-danger">Anuluj</button>
      <canvas ref="canvas" style="display: none;"></canvas>
    </div>

    <!-- Podgląd przechwyconego obrazu -->
    <div v-if="capturedImage">
      <img :src="capturedImage" alt="Przechwycony obraz" style="max-width: 60%; height: auto; margin-bottom: 20px;" />
    </div>

    <!-- Przesyłanie pliku -->
    <div v-if="showFileUpload">
      <label for="file-upload" class="btn btn-primary me-2">Wybierz plik</label>
      <input id="file-upload" type="file" @change="handleFileUpload" accept="image/*" style="display: none;" />
      <p v-if="!selectedFile" class="mb-0">Nie wybrano pliku</p>
      <p v-if="selectedFile" class="mb-0">{{ truncatedFileName(selectedFile.name) }}</p>
      <button @click="cancelFileUpload" class="btn btn-danger mt-2">Anuluj</button>
    </div>

    <!-- Informacje o postępie i błędach -->
    <p v-if="uploadProgress && uploadProgress < 100">Postęp przesyłania: {{ uploadProgress }}%</p>
    <p v-if="uploadError" class="text-danger">{{ uploadError }}</p>

    <!-- Przycisk przesyłania -->
    <button class="btn btn-success" v-if="selectedFile || capturedImage" @click="uploadImage">Prześlij obraz</button>
  </div>
</template>

<script>
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { storage } from "@/main.js";
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      selectedFile: null,
      uploadProgress: null,
      downloadUrl: '',
      uploadError: '',
      isLoggedIn: false,
      auth: null,
      showCamera: false,
      showFileUpload: false,
      capturedImage: null
    };
  },
  mounted() {
    this.auth = getAuth();
    this.auth.onAuthStateChanged((user) => {
      this.isLoggedIn = !!user;
    });
  },
  methods: {
    startCamera() {
      this.showCamera = true;
      this.showFileUpload = false;
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          this.$refs.video.srcObject = stream;
          this.videoStream = stream; // Zapisz strumień wideo do późniejszego użycia
        })
        .catch((err) => {
          console.error("Błąd podczas dostępu do kamery:", err);
          this.uploadError = "Nie można uzyskać dostępu do kamery.";
        });
    },
    takeSnapshot() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;

      // Dopasuj rozmiar płótna do rozmiaru wideo
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Narysuj bieżącą klatkę na płótnie
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      // Przekształć zawartość płótna na adres URL danych
      this.capturedImage = canvas.toDataURL('image/png');
      this.selectedFile = this.dataURLtoFile(this.capturedImage, `${uuidv4()}.png`);

      // Zatrzymaj wszystkie ścieżki wideo, aby wyłączyć kamerę
      if (this.videoStream) {
        this.videoStream.getTracks().forEach(track => track.stop());
      }

      // Ukryj podgląd wideo po zrobieniu zdjęcia
      this.showCamera = false;
    },
    cancelCamera() {
      // Zatrzymaj wideo strumień
      if (this.videoStream) {
        this.videoStream.getTracks().forEach(track => track.stop());
      }
      this.showCamera = false;
    },
    selectFile() {
      this.showFileUpload = true;
      this.showCamera = false;
    },
    cancelFileUpload() {
      this.selectedFile = null;
      this.showFileUpload = false;
    },
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    dataURLtoFile(dataUrl, fileName) {
      const arr = dataUrl.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], fileName, { type: mime });
    },
    uploadImage() {
      if (!this.isLoggedIn) {
        this.uploadError = "Musisz być zalogowany, aby przesyłać pliki.";
        return;
      }

      if (!this.selectedFile) {
        this.uploadError = "Proszę wybrać lub zrobić zdjęcie do przesłania.";
        return;
      }

      // Wygeneruj unikalną nazwę pliku
      const uniqueFileName = `${uuidv4()}_${this.selectedFile.name}`;
      const storageRef = ref(storage, `images/${uniqueFileName}`);
      const uploadTask = uploadBytesResumable(storageRef, this.selectedFile);

      uploadTask.on('state_changed', (snapshot) => {
        this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, (error) => {
        console.error("Błąd przesyłania:", error);
        this.uploadError = "Błąd podczas przesyłania pliku: " + error.message;
      }, async () => {
        // Pobierz adres URL do pobrania po pomyślnym przesłaniu
        this.downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("Adres URL do pobrania:", this.downloadUrl);

        // Emituj zdarzenie z przesłaną nazwą pliku
        this.$emit('image-uploaded', uniqueFileName);

        // Zresetuj postęp i błędy
        this.uploadError = '';
        this.uploadProgress = null;
      });
    },
    truncatedFileName(name) {
      const maxLength = 20;
      if (name.length <= maxLength) return name;
      const extension = name.split('.').pop();
      return name.slice(0, maxLength - extension.length - 3) + '...' + extension;
    }
  }
};
</script>

<style>
.uploadImage {
  margin-top: 20px;
}
.selection-buttons {
  margin-bottom: 15px;
}
</style>
