/*Фиксированное меню HEADER */
const headerClassList = document.getElementById('header').classList
const activeClassPosition = "header_position"

const headerInner = document.getElementById('header__inner').classList
const activeClassInner = "header__inner-fixed"

const headerLogo = document.getElementById('header__logo').classList
const activeClassLogo = "header__logo-fixed"


window.addEventListener('scroll', e => {
  if(pageYOffset > 450){
    headerClassList.add(activeClassPosition)
    headerInner.add(activeClassInner)
    headerLogo.add(activeClassLogo)
  } 
  else {
      headerClassList.remove(activeClassPosition)
      headerInner.remove(activeClassInner)
      headerLogo.remove(activeClassLogo)
  }
})
function validateNameString(event) {
  if (/\d/.test(event.key))
    event.preventDefault();
}