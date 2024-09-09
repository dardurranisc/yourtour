/*Фиксированное меню HEADER */
let header = document.getElementById('header').classList
let active__class_position = "header_position"

let header__inner = document.getElementById('header__inner').classList
let active__class_inner = "header__inner-fixed"

let header__logo = document.getElementById('header__logo').classList
let active__class_logo = "header__logo-fixed"


window.addEventListener('scroll', e => {
  if(pageYOffset > 450){
    header.add(active__class_position)
    header__inner.add(active__class_inner)
    header__logo.add(active__class_logo)
  } 
  else {
      header.remove(active__class_position)
      header__inner.remove(active__class_inner)
      header__logo.remove(active__class_logo)
  }
})
function Hidden(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}