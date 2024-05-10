import axios from "axios";
import recipe from "../components/recipe/Recipe";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

const getAllRecipes = () => {
    return axiosInstance.get('/recipes')
}


export {getAllRecipes}