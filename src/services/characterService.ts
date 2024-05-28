import {apiService} from "./apiService";
import {urls} from "../constants";
import axios from "axios";

// переробити так щоб картинки при завантаженні зявлялися разом з текстом
const characterService = {
    getByIds: async (ids) => {
        const {data: characters} = await apiService.get(urls.characters.byIds(ids));

        // збираємо проміси в масив, щоб одночасно показати
        // вказуємо в responseType що будемо повертати файли (бінарні дані)
        const promises = [];
        for (const character of characters) {
            promises.push(axios.get(character.image, {responseType: 'blob'}))
        }
        console.log(promises)

        //запускаємо іотримуємо масив обєктів відповідей
        const responses = await Promise.all(promises);
        console.log(responses)

        //формуємо масив посилань на наші картинки в оперативній памяті
        const res = responses.map(response => URL.createObjectURL(response.data));

        // підміняємо в characters посилання на image в оперативній памяті
        for (let i = 0; i < characters.length; i+=1) {
            characters[i].image = res[i]
        }
        return characters
    }
}

export {
    characterService
}