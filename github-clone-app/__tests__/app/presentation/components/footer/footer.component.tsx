import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/presentation/components/footer/footer.component";

describe("Footer component", () => {
  it("renders well", () => {
    render(<Footer />);

    const heading = screen.getByTestId("footer");

    expect(heading).toBeInTheDocument();
  });
});
