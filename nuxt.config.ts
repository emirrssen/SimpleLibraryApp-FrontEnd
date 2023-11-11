// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      title: "Simple Library App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width-device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "It's a simple library app simulation." },
        { name: "format-detection", content: "telephone-no" }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript"
        },
        {
          src: "https://code.jquery.com/jquery-3.7.1.min.js",
          type: "text/javascript"
        }
      ]
    }
  }
})