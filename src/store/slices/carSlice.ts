import {createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";

interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    trigger: boolean
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
})

const {reducer: carReduser, actions} = carSlice;

const carActions = {
    ...actions
}

export {
    carReduser,
    carActions
}