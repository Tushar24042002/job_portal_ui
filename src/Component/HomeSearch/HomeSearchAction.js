import axios from 'axios';

export const getAllJob = async () => {
    try {
        const response = await axios.get("http://localhost:5000/job");
        return response
    } catch (error) {
        throw error; // Throw error if request fails
    }
};


export const getSingleJob = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/job/${id}`);
        return response
    } catch (error) {
        throw error; // Throw error if request fails
    }
};
