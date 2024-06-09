import React, {FC, useEffect, useState} from 'react';
import {getAllRecipes} from "../../services/recipes.api.service";


const Recipes: FC = () => {


    const [recipes, setRecipes] = useState<any>([])

    useEffect(() => {
        getAllRecipes()
            .then(value => JSON.stringify(value.data))
            .then(value => value.slice(0, value.indexOf('","pag_html"')))
            .then(value => value.slice(value.indexOf('<div class=\\"table_cell number\\">')))
            .then(value => value.replaceAll('&#039;', ""))
            .then(value => value.replaceAll('.', ""))
            .then(value => value.replaceAll(/<div class=\\"table_cell number\\">/g, '"id":'))
            .then(value => value.replaceAll(/<div class=\\"table_cell name\\">/g, ',"name":"'))
            .then(value => value.replaceAll(/<div class=\\"table_cell date\\">/g, '","date":"'))
            .then(value => value.replaceAll(/<div>|<\/div>|\\n/g, ""))
            .then(value => value.replaceAll(/<div class=\\"table_row\\">/g, '"},{'))
            .then(value => '[{'+ value + '"}]')
            .then(value => JSON.parse(value))

            .then(value => setRecipes(value))

    }, []);

    console.log(recipes)
    return (
        <div>

            {/*{*/}
            {/*{recipes}*/}

            {/*        .map((value: IRecipeProps) => (*/}
            {/*            <Recipe key={value.id}*/}
            {/*                    id={value.id}*/}
            {/*                    name={value.name}*/}
            {/*                    cuisine={value.cuisine}*/}
            {/*                    mealType={value.mealType}*/}
            {/*                    instructions={value.instructions}*/}
            {/*                    image={value.image}/>))*/}
            {/*}*/}
        </div>
    );
};

export default Recipes;