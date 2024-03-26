import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

test('отображает кнопку "Написать нам"', () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText("Написать нам");
  expect(buttonElement).toBeInTheDocument();
});

test("модальное окно изначально закрыто", () => {
  render(<FeedbackForm />);
  const modalElement = screen.queryByTestId("modal-feedback-form");
  expect(modalElement).toBeNull();
});

test("начальное состояние модального окна должно быть закрытым", () => {
  render(<FeedbackForm />);
  const modalElement = screen.queryByTestId("modal-feedback-form");
  expect(modalElement).toBeNull();
});

// test('модальное окно должно содержать кнопку "Отправить"', () => {
//   render(<FeedbackForm />);
//   const buttonElement = screen.getByText("Написать нам");
//   fireEvent.click(buttonElement);

//   const submitButton = screen.getByText("Отправить");
//   expect(submitButton).toBeInTheDocument();
// });

