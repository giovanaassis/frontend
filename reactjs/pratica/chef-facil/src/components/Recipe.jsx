/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import apiFetch from "../axios/config";
import { useEffect, useState } from "react";
import "./Recipe.css";

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
  };

  useEffect(() => {
    getCurrentRecipe();
  }, []);

  return (
    <>
      <h1>Chef Fácil</h1>
      <Link to={"/"}>
        <button className="goBackBtn">VOLTAR</button>
      </Link>
      {!currentRecipe ? (
        <h3>Receita ainda não encontrada.</h3>
      ) : (
        <div className="recipe_container">
          <h2>{currentRecipe.receita}</h2>

          <fieldset className="ingredients">
            <legend>Ingredientes</legend>

            {ingredients.map((ingredient) => (
              <div className="ingredient" key={ingredient}>
                <input type="checkbox" id={ingredient} />
                <label htmlFor={ingredient}>{ingredient}</label>
              </div>
            ))}
          </fieldset>

          <h2>
            Modo de
            <br /> Preparo
          </h2>
          <ol>
            {modoPreparo.map((step) =>
              step ? <li key={step}>{step}</li> : null
            )}
          </ol>
        </div>
      )}
    </>
  );
};

export default Recipe;
