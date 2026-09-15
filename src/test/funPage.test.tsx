import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FunPage } from "../pages/FunPage";

describe("fun page", () => {
  it("lets visitors choose world-fact categories and roll another fact", () => {
    render(<FunPage />);

    expect(screen.getByRole("heading", { name: /world fact generator/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /mini logic challenge/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /pattern memory game/i })).toBeInTheDocument();

    const cultureButton = screen.getByRole("button", { name: /culture/i });
    fireEvent.click(cultureButton);

    expect(cultureButton).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(screen.getByRole("button", { name: /roll another fact/i }));

    expect(screen.getByText(/Roll 02/i)).toBeInTheDocument();
  });
});
