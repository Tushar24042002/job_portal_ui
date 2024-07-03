import axios from 'axios';

export const getAllIndustry = async () => {
    try {
        const response = await axios.get("http://localhost:5000/industry");
        return response
    } catch (error) {
        throw error; // Throw error if request fails
    }
};


export const addJob = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/job/add", data);
        return response;
    } catch (error) {
        throw error;
    }
};