import { render, screen } from "@testing-library/react";
import Success from "../../customComponents/Success/Success";
import { StateContext } from "../../pagecontext/PageState";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  query: {},
  push: () => {},
});

it("renders success text", async () => {
  useRouter.mockReturnValue({
    query: {},
    push: () => {},
  });

  render(
    <StateContext>
      <Success />
    </StateContext>
  );

  const textSuccess = screen.getByText(
    "Thank you for your purchase" &&
      "You will be redirected to the home page in a second"
  );
  expect(textSuccess).toBeInTheDocument();
});
