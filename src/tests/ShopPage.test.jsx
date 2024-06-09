import { describe, it, expect, beforeEach, vi } from "vitest";
import ShopPage from "../components/shopPage/ShopPage";
import { render, screen, waitFor } from "@testing-library/react";
import { getClothesRequest } from "../components/shopPage/fetchCall/fetchCall";
import { BrowserRouter } from "react-router-dom";

vi.mock("../components/shopPage/fetchCall/fetchCall", () => ({
  getClothesRequest: vi.fn(),
}));

describe("Shop Page component", () => {
  beforeEach(() => {
    getClothesRequest.mockClear();
  });

  it("fetching api and display data", async () => {
    const mockData = [
      { id: 1, title: "Jeans" },
      { id: 2, title: "Shirt" },
    ];

    getClothesRequest.mockResolvedValueOnce(mockData);

    render(
      <BrowserRouter>
        <ShopPage />
      </BrowserRouter>
    );

    expect(screen.getByAltText("loading")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByAltText("loading")).not.toBeInTheDocument();

      screen.debug();
      expect(screen.queryByText("Jeans")).toBeInTheDocument();
      expect(screen.queryByText("Shirt")).toBeInTheDocument();
    });
  });

  it("handles fetch error", async () => {
    const mockError = new Error("Failed to fetch data");

    getClothesRequest.mockRejectedValueOnce(mockError);

    render(
      <BrowserRouter>
        <ShopPage />
      </BrowserRouter>
    );

    expect(screen.getByAltText("loading")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByAltText("loading")).not.toBeInTheDocument();
      expect(screen.getByText(`Error: ${mockError.message}`));
    });
  });
});
