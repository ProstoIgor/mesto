let editButton = document.querySelector('.profile__button-edit');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelectorAll('.popup__input')[0];
let bioInput = document.querySelectorAll('.popup__input')[1];

function editProfile() {
  popup.classList.add('popup_opened');
}

function closeProfile() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;

  nameInput.value = profileName.textContent;
  bioInput.value.value = profileBio.textContent;
  closeProfile();
}

editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closeProfile);
formElement.addEventListener('submit', formSubmitHandler);
