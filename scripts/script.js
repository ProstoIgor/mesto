function() {
  let formElement = document.querySelector('.popup__form');
  let nameInput = document.querySelectorAll('.popup__input')[0];
  let biographyInput = document.querySelectorAll('.popup__input')[1];
  let popup = document.querySelector('.popup');
  let editBtn = document.querySelector('.profile__button-edit');
  let profileName = document.querySelector('.profile__name');
  let profileBio = document.querySelector('.profile__bio');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  biographyInput.value = profileBio.textContent;
}

function closePopup() {
  popup.classList.remove('popup_close');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = biographyInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
editBtn.addEventListener('click', openPopup);

let closeBtn = document.querySelector('.popup__close');
closeBtn.addEventListener('click', closePopup);
}
