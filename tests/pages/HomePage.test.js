import { cleanup, render, within } from "@testing-library/react";
import HomePage from "../../components/home/HomePage";
import { StateContext } from "../../pagecontext/PageState";

jest.mock("../../customComponents/Section/Section", () => {
  return <div data-testid="section" />;
});

jest.mock(
  "../../components/home/HomeComponents/HeroBanner/HeroBanner",
  () => {
    return <div data-testid="banner" />;
  }
);

afterAll(cleanup);

it("render homePage", () => {
  render(
    <StateContext>
      <HomePage />
    </StateContext>
  );

  const checkFirst = within(<HomePage />).getAllByTestId(
    "banner"
  );
  const checkSecond = within(<HomePage />).getAllByTestId(
    "section"
  );

  expect(checkFirst);
  expect(checkSecond);
});
