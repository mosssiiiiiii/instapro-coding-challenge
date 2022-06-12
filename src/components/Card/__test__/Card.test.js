import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "components";

const cardsMock = [
  {
    name: "mohsen",
    id: "15",
  },
  {
    name: "majid",
    id: "13",
  },
];

describe("components > Card", () => {
  it("card rendering", () => {
    render(<Card cards={cardsMock} />);

    expect(screen.getAllByTestId("card")).toHaveLength(2);
    expect(
      screen.queryByTestId("card-list").children.item(0)
    ).toHaveTextContent("mohsen");
  });
});
