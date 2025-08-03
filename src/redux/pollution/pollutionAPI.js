// src/redux/pollution/pollutionAPI.js
import axios from 'axios';

const API_KEY = '10e28895-2ab5-4dba-8c1c-6594e06be8c0'; // Replace if not already
const BASE_URL = 'https://api.airvisual.com/v2';

export const fetchPollutionByCountry = async (country = 'USA') => {
    const response = await axios.get(`${BASE_URL}/cities`, {
        params: {
            country,
            key: API_KEY,
        },
    });

    return response.data.data;
};
