import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, image, title) {
    super(popupSelector);
    this._image = image;
    this._title = title;
  }

  open(link, name) {
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    super.open();
  }
}
