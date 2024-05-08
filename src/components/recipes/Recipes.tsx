import React, {FC, useState} from 'react';
import Recipe, {IRecipeProps, IRecipeTypeProps} from "../recipe/Recipe";
import recipe from "../recipe/Recipe";

const Recipes: FC = () => {


    const [recipes, setRecipes] = useState([])

    fetch('https://dummyjson.com/recipes')
        .then(value => value.json())
        .then((value) => {
            console.log(value)

        });


    return (
        <div>
            {
                recipes
                    .map(({id, name, cuisine, instructions, mealType}: IRecipeProps) => (
                        <div> {id} {name}</div>))
            }
        </div>
    );
};

export default Recipes;