import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.scss";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: `${process.env.VUE_APP_APIKEY}`,
    authDomain: `${process.env.VUE_APP_AUTHDOMAIN}`,
    projectId: `${process.env.VUE_APP_PROJECTID}`,
    storageBucket: `${process.env.VUE_APP_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.VUE_APP_MESSAGINSENDERID}`,
    appId: `${process.env.VUE_APP_APPID}`,
};

initializeApp(firebaseConfig);

createApp(App).use(router).use(store).mount("#app");