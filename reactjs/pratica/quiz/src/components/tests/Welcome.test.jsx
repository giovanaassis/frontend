import { render, screen } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import Welcome from "../Welcome";
import { QuizContext } from "../../context/Quiz";

test("it shoud render correctly", () => {
  const mockValue = ["Start", vitest.fn()];

  render(
    <QuizContext.Provider value={mockValue}>
      <Welcome />
    </QuizContext.Provider>
  );

  expect(screen.getByText("Seja Bem-vindo")).toBeInTheDocument();
});
