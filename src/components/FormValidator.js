export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }

  // Функция, которая проверяет валидность поля, внутри вызывает функцию showInputError или hideInputError
  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Функция, которая добавляет класс с ошибкой
  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.classList.add(this._settings.errorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}`);

    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = "";
  };

  // Функция принимает массив полей
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _setEventListeners = () => {
    this._toggleButtonState();

    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this._enableButton();
    }
  };

  disableButton = () => {
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
    this._submitButton.setAttribute("disabled", "disabled");
  };

  _enableButton = () => {
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    this._submitButton.removeAttribute("disabled");
  };

  enableValidation = () => {
    this._setEventListeners();
  };

  resetValidation() {
    this._toggleButtonState(); //<== управляем кнопкой ==

    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement) //<==очищаем ошибки ==
    });

  }

}
