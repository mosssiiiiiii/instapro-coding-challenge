import { getByTestId, render, screen, within } from "@testing-library/react";
import Main from "../Main";
import userEvent from "@testing-library/user-event";

describe("main page integration test", () => {
  it.only("rendering test", async () => {
    render(<Main initialValue={[]} />);
    const user = userEvent.setup();

    //Adding Todo Column
    await user.click(screen.getByTestId("add-wrap"));
    expect(screen.getByTestId("add-input")).toBeInTheDocument();
    await user.type(screen.getByTestId("add-input"), "Todo");
    await user.click(screen.getByTestId("add-button"));

    //Adding Doing Column
    await user.click(screen.getByTestId("add-wrap"));
    expect(screen.getByTestId("add-input")).toBeInTheDocument();
    await user.type(screen.getByTestId("add-input"), "Doing");
    await user.click(screen.getByTestId("add-button"));

    expect(screen.queryAllByTestId("column")).toHaveLength(2);
    expect(screen.queryAllByTestId("column-wrap")[0]).toHaveTextContent("Todo");
    expect(screen.queryAllByTestId("column-wrap")[1]).toHaveTextContent(
      "Doing"
    );

    expect(screen.getByTestId("clm-0")).toBeInTheDocument();
    await user.click(screen.getByTestId("clm-0"));
    expect(screen.getByTestId("add-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-button")).toBeInTheDocument();
    await user.type(screen.getByTestId("add-input"), "This is a test card");
    await user.click(screen.getByTestId("add-button"));

    expect(screen.queryAllByTestId("column")[0]).toHaveTextContent(
      "This is a test card"
    );

    expect(screen.getByTestId("crd-0")).toBeInTheDocument();
    expect(screen.getByTestId("crd-0")).toHaveTextContent(
      "This is a test card"
    );

    await user.click(screen.getByTestId("crd-0"));
    expect(screen.queryByTestId("add-input")).not.toBeInTheDocument();
    expect(screen.queryByTestId("add-button")).not.toBeInTheDocument();

    expect(screen.getByTestId("modal")).toBeInTheDocument();

    await user.selectOptions(
      screen.getByTestId("move-card-options"),
      screen.getByRole("option", { name: "Doing" })
    );

    expect(screen.queryAllByTestId("column")[0]).not.toHaveTextContent(
      "This is a test card"
    );

    expect(screen.queryAllByTestId("column")[1]).toHaveTextContent(
      "This is a test card"
    );
  });
});
