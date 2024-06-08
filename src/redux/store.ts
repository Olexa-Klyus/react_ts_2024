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
});

// потрібно параметризувати два хуки, які будуть часто використовуватися в компонентах, щоб потім не робити це кожен раз
// для цього створюємо два параметризовані кастомні хуки, які будемо використовувати замість них

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

// у ВЕТАЛЯ було по іншому
// const {reducer: counter1Reducer, actions} = counter1Slice;
//
// const counter1Actions = {...actions};
//
// export {counter1Actions, counter1Reducer}