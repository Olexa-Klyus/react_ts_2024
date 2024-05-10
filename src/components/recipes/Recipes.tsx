import React, {FC, useEffect, useState} from 'react';
import Recipe from "../recipe/Recipe";
import {IRecipeProps} from "../../models/Recipe";
import {getAllRecipes} from "../../services/recipes.api.service";


const Recipes: FC = () => {


    const [recipes, setRecipes] = useState<IRecipeProps[]>([])

    useEffect(() => {
        getAllRecipes()
            .then(value => setRecipes(value.data.recipes));
        //
    }, []);


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