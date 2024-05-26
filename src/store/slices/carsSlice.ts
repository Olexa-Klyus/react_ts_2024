import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    trigger: true,
    carForUpdate: null,
    loading: true,
    error: null
}

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, thunkAPI) => {
        try {
            // зробили затримку, щоб побачити напис Loading...
            await new Promise(resolve => setTimeout(resolve, 2000))

            const {data} = await carService.getAll();
            // маємо повертати ось це:
            // return thunkAPI.fulfillWithValue(data)
            // але це можна писати (скоротити) як просто data
            return data;
        } catch (e) {
            // якщо помилка повертаємо response.data обєкта (e), тобто обєкта помилки
            const error = e.response.data;
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, carData}, thunkAPI) => {
        try {
            const {data} = await carService.updateById(id, carData);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carService/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
//----------------------------------------------------------------------------------------------
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        // setAllCars: (state, action) => {
        //     state.cars = action.payload
        // },
        // trigger: state => {
        //     state.trigger = !state.trigger
        // },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },

    // додаємо сюди всі три можливі стани (успіх, процес завантаження, помилка)і прописуємо action, якщо потрібно
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
        })

        // .addCase(create.fulfilled, state => {
        //     state.trigger = !state.trigger
        // })
        .addCase(updateById.fulfilled, state => {
            // state.trigger = !state.trigger
            state.carForUpdate = null
        })

        // .addCase(getAll.pending, state => {
        //     state.loading = true
        // })
        // .addCase(getAll.rejected, (state, action) => {
        //     state.error = action.payload.detail
        //     state.loading = false
        // })

        //----------------------------------------------------------------------------------------------
        // є ще варіант запису станів через .addMatcher і спец функції isPending,isFulfilled,
        // -  там можна перерахувати слайси, якщо операції в них однакові

        .addMatcher(isFulfilled(updateById, create, deleteById), state => {
            state.trigger = !state.trigger
        })

        .addMatcher(isFulfilled(getAll), state => {
            state.loading = false
            state.error = null
        })

        .addMatcher(isPending(getAll), state => {
            state.loading = true
        })

        .addMatcher(isRejected(getAll), (state, action) => {
            state.loading = false
            state.error = action.payload.detail
        })
})

const {reducer: carReducer, actions} = carsSlice;

// AsyncThunk додаємо до carActions
const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
};

export {
    carReducer,
    carActions
}