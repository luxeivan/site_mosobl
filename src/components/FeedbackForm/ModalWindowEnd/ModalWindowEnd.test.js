import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ModalWindow from "./ModalWindowEnd";

const mockTitle = "Тестовая тема";
const mockContent = "Тестовое содержание";

test("нажатие на кнопку 'Закрыть' вызывает функцию onClose", () => {
  const onCloseMock = jest.fn();
  render(
    <ModalWindow
      title={mockTitle}
      content={mockContent}
      onClose={onCloseMock}
    />
  );
  const closeButton = screen.getByText("Закрыть");

  fireEvent.click(closeButton);

  expect(onCloseMock).toHaveBeenCalled();
});

test("нажатие на кнопку 'Закрыть' вызывает функцию onClose", () => {
  const onCloseMock = jest.fn();
  render(
    <ModalWindow
      title={mockTitle}
      content={mockContent}
      onClose={onCloseMock}
    />
  );
  const closeButton = screen.getByText("Закрыть");

  fireEvent.click(closeButton);

  expect(onCloseMock).toHaveBeenCalled();
});

test("модальное окно содержит кнопку 'Копировать текст письма'", () => {
  render(<ModalWindow title={mockTitle} content={mockContent} />);
  const copyButton = screen.getByText("Копировать текст письма");
  expect(copyButton).toBeInTheDocument();
});

test("модальное окно содержит кнопку 'Закрыть'", () => {
  render(<ModalWindow title={mockTitle} content={mockContent} />);
  const closeButton = screen.getByText("Закрыть");
  expect(closeButton).toBeInTheDocument();
});

// test("компонент ModalWindow корректно обрабатывает успешное копирование текста", () => {
//   const clipboardWriteTextMock = jest.fn(() => Promise.resolve());
//   Object.assign(navigator, {
//     clipboard: {
//       writeText: clipboardWriteTextMock,
//     },
//   });

//   const alertMock = jest.spyOn(window, "alert");

//   render(<ModalWindow title={mockTitle} content={mockContent} />);
//   const copyButton = screen.getByText("Копировать текст письма");

//   fireEvent.click(copyButton);

//   return Promise.resolve().then(() => {
//     expect(alertMock).toHaveBeenCalledWith("Текст скопирован!");
//   });
// });
