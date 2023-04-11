import { render, screen, within } from "@testing-library/react";
import { Nav } from "../../../../components/home/HomeComponents/Nav/Nav";

test("renders nav", () => {
  render(<Nav />);

  const text = screen.getByText(
    "Home" && "Products" && "Articles"
  );

  expect(text).toBeInTheDocument();
});
