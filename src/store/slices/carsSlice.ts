import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    trigger: true,
    carForUpdate: null
}

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();

            // маємо повертати ось це:
            // return thunkAPI.fulfillWithValue(data)
            // але це можна писати (скоротити) як просто data
            return data;
        } catch (e) {
            // якщо помилка повертаємо response.data обєкта (e), тобто обєкта помилки
            const error = e.response.data
            console.log(error)
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setAllCars: (state, action) => {
            state.cars = action.payload
        },
        trigger: state => {
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
        })
})

const {reducer: carReducer, actions} = carsSlice;

// AsyncThunk додаємо до carActions
const carActions = {
    ...actions,
    getAll
};

export {
    carReducer,
    carActions
}