import { axiosInstance } from "../../axiosInstance";

export const verifyOTP = async (data) => {
    try {
        const response = await axiosInstance.post("/users/verify-otp", data);
        return response;
    } catch (error) {
        throw error;
    }
};