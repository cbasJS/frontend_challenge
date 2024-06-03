import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WrapperIcon from "@/presentation/components/icons/wrapper.icon";

describe("WrapperIcon component", () => {
  it("renders well", () => {
    render(
      <WrapperIcon>
        <path />
      </WrapperIcon>
    );

    const heading = screen.getByTestId("wrapper-icon");

    expect(heading).toBeInTheDocument();
  });
});
