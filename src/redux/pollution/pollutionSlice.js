// src/redux/pollution/pollutionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // You also need this import!
import { fetchPollutionByCountry } from './pollutionAPI';
const API_KEY = '10e28895-2ab5-4dba-8c1c-6594e06be8c0'; // Replace with your real key


export const fetchPollution = createAsyncThunk(
    'pollution/fetchPollution',
    async ({ country, state }, thunkAPI) => {
        try {
            const url = `https://api.airvisual.com/v2/cities?country=${country}&state=${state}&key=${API_KEY}`;
            console.log('Fetching URL:', url);
            const response = await axios.get(url);
            console.log('API response:', response.data);
            return response.data.data;
        } catch (error) {
            console.error('API ERROR:', error.response?.data || error.message);
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Failed to fetch data'
            );
        }
    }
);


const pollutionSlice = createSlice({
    name: 'pollution',
    initialState: {
        cities: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPollution.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPollution.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cities = action.payload;
            })
            .addCase(fetchPollution.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default pollutionSlice.reducer;
