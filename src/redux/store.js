// import { configureStore } from '@reduxjs/toolkit';
// import pollutionReducer from './pollution/pollutionSlice';

// const store = configureStore({
//     reducer: {
//         pollution: pollutionReducer,
//     },
// });

// export default store;


// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import pollutionReducer from './pollution/pollutionSlice';

export const store = configureStore({
    reducer: {
        pollution: pollutionReducer,
    },
});
export default store;