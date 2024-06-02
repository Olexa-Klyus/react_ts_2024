import {useContext} from "react";
import {Context} from "../App";


// кастомний хук - це обгортка, в яку можна вкласти декілька дій і використовувати як інші хуки
// використовується для зменшення коду
// має починатися на use...
const useAppContext = () => useContext(Context);

export {
    useAppContext
}