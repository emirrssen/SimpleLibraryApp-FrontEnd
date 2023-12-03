import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    timeout: 2500,
    position: "bottom-right",
    transition: "Vue-Toastification__slideBlurred",
    hideProgressBar: true
  }

  nuxtApp.vueApp.use(Toast, options)
});