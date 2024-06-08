import {createSlice} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number;
}

// сховище store може складатися з багатьох слайсів
// кожен слайс створюється за допомогою createSlice з опціями
// параметризація слайсу робиться за рахунок параметризації initialState

const initialState: CounterStateType = {
    value:0,
}

const counter1Slice = createSlice({
    name: 'counter1SliceName',
    initialState,


})