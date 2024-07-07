import { axiosInstance } from "../../axiosInstance";

export const employerRegisterRequest = async (data) => {
    try {
        const response = await axiosInstance.post("/users/create", data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const loginRequest = async (data) => {
    try {
        const response = await axiosInstance.post("/users/login", data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const employerProfileRequest = async (data) => {
    try {
        const response = await axiosInstance.post("/employer/add", data);
        return response;
    } catch (error) {
        throw error;
    }
};

