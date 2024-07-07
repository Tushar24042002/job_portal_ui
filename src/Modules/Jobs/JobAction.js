import { axiosInstance } from "../../axiosInstance";

export const getAllIndustry = async () => {
    try {
        const response = await axiosInstance.get("/industry");
        return response
    } catch (error) {
        throw error; // Throw error if request fails
    }
};


export const addJob = async (data) => {
    try {
        const response = await axiosInstance.post("/job/add", data);
        return response;
    } catch (error) {
        throw error;
    }
};