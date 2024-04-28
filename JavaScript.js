const toggleSwitch = document.querySelector('.checkbox');

/* navigtion section codes */
const menuBarElement = document.querySelector('.menu-bar-container');
const barsElements = document.querySelector('.menu-bar-container div')
const overlay = document.querySelector('.nav-overlay');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');

const navItems = [nav1, nav2, nav3, nav4];

function navAnimation(direction1, direction2){
    navItems.forEach((nav, i)=>{
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
    })
}





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

        overlay.classList.replace('overlay-slide-left','overlay-slide-right')

        //animate in - nav item
        navAnimation('out', 'in');
       

        /* nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5'); */

        
    }else{

        overlay.classList.replace('overlay-slide-right','overlay-slide-left')

        //animate out - nav item
        navAnimation('in', 'out');

       /*  nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5'); */
    }
  }

  menuBarElement.addEventListener('click', toggleNav);
  navItems.forEach((nav)=>{
    nav.addEventListener('click', toggleNav);
  })


//menu bar js


