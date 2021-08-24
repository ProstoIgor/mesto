let editButton = document.querySelector('.profile__button-edit');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let bioInput = document.querySelector('.popup__input_bio');

function openPopup() {
  popup.classList.add('popup_opened');
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}       

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
