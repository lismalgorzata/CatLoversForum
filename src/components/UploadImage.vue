<template>
  <div class="uploadImage">
    <!-- Podgląd przesłanego obrazu -->
    <div v-if="downloadUrl" class="d-flex justify-content-center align-items-center">
      <img :src="downloadUrl" alt="Uploaded Image" style="max-width: 60%; height: auto; margin-bottom: 20px;" />
    </div>

    <!-- Komunikaty o postępie i błędach -->
    <p v-if="uploadProgress && uploadProgress < 100">Upload Progress: {{ uploadProgress }}%</p>
    <p v-if="uploadError" class="text-danger">{{ uploadError }}</p>

    <!-- Wybór pliku i wyświetlanie nazwy -->
    <div class="d-flex align-items-center mb-2">
      <label for="file-upload" class="btn btn-primary me-2">Select File</label>
      <input id="file-upload" type="file" @change="handleFileUpload" accept="image/*" style="display: none;" />
      <p v-if="!selectedFile" class="mb-0">No file selected</p>
      <p v-if="selectedFile" class="mb-0">{{ truncatedFileName(selectedFile.name) }}</p>
    </div>

    <!-- Przycisk do przesyłania obrazu -->
    <button class="btn btn-danger" @click="uploadImage">Upload Image</button>
  </div>
</template>

<script>
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {storage} from "@/main.js";
import {v4 as uuidv4} from 'uuid';

export default {
  data() {
    return {
      selectedFile: null,
      uploadProgress: null,
      downloadUrl: '',
      uploadError: '',
      isLoggedIn: false,
      auth: null,
    };
  },
  mounted() {
    this.auth = getAuth();
    this.auth.onAuthStateChanged((user) => {
      this.isLoggedIn = !!user;
    });
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadImage() {
      if (!this.isLoggedIn) {
        this.uploadError = "You must be logged in to upload files.";
        return;
      }

      if (!this.selectedFile) {
        this.uploadError = "Please select a file to upload.";
        return;
      }

      // Generate a unique file name
      const uniqueFileName = `${uuidv4()}_${this.selectedFile.name}`;
      const storageRef = ref(storage, `images/${uniqueFileName}`);
      const uploadTask = uploadBytesResumable(storageRef, this.selectedFile);

      uploadTask.on('state_changed', (snapshot) => {
        this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, (error) => {
        console.error("Upload error:", error);
        this.uploadError = "Error uploading file: " + error.message;
      }, async () => {
        // Obtain the download URL after successful upload
        this.downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("Download URL:", this.downloadUrl);

        // Emit an event with the file name after a successful upload
        this.$emit('image-uploaded', uniqueFileName);

        // Reset progress and error states
        this.uploadError = '';
        this.uploadProgress = null;
      });
    },
    truncatedFileName(name) {
      // Skróć nazwę pliku, gdy jest zbyt długa
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
</style>
