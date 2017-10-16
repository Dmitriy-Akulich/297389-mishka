var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var buttonOpenForm = document.querySelector('.product__button');
var formSection = document.querySelector('.modal-form');
var form = document.querySelector('.modal-form__form');
var formOpen = document.querySelector('.modal-form--open');
var goodsBuy = document.querySelector('.goods__buy');

navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

buttonOpenForm.addEventListener('click', openForm);

function openForm(e) {
  e.preventDefault();
  formSection.classList.toggle('modal-form--open');
}

form.onsubmit = function(event) {
  event.preventDefault();

  formSection.classList.remove('modal-form--open');
  formSection.classList.add('modal-form--none');

  alert("Спасибо, Ваша заявка принята!");
}

goodsBuy.addEventListener('click', openForm2);

function openForm2(o) {
  o.preventDefault();
  formSection.classList.toggle('modal-form--open');
};
