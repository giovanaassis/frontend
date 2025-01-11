/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import apiFetch from "../axios/config";
import { useEffect, useState } from "react";
import './Recipe.css';


const Recipe = () => {

    const params = useParams();
    const [currentRecipe, setCurrentRecipe] = useState();
    const [ingredients, setIngredients] = useState([]);
    const [modoPreparo, setModoPreparo] = useState([]);

    const getCurrentRecipe = async () => {

        try {
            const response = await apiFetch.get(`/${params.id}`);
            const data = response.data;
            console.log(data);
            setCurrentRecipe(data);

            if (data) {
                setIngredients(data.IngredientesBase[0].nomesIngrediente);
                const modo_preparo_str = data.modo_preparo;
                const modo_preparo_arr = modo_preparo_str.split(/\d+\.\s*/);
                setModoPreparo(modo_preparo_arr);
            }


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCurrentRecipe();
    }, [])


    return (
        <>
            <h1>Chef Fácil</h1>
            {
                !currentRecipe ? <h2>Receita ainda não encontrada.</h2> : (

                    <div className="recipe_container">
                        <h2>{currentRecipe.receita}</h2>

                        <fieldset className="ingredients">
                            <legend>Ingredientes</legend>

                            {ingredients.map(ingredient => (
                                <div className="ingredient">
                                    <input type="checkbox" id={ingredient} />
                                    <label htmlFor={ingredient}>{ingredient}</label>
                                </div>
                            ))}

                        </fieldset >

                        <h3>
                            Modo de
                            <br /> Preparo
                        </h3>
                        <ol>
                            {modoPreparo.map( step => step ? <li>{step}</li> : null )}
                        </ol>
                    </div>

                )
            }
        </>
    )
}

export default Recipe;

