import React, {FC, useEffect, useState} from 'react';
import Recipe, {IRecipeProps} from "../recipe/Recipe";

const Recipes: FC = () => {


    const [recipes, setRecipes] = useState<IRecipeProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(value => value.json())
            .then(({recipes}) => {
                setRecipes(recipes);
            });
    }, []);

    console.log('vvv')

    return (
        <div>
            {
                recipes
                    .map((value: IRecipeProps) => (
                        <Recipe key={value.id}
                                id={value.id}
                                name={value.name}
                                cuisine={value.cuisine}
                                mealType={value.mealType}
                                instructions={value.instructions}
                                image={value.image}/>))
            }
        </div>
    );
};

export default Recipes;