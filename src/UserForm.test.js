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

test("it call onUserAdd when the form is submitted", () => {
  // NOT THE BEST IMPLEMENTATION
const argList = []
  const callback = (...args) => {
    argList.push(args)
  }
  // try to render my component
  render(<UserForm onUserAdd={callback} />);

  // find the 2 inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // simulate typing name
  user.click(nameInput)
  user.keyboard('jane')

  // simulate typing email
  user.click(emailInput)
  user.keyboard('jane@jane.com')

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  user.click(button)

  // assertion to make 'onUserAdd' gets called with email and name
  expect(argList).toHaveLength(1)
  expect(argList[0][0]).toEqual({name: 'jane', email: 'jane@jane.com'})
});
