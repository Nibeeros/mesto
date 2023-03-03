const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__button-close');
const editPopup = document.querySelector('.popup_edit-profile');
const addPopup = document.querySelector('.popup_add-card');
const imagePopup = document.querySelector('.popup_image');
const linkImage = document.querySelector('.popup__card-image');
const nameImage = document.querySelector('.popup__caption');
const popupEditNameInput = document.querySelector('.popup__input_info_name');
const popupEditJobInput = document.querySelector('.popup__input_info_job');
const popupAddCardName = document.querySelector('.popup__card-name');
const popupAddCardLink = document.querySelector('.popup__card-link');
const editform = document.querySelector('.popup__edit-form');
const addform = document.querySelector('.popup__add-form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.cards__template').content;
const cardTitle = document.querySelector('.cards__title')

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function defaultProfileData() {
  popupEditNameInput.value = profileName.textContent;
  popupEditJobInput.value = profileJob.textContent;
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameInput.value;
  profileJob.textContent = popupEditJobInput.value;
  closePopup(editPopup);
}

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  addCard(cardsList, createCard(popupAddCardName.value, popupAddCardLink.value));
  closePopup(addPopup);
  evt.target.reset();
}

function addCard(container, element) {
  container.prepend(element);
}

function addInfoImage(name, link) {
  nameImage.textContent = name;
  nameImage.alt = name;
  linkImage.src = link;
}

function createCard(name, link) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.cards__image');
  const cardTitle = card.querySelector('.cards__title');
  const cardLike = card.querySelector('.cards__like');
  const cardBasket = card.querySelector('.cards__basket');
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardBasket.addEventListener('click', deleteCard);
  cardLike.addEventListener('click', activateLike);
  cardImage.addEventListener('click', () => {
    addInfoImage(name, link),
      openPopup(imagePopup)
  });
  return card;
}

function activateLike(event) {
  event.target.classList.toggle('cards__like_active');
}

function deleteCard(event) {
  event.target.closest('.cards__item').remove();
}

editButton.addEventListener('click', () => {
  openPopup(editPopup),
    defaultProfileData()
});

addButton.addEventListener('click', () => {
  openPopup(addPopup)
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

editform.addEventListener('submit', editFormSubmitHandler);
addform.addEventListener('submit', addFormSubmitHandler);


initialCards.forEach((data) => {
  addCard(cardsList, createCard(data.name, data.link))
});
