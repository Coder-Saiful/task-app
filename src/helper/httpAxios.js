import { BASE_URL } from "@/utils/config";

const { default: axios } = require("axios");

export const httpAxios = axios.create({
    baseURL: BASE_URL
});