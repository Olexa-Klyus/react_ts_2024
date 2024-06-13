import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    count1value: number
}

const initialState: CounterStateType = {
    count1value: 0
};

const counterSlice = createSlice({
    name: 'counter1',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count1value = state.count1value + 1
        },
        decrement: (state) => {
            state.count1value = state.count1value - 1
        },
        reset: (state, action: PayloadAction<number>) => {
            state.count1value = action.payload;
        }
    }
});

const {...actions} = counterSlice.actions

export {
    counterSlice,
    actions
}