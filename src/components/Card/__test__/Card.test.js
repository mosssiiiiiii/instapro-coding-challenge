import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "components";

const cardsMock = [
  {
    name: "mohsen",
    id: "15",
  },
  {
    name: "parisa",
    id: "13",
  },
];

describe("components > Card", () => {
  it("card rendering", () => {
    expect.assertions(4);
    render(<Card cards={cardsMock} />);

    expect(screen.getAllByTestId("card")).toHaveLength(2);
    expect(screen.queryAllByTestId("card")[0]).toHaveTextContent("mohsen");
    expect(screen.queryAllByTestId("card")[1]).toHaveTextContent("parisa");
    expect(screen.queryAllByTestId("card")).not.toHaveLength(5);
  });
});
