import cards from '../tpl/cards.hbs';
import menu from '../menu.json';

interface Themes{
  [key:string]:string
}


const Theme:Themes = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuList = document.querySelector('.js-menu');
const htmlMenu: string = cards(menu);
const themeSwitch: HTMLInputElement = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

menuList.innerHTML = htmlMenu;

const isThemeDark = () => {
  if (localStorage.getItem('Theme')) {
    themeSwitch.checked = true;
    body.classList.add(localStorage.getItem('Theme'));
  } else {
    body.classList.add(Theme.LIGHT);
  }
  return;
};
isThemeDark();
themeSwitch.addEventListener('change', e => {
  if (body.classList.contains(Theme.DARK)) {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.removeItem('Theme');
  } else {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', 'dark-theme');
  }
});
