const baseUrl: string =  'http://localhost:5158/api/';

export function Get<TResponse>(url: string, params?: {}): Promise<TResponse> {
    return $fetch<TResponse>(baseUrl + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params},
    })
}

export function Post<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {
    console.log(body);
    return $fetch<TResponse>(baseUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params},
        body: body
    })
}

export function Delete<TResponse>(url: string, params?: {}): Promise<TResponse> {
    return $fetch<TResponse>(baseUrl + url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params}
    })
}

export function Put<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {
    return $fetch<TResponse>(baseUrl + url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params},
        body: body
    })
}