
import axios from 'axios';
export const employerRegisterRequest = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/users/create", data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const employerLoginRequest = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/users/login", data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const employerProfileRequest = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/employer/add", data);
        return response;
    } catch (error) {
        throw error;
    }
};

