import { render, screen } from "@testing-library/react";
import { LOGO_URL } from "setup/constant";
import Header from "../Header";

describe("components > header", () => {
  it("rendering header", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toHaveTextContent(
      "Instapro Code Challenge"
    );
    expect(screen.getByTestId("header")).toHaveTextContent(
      "By Mohsen Haghighatkhah"
    );
    expect(screen.getByAltText("logo")).toHaveAttribute("src", LOGO_URL);
  });
});
