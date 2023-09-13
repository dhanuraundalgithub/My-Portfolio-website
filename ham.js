

// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const hamburger = document.querySelector(' .hamburger');

 const mobile_menu1 = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_menu =document.querySelector('ul');
const menu_item = document.querySelectorAll(' li a');

const header = document.querySelector('.header');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if(scroll_position>250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transperent";
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click',() => {
        hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    });
});