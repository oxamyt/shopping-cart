import { describe, it, expect, beforeEach } from "vitest";
import ShopPage from "../components/shopPage/ShopPage";
import { render, screen } from "@testing-library/react";
import { getClothesRequest } from "../components/shopPage/fetchCall/fetchCall";

describe.skip("Shop Page component", () => {
  beforeEach(() => {
    getClothesRequest.mockClear();
  });

  it("renders header", () => {
    render(<ShopPage />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
