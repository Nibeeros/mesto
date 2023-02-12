let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let saveButton = popupContainer.querySelector('.popup__button-save');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popupContainer.querySelector('.popup__button-close');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileJob = profileInfo.querySelector('.profile__job');
let inputName = popup.querySelector('.popup__profile-name');
let inputJob = popup.querySelector('.popup__profile-job');
let popupForm = popupContainer.querySelector('.popup__form');
inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

function closePopup() {
  popup.classList.remove('popup_opened');
};

function openPopup() {
  popup.classList.add('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
};

popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

