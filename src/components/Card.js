export default class Card {
  constructor(
    data,
    templateSelector,
    userId,
    handleCardClick,
    likeCard,
    dislikeCard,
    handleCardsConfirm,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data.id;
    this._likes = data.likes;
    this._ownerId = data.ownerId;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._likeButton = this._element.querySelector(".element__like");
    this._deleteBusket = this._element.querySelector(".element__del");
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
    this._handleCardsConfirm = handleCardsConfirm;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._owner();
    this._liked();
    this._likeTotal = this._element.querySelector(".element__like-total");
    this._likeTotal.textContent = `${this._likes.length}`;
    return this._element;
  }

  _setEventListeners() {
    // слушатель лайка
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__like_active")) {
        this._dislikeCard();
      } else {
        this._likeCard();
      }
    });

    // слушатель открытия попапа с картинкой
    this._cardImage.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    // слушатель удаления карточки
    this._deleteBusket.addEventListener("click", () => {
      this._handleCardsConfirm(this);
    });
  }

   // фукция удаления карточки

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _owner() {
    if (this._userId !== this._ownerId) {
      this._element.querySelector(".element__del").remove();
    }
  }

  //переключатель лайка

  handleLikeClick() {
    this._likeButton.classList.toggle("element__like_active");
  }

  _liked() {
    if (this._likes.some((user) => user._id === this._userId))
      this.handleLikeClick();
  }

  // кол-во лайков

  getLikesTotal(data) {
    this._likeTotal.textContent = `${data.likes.length}`;
  }

  //открытие попапа с картинкой по клику карточки

  _handleOpenPopup() {
    this._handleCardClick(this._link, this._name);
  }
}
