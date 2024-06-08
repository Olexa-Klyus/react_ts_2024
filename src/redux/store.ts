import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number;
}

// сховище store може складатися з багатьох слайсів
// кожен слайс створюється за допомогою createSlice з опціями
// параметризація слайсу робиться за рахунок параметризації initialState

const initialState: CounterStateType = {
    value: 0,
}

const counter1Slice = createSlice({
    name: 'counter1SliceName',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
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
    }
})
