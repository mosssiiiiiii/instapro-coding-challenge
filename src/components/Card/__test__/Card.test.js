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
    render(<Card cards={cardsMock} />);

    expect(screen.getByTestId("crd-0")).toHaveTextContent("mohsen");
    expect(screen.getByTestId("crd-1")).toHaveTextContent("parisa");
  });
});
