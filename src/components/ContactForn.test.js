import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { Simulate } from "react-dom/test-utils";

test("Renders without crashing", () => {
  render(<ContactForm />);
});

test("Form can be submitted", async () => {
  const container = render(<ContactForm />);

  const f_name = container.getByTestId("f_name");
  f_name.value = "Edd";
  Simulate.change(f_name);
  expect(f_name.value).toBe("Edd");

  const l_name = container.getByTestId("l_name");
  l_name.value = "Richards";
  Simulate.change(l_name);
  expect(l_name.value).toBe("Richards");

  const email = container.getByTestId("email");
  email.value = "legendarycomedy1@gmail.com";
  Simulate.change(email);
  expect(email.value).toBe("legendarycomedy1@gmail.com");

  const message = container.getByTestId("message");
  message.value = "BLAH BLAH BLAH BLAH";
  Simulate.change(message);
  expect(message.value).toBe("BLAH BLAH BLAH BLAH");

  const submit = container.getByTestId("submit");
  await fireEvent.click(submit);

  setTimeout(() => {
    expect(container.getByTestId("response")).toBeTruthy();
  }, 1000);
});

test("Form can be submitted without message", async () => {
  const container = render(<ContactForm />);

  const f_name = container.getByTestId("f_name");
  f_name.value = "Edd";
  Simulate.change(f_name);
  expect(f_name.value).toBe("Edd");

  const l_name = container.getByTestId("l_name");
  l_name.value = "Richards";
  Simulate.change(l_name);
  expect(l_name.value).toBe("Richards");

  const email = container.getByTestId("email");
  email.value = "legendarycomedy1@gmail.com";
  Simulate.change(email);
  expect(email.value).toBe("legendarycomedy1@gmail.com");

  const submit = container.getByTestId("submit");
  await fireEvent.click(submit);

  setTimeout(() => {
    expect(container.getByTestId("response")).toBeTruthy();
  }, 1000);
});

test("Form can be submitted while name is > 4 characters", async () => {
  const container = render(<ContactForm />);

  const f_name = container.getByTestId("f_name");
  f_name.value = "Nathaniel";
  Simulate.change(f_name);
  expect(f_name.value).toBe("Nathaniel");

  const l_name = container.getByTestId("l_name");
  l_name.value = "Richards";
  Simulate.change(l_name);
  expect(l_name.value).toBe("Richards");

  const email = container.getByTestId("email");
  email.value = "legendarycomedy1@gmail.com";
  Simulate.change(email);
  expect(email.value).toBe("legendarycomedy1@gmail.com");

  const submit = container.getByTestId("submit");
  Simulate.submit(submit);

  setTimeout(() => {
    expect(container.getByTestId("response")).toBeTruthy();
  }, 1000);
});
