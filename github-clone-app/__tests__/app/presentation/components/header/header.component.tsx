import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/presentation/components/header/header.component";

describe("Header component", () => {
  it("renders well", () => {
    render(<Header />);

    const heading = screen.getByTestId("header");

    expect(heading).toBeInTheDocument();
  });
});
