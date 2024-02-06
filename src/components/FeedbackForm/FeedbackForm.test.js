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

test('модальное окно должно содержать кнопку "Отправить"', () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText("Написать нам");
  fireEvent.click(buttonElement);

  const submitButton = screen.getByText("Отправить");
  expect(submitButton).toBeInTheDocument();
});

test('начальное состояние чекбокса в модальном окне должно быть "unchecked"', () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText("Написать нам");
  fireEvent.click(buttonElement);

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("клик по чекбоксу в модальном окне должен изменить его состояние", () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText("Написать нам");
  fireEvent.click(buttonElement);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});

test("начальное состояние выпадающего списка должно быть пустым", () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText("Написать нам");
  fireEvent.click(buttonElement);

  const selectElement = screen.getByRole("combobox");
  expect(selectElement).toHaveValue("");
});

test("выбор значения в выпадающем списке должен изменить его состояние", () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText("Написать нам");
  fireEvent.click(buttonElement);

  const selectElement = screen.getByRole("combobox");
  fireEvent.change(selectElement, { target: { value: "powerOutage" } });

  expect(selectElement).toHaveValue("powerOutage");
});
