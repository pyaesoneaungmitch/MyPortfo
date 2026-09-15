import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InteractivePortrait } from "../components/InteractivePortrait";

describe("interactive portrait", () => {
  it("expands a quadrant and renders inline details from keyboard activation", () => {
    render(<InteractivePortrait />);

    expect(screen.queryByText(/mitch in four parts/i)).not.toBeInTheDocument();

    const webQuadrant = screen.getByRole("button", { name: /web & ui design/i });

    webQuadrant.focus();
    fireEvent.keyDown(webQuadrant, { key: "Enter" });

    expect(webQuadrant).toHaveAttribute("aria-pressed", "true");
    expect(webQuadrant).toHaveAttribute("aria-describedby", "web-ui-inline-detail");
    expect(screen.queryByRole("region", { name: /web & ui design details/i })).not.toBeInTheDocument();
    expect(screen.getByText(/project interfaces around real user flows/i)).toBeInTheDocument();
  });
});
