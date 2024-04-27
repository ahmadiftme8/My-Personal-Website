const toggleSwitch = document.querySelector('.checkbox');

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



