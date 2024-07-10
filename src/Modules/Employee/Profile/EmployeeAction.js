import { axiosInstance } from "../../../axiosInstance";

export const getAllAppliedJobs = async () => {
    try {
        const response = await axiosInstance.get("/job/applied-jobs");
        return response
    } catch (error) {
        throw error; // Throw error if request fails
    }
};



export const updateEmployeeProfile = async (data) => {
    try {
        const response = await axiosInstance.post("/employee/add-profile", data);
        return response;
    } catch (error) {
        throw error;
    }
};