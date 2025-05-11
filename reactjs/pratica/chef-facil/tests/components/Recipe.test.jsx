import { describe, expect, it } from "vitest";
import Recipe from "../../src/components/Recipe";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Recipe Component", () => {
  it("should render a message if a recipe is not found yet", () => {
    render(<Recipe />);

    expect(
      screen.getByText("Receita ainda não encontrada.")
    ).toBeInTheDocument();
  });

  it("should render the specific recipe", async () => {
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    );

    const recipe = await screen.findByRole("heading", {name: /frango agridoce/i});

    expect(recipe).toBeInTheDocument();
  });
});
