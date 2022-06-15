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
    expect.hasAssertions();
    render(<Card cards={cardsMock} />);

    for (let item of cardsMock) {
      expect(screen.queryAllByTestId(item.id).length).toEqual(1);
      expect(screen.queryAllByTestId(item.id)).not.toHaveLength(5);
    }

    expect(screen.getByTestId("15")).toHaveTextContent("mohsen");
    expect(screen.getByTestId("13")).toHaveTextContent("parisa");
  });
});
