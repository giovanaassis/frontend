import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Recipes from "../components/ListRecipes";

describe("ListRecipes Component", () => {
  it("should render correctly", () => {
    render(<Recipes />);

    expect(screen.getByText("Chef Fácil")).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Todas as receitas" })
    ).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Doces" })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Salgadas" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Agridoces" })
    ).toBeInTheDocument();
  });
});
