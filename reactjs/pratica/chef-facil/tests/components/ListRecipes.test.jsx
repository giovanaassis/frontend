import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Recipes from "../../src/components/ListRecipes";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("ListRecipes Component", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    const typesOfRecipes = [
      "Todas as receitas",
      "Doces",
      "Salgadas",
      "Agridoces",
    ];

    expect(screen.getByText("Chef Fácil")).toBeInTheDocument();
    typesOfRecipes.forEach((type) => {
      expect(screen.getByRole("option", { name: type })).toBeInTheDocument();
    });
  });

  it("should render recipes", async () => {
    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    const recipe = await screen.findByText(/frango agridoce/i);
    expect(recipe).toBeInTheDocument();
  });

  it("should render only the selected types of recipes", async () => {
    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    const select = screen.getByTestId("select");
    const user = userEvent.setup();
    await user.selectOptions(select, "doce");

    expect(select).toHaveValue("doce");
    const recipes = await screen.findAllByRole("button", {
      name: /ver receita/i,
    });
    recipes.forEach(() => {
      expect(screen.getByText(/tipo: doce/i)).toBeInTheDocument();
    });
  });

  it("should render loading message", () => {
    render(
      <MemoryRouter>
        <Recipes />
      </MemoryRouter>
    );

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });
});
