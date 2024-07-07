import { axiosInstance } from "../../axiosInstance";

export const getAllJob = async () => {
    try {
        const response = await axiosInstance.get("/job");
        return response
    } catch (error) {
        throw error; // Throw error if request fails
    }
};


export const getSingleJob = async (id) => {
    try {
        const response = await axiosInstance.get(`/job/${id}`);
        return response
    } catch (error) {
        throw error; // Throw error if request fails
    }
};
