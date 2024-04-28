const toggleSwitch = document.querySelector('.checkbox');

/* navigtion section codes */
const menuBarElement = document.querySelector('.menu-bar-container');
const barsElements = document.querySelector('.menu-bar-container div')
const overlay = document.querySelector('.nav-overlay');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');






/* JSON.parse(localStorage.getItem('theme')); */

//switch theme dynamically
function switchTheme(event){
   
   
   if(event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark')
   }else{
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
   }
}

toggleSwitch.addEventListener('change', switchTheme);

//check localstorage for theme

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
}



//menu bar js

function toggleNav() {
    //toggle : menu bars/ open/colse
    menuBarElement.classList.toggle('change');
    //toggle: menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.add('overlay-slide-right');
        overlay.classList.remove('overlay-slide-left');

        
    }else{
        overlay.classList.add('overlay-slide-left');
        overlay.classList.remove('overlay-slide-right');
    }
  }

  menuBarElement.addEventListener('click', toggleNav)


//menu bar js


