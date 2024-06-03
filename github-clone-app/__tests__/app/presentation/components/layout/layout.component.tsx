import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "@/presentation/components/layout/layout.component";

describe("Layou component", () => {
  it("renders well", () => {
    render(
      <Layout>
        <div>My app</div>
      </Layout>
    );

    const heading = screen.getByTestId("layout-app");

    expect(heading).toBeInTheDocument();
  });
});
