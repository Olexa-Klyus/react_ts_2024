import axios from "axios";


let axiosInstance = axios.create({
    baseURL: 'https://petition.president.gov.ua/petition/222732',
    headers: {
        'Content-Type': 'application/json'

    }
});

const getAllRecipes = () => {
    return axiosInstance.get('/votes/3/json')
}


export {getAllRecipes}