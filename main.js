

const menuBtn = document.querySelector('.menu_btn')
const menu = document.querySelector('.menu')
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('activo')
})
const menu1= document.querySelector(".menu")
const menuList= document.querySelector(".menu_list")
menu1.addEventListener('click', function(){
    menu1.classList.toggle('activo')
})
