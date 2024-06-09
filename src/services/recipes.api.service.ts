import axios from "axios";


let axiosInstance = axios.create({
    baseURL: 'https://petition.president.gov.ua/petition/222732',
    headers: {
        'Content-Type': 'application/json'

    }
});

const getAllRecipes = (page: number) => {
    return axiosInstance.get('/votes/' + page + '/json')
}


export {getAllRecipes}