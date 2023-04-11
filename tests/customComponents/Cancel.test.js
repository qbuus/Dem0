import { render, screen } from "@testing-library/react";
import Cancel from "../../customComponents/Cancel/Cancel";
import { StateContext } from "../../pagecontext/PageState";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  query: {},
  push: () => {},
});

it("renders cancel text properly", () => {
  useRouter({
    query: {},
    push: () => {},
  });

  render(
    <StateContext>
      <Cancel />
    </StateContext>
  );

  const CancelText = screen.getByText(
    "Your purchase has been canceled<" &&
      "Cart has been cleared" &&
      "You will be redirected to the home page in a second"
  );

  expect(CancelText).toBeInTheDocument();
});
