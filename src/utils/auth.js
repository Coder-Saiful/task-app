import { httpAxios } from "@/helper/httpAxios";

export const isAuthenticated = () => {
    httpAxios.get('/api/users/profile')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error.response.data)
        })
}