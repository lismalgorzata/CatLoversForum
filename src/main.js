import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getFirestore } from "firebase/firestore";

import "./assets/styles.scss";

import { initializeApp } from "firebase/app";
import './registerServiceWorker'

const firebaseConfig = {
    apiKey: `${process.env.VUE_APP_APIKEY}`,
    authDomain: `${process.env.VUE_APP_AUTHDOMAIN}`,
    projectId: `${process.env.VUE_APP_PROJECTID}`,
    storageBucket: `${process.env.VUE_APP_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.VUE_APP_MESSAGINSENDERID}`,
    appId: `${process.env.VUE_APP_APPID}`,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createApp(App).use(router).use(store).mount("#app");