import { render, screen } from "@testing-library/react";
import HorizontalScroll from "../HorizontalScroll";

describe("components > Horizontal Scroll", () => {
  it("render children", async () => {
    render(<HorizontalScroll>test children</HorizontalScroll>);

    expect(screen.getByTestId("horizontal-scroll")).toHaveTextContent(
      "test children"
    );
    expect(screen.getByText("test children")).toBeInTheDocument();
  });
});
