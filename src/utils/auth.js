import {jwtDecode} from 'jwt-decode';

export const saveAuthToken = (token) => {
    localStorage.setItem(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, token);
}

export const removeAuthToken = () => {
    localStorage.removeItem(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME);
}

export const isAuthenticated = () => {
    const token = localStorage.getItem(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME);

    if (token) {
        const decoded = jwtDecode(token);
    
        if (new Date().getTime() <= decoded.exp*1000) {
            return decoded;
        } else {
            localStorage.removeItem(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME);
            return false;
        }
    } else {
        return false
    }
}