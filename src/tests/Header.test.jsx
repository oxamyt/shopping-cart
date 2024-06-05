import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/homepage/header/Header";

describe("Header component", () => {
  it("renders header", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders nav bar", () => {
    render(<Header />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
