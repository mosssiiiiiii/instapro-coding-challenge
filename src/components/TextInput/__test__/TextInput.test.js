import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "..";

describe("components > TextInput", () => {
  it("change", async () => {
    expect.assertions(4);
    render(
      <TextInput
        inputRef={null}
        name="test"
        type="text"
        placeholder="please enter"
      />
    );

    expect(screen.getByTestId("test")).toHaveAttribute("type", "text");
    expect(screen.getByTestId("test")).toHaveAttribute("name", "test");

    fireEvent.change(screen.getByTestId("test"), {
      target: { value: "This is a test" },
    });

    expect(screen.getByTestId("test")).toHaveValue("This is a test");

    fireEvent.change(screen.getByTestId("test"), {
      target: { value: "" },
    });

    expect(screen.getByTestId("test")).toHaveValue("");
  });
});
