import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setAllCars: (state, action) => {
            state.cars = action.payload
        }
    }
})


const {reducer: carReducer, actions} = carsSlice;
const carActions = {...actions};

export {
    carReducer,
    carActions
}