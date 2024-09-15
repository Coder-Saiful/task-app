import { httpAxios } from "@/helper/httpAxios"; 

export const fetchCategoryDetails = async (id, token) => {
    try {
        const {data} = await httpAxios.get("/api/categories/"+id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return {
            data
        }
    } catch (error) {
     
        return {
            error: error.response.data.message
        }
    }
}

export const fetchSubcategoryDetails = async (id, token) => {
    try {
        const {data} = await httpAxios.get("/api/sub-categories/"+id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return {
            data
        }
    } catch (error) {
     
        return {
            error: error.response.data.message
        }
    }
}

export const fetchNastedSubcategoryDetails = async (id, token) => {
    try {
        const {data} = await httpAxios.get("/api/nasted-sub-categories/"+id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return {
            data
        }
    } catch (error) {
     
        return {
            error: error.response.data.message
        }
    }
}