// 定数の宣言
const menuContainer = document.querySelector('.menu')
const menuOpen = document.querySelector('.open')
const menuClose = document.querySelector('.close')
const menu = document.querySelector('.nav-pc')

// menuContainerをclickをした時にactiveというclassをつける設定
    menuContainer .addEventListener('click', () => {
        menuOpen.classList. toggle('active');
        menuClose.classList. toggle('active');
        menu.classList. toggle('active');
    })