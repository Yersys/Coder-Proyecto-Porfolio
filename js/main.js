const mainNavigation = document.querySelector('#mainNavigation'),
navLinks = document.querySelectorAll('.nav-link'),
buttonBurguer= document.querySelector('#buttonBurguer'),
burguerIcon = document.querySelector('#burguer'),
buttonCollapsible = document.querySelector('#button-collapsible'),
menuCollapsible = document.querySelector('#collapsible');

buttonBurguer.addEventListener('click', showMenu);

function showMenu(){
    mainNavigation.classList.toggle('main-navigation_open');
    setIcon();
}

function setIcon(){
    if(mainNavigation.classList.contains('main-navigation_open')){
        burguerIcon.setAttribute('icon', 'system-uicons:cross')
    }else{
        burguerIcon.setAttribute('icon', 'mdi-light:menu')
    }
}

navLinks.forEach((currentlink) =>{
    currentlink.addEventListener('click', ()=>{
        setCurrentItem(currentlink);
    });
});


function setCurrentItem(currentLink){
    for(let link of navLinks){
        link.classList.remove('current-item');
    }
    currentLink.classList.add('current-item');
    showMenu();
}