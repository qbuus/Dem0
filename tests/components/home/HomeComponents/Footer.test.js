import { render, screen } from "@testing-library/react";
import { Footer } from "../../../../components/home/HomeComponents/Footer/Footer";

it("renders footer correctly", () => {
  render(<Footer />);
  const HeaderText = screen.getByRole("heading");
  expect(HeaderText).toBeInTheDocument();
});
