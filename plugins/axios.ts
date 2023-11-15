import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl = "http://localhost:5158/api/"

    const api = axios.create({
        baseURL: defaultUrl,
        headers: {
            common: {}
        }
    })

    return {
        provide: {
            api: api
        }
    }
})