import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__item");
    this._submitBtn = this._formElement.querySelector(".popup__save");
    this._submitForm = submitForm;
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(
      (input) => (this._inputValues[input.name] = input.value)
    );
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  startSaving() {
    this._submitBtn.textContent = "Сохранение...";
  }

  setButtonText(text) {
    this._submitBtn.textContent = text;
  }
}
