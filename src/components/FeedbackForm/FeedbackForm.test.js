import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

test('отображает кнопку "Написать нам"', () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText('Написать нам');
  expect(buttonElement).toBeInTheDocument();
});

test('модальное окно изначально закрыто', () => {
  render(<FeedbackForm />);
  const modalElement = screen.queryByTestId('modal-feedback-form'); 
  expect(modalElement).toBeNull();
});

test('нажатие на кнопку "Написать нам" открывает модальное окно', () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText('Написать нам');
  fireEvent.click(buttonElement);

  const modalElement = screen.getByTestId('modal-feedback-form'); 
});

test('нажатие на кнопку закрытия в модальном окне закрывает его', () => {
  render(<FeedbackForm />);
  const buttonElement = screen.getByText('Написать нам');
  fireEvent.click(buttonElement);

  const closeButton = screen.getByText('Закрыть');
  fireEvent.click(closeButton);

  const modalElement = screen.queryByTestId('modal-feedback-form'); 
  expect(modalElement).toBeNull();
});

