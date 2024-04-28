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

        //animate in - nav item
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-in-1');

        nav2.classList.remove('slide-out-2');
        nav2.classList.add('slide-in-2');

        nav3.classList.remove('slide-out-3');
        nav3.classList.add('slide-in-3');

        nav4.classList.remove('slide-out-4');
        nav4.classList.add('slide-in-4');

        /* nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5'); */

        
    }else{
        overlay.classList.add('overlay-slide-left');
        overlay.classList.remove('overlay-slide-right');

        //animate out - nav item
        nav1.classList.remove('slide-in-1');
        nav1.classList.add('slide-out-1');

        nav2.classList.remove('slide-in-2');
        nav2.classList.add('slide-out-2');

        nav3.classList.remove('slide-in-3');
        nav3.classList.add('slide-out-3');

        nav4.classList.remove('slide-in-4');
        nav4.classList.add('slide-out-4');

       /*  nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5'); */
    }
  }

  menuBarElement.addEventListener('click', toggleNav)


//menu bar js


