let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-bx-menu')
    navlist.classList.toggle('open')
}
