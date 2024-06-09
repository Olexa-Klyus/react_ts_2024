import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterStateType = {
    value: number;
}

// сховище store може складатися з багатьох слайсів
// кожен слайс створюється за допомогою createSlice з опціями
// параметризація слайсу робиться за рахунок параметризації initialState

const initialState: CounterStateType = {
    value: 0,
};

const initialState2: CounterStateType = {
    value: 0,
}


const counter1Slice = createSlice({
    name: 'counter1SliceName',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        // PayloadAction- це спеціальний тип для параметрицзації action
        incrementByAmount: (state,
                            action: PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
    }
});

const counter2Slice = createSlice({
    name: 'counter2SliceName',
    initialState:initialState2,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        // PayloadAction- це спеціальний тип для параметрицзації action
        incrementByAmount: (state,
                            action: PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
    }
});

// наші редусери під капотом попадають в counter1Slice.actions, їх треба звідти витягнути і експортнути

export const {
    increment, decrement, incrementByAmount
} = counter1Slice.actions;

// крім того потрібно зконфігурувати store, описати з яких слайсів він складається
const store = configureStore({
    reducer: {
        counter1SliceState: counter1Slice.reducer,
        counter2SliceState: counter2Slice.reducer,
    }
});

// --------------------------------------------------------------------------------------------------
// у ВЕТАЛЯ було по іншому
const {reducer: counter2Reducer, actions} = counter2Slice;

const counter2Actions = {...actions};

export {counter2Actions, counter2Reducer}
// --------------------------------------------------------------------------------------------------

// потрібно параметризувати два хуки, які будуть часто використовуватися в компонентах, щоб потім не робити це кожен раз
// для цього створюємо два параметризовані кастомні хуки, які будемо використовувати замість них

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

