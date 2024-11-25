import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows 2 inputs and a btn", () => {
  // part 1 render the component
  render(<UserForm />);

  // part 2 manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // part 3 made an asserion - make sure the component is doing whay we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
