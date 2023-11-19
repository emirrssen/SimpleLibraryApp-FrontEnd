export default defineNuxtPlugin(() => {
    const baseUrl: string =  'http://localhost:5158/api/';

    async function Get<TResponse>(url: string, params?: {}): Promise<TResponse> {
        return $fetch<TResponse>(baseUrl + url, {
            method: 'GET',
            params: {...params},
        })
    }

    async function Post<TResponse>(url: string, body?: any): Promise<TResponse> {
        return $fetch<TResponse>(baseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {...body}
        })
    }

    return {
        provide: {
            get: <TResponse>(url: string, params?: {}) => Get<TResponse>(url, params),
            post: <TResponse>(url: string, body?: {}) => Post<TResponse>(url, body)
        }
    }

})