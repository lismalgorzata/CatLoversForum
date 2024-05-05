<template>
  <div class="uploadImage">
    <!-- Camera Preview -->
    <div v-if="showCamera">
      <video ref="video" autoplay playsinline></video>
      <button @click="takeSnapshot">Take Snapshot</button>
      <canvas ref="canvas" style="display: none;"></canvas>
    </div>

    <!-- Preview of the captured image -->
    <div v-if="capturedImage">
      <img :src="capturedImage" alt="Captured Image" style="max-width: 60%; height: auto; margin-bottom: 20px;" />
    </div>

    <!-- Progress and error messages -->
    <p v-if="uploadProgress && uploadProgress < 100">Upload Progress: {{ uploadProgress }}%</p>
    <p v-if="uploadError" class="text-danger">{{ uploadError }}</p>

    <!-- Camera or file upload controls -->
    <button v-if="!showCamera" @click="enableCamera">Use Camera</button>
    <div v-if="!showCamera" class="d-flex align-items-center mb-2">
      <label for="file-upload" class="btn btn-primary me-2">Select File</label>
      <input id="file-upload" type="file" @change="handleFileUpload" accept="image/*" style="display: none;" />
      <p v-if="!selectedFile" class="mb-0">No file selected</p>
      <p v-if="selectedFile" class="mb-0">{{ truncatedFileName(selectedFile.name) }}</p>
    </div>

    <!-- Upload Button -->
    <button class="btn btn-danger" @click="uploadImage">Upload Image</button>
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
    enableCamera() {
      this.showCamera = true;
      navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            this.$refs.video.srcObject = stream;
            this.videoStream = stream; // Store the video stream to access it later
          })
          .catch((err) => {
            console.error("Error accessing camera:", err);
            this.uploadError = "Unable to access camera.";
          });
    },
    takeSnapshot() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;

      // Make sure the canvas size matches the video size
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current frame onto the canvas
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas content to a data URL
      this.capturedImage = canvas.toDataURL('image/png');
      this.selectedFile = this.dataURLtoFile(this.capturedImage, `${uuidv4()}.png`);

      // Stop all video tracks to disable the camera
      if (this.videoStream) {
        this.videoStream.getTracks().forEach(track => track.stop());
      }

      // Hide the video preview after capturing the image
      this.showCamera = false;
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
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadImage() {
      if (!this.isLoggedIn) {
        this.uploadError = "You must be logged in to upload files.";
        return;
      }

      if (!this.selectedFile) {
        this.uploadError = "Please select or capture an image to upload.";
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
        // Retrieve download URL after successful upload
        this.downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("Download URL:", this.downloadUrl);

        // Emit event with the uploaded image name
        this.$emit('image-uploaded', uniqueFileName);

        // Reset progress and errors
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
</style>
