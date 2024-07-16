import { axiosInstance } from "../../../axiosInstance";

export const getEmployerJobData = async (obj) => {
    console.log(obj)
    try {
        const response = await axiosInstance.get(`/employer/employer-jobs?page=${obj?.page}&pageSize=${obj?.pageSize}`);
        return response
    } catch (error) {
        throw error; 
    }
};

export const getEmployerJobApplicationData = async (obj, jobId) => {
    try {
        const response = await axiosInstance.get(`/employer/employer-job-application/${jobId}?page=${obj?.page}&pageSize=${obj?.pageSize}`);
        return response
    } catch (error) {
        throw error; 
    }
};