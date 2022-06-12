import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Add from "../Add";

describe("components > Add", () => {
  it("show input", async () => {
    expect.assertions(8);
    render(<Add title="Add some test" />);
    expect(screen.getByTestId("add-wrap")).toHaveTextContent("+ Add some test");

    const user = userEvent.setup();

    await user.click(screen.getByTestId("add-wrap"));
    expect(screen.queryByTestId("add-wrap")).not.toHaveTextContent(
      "+ Add some test"
    );

    expect(screen.getByTestId("add-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-button")).toBeInTheDocument();
    expect(screen.getByTestId("close-button")).toBeInTheDocument();

    await user.click(screen.getByTestId("close-button"));

    expect(screen.queryByTestId("add-input")).not.toBeInTheDocument();
    expect(screen.queryByTestId("add-button")).not.toBeInTheDocument();
    expect(screen.queryByTestId("close-button")).not.toBeInTheDocument();
  });
});
