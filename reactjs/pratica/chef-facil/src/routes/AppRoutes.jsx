import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipes from "../components/ListRecipes";
import Recipe from "../components/Recipe";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Recipes />} />
                <Route path={'/recipe/:id'} element={<Recipe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;