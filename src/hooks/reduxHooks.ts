import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../types";

// робимо свої хуки, які вже будуть типізовані - щоб не прописувати типізацію поствійно вкоді
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {
    useAppSelector,
    useAppDispatch
}