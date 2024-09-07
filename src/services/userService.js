import { httpAxios } from "@/helper/httpAxios";

// get user profile data
export const fetchProfile = async (token="") => {
    try {
        const response = await httpAxios.get("/api/users/profile", {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
        return {data: response.data};
    } catch (error) {
        if (error.response) {
            return {error: error.response.data};
        }
        
        return {error: {message: "Something went wrong. Please try again later or refresh the web/app."}}
    }


}

// get token data
export const fetchTokenData = async (token="") => {
  
        //  httpAxios.get("/api/users/token-data", {
        //     headers: {
        //       'Authorization': 'Bearer ' + token
        //     }
        //   })
        //   .then(response => {
        //     return {data: response.data, error: null};
        //   })
        //   .catch(error => {
        //     if (error.response) {
        //         return {error: error.response.data, data: null};
        //     }
            
        //     return {error: {message: "Something went wrong. Please try again later or refresh the web/app."}, data: null}
        //   });

    try {
        const response = await httpAxios.get("/api/users/token-data", {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          });
        return {data: response.data};
    } catch (error) {
        if (error.response) {
            return {error: error.response.data};
        }
        
        return {error: {message: "Something went wrong. Please try again later or refresh the web/app."}}
    }
}