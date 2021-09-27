//slice in redux is whole state of data, slice is just one piece of whole state
//allows data to be shared across webpage
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: ['Model S', 'Model 3', 'Model X', 'Model Y']
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export default carSlice.reducer