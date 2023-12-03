const baseUrl: string =  'http://localhost:5158/api/';

export function Get<TResponse>(url: string, params?: {}): Promise<TResponse> {
    return $fetch<TResponse>(baseUrl + url, {
        method: 'GET',
        params: {...params},
    })
}

export function Post<TResponse>(url: string, body?: {}): Promise<TResponse> {
    return $fetch<TResponse>(baseUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {...body}
    })
}
