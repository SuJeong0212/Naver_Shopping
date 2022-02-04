window.onload = function () {
    popupOpen();
}

let popupOpen = () => {
    document.querySelector('.dimmed-layer').classList.remove('hidden')
    document.querySelector('.order-type-popup').classList.remove('hidden')
    document.querySelector('body').classList.add('scroll-off')
}

let popupClose = () => {
    document.querySelector('.dimmed-layer').classList.add('hidden')
    document.querySelector('.order-type-popup').classList.add('hidden')
    document.querySelector('body').classList.remove('scroll-off')
}

//메뉴리스트 토글
let btnToggle = document.querySelectorAll('.btn-toggle')
let toggleMenuList = (e) => {
    e.currentTarget.closest('.menu-list-area').classList.toggle('is-closed')
}

btnToggle.forEach(function (e) {
    e.addEventListener('click', toggleMenuList)
})

// 포장 매장 배달
let tabSwitch = document.querySelectorAll('.tab-switch-box .tab-switch')

tabSwitch.forEach((item, index) => {
    item.addEventListener('click', () => {
        for(let i = 0; i < tabSwitch.length; i++) {
            tabSwitch[i].classList.remove('is-active')
        }
        item.classList.add('is-active')
    })
})

//시그니처샐러드 - scrollY : 1096
//웜볼 - 1600
//샌드 - 2110
//랩 - 2480
//드레싱 - 2995
// let headerMenu = document.querySelectorAll('.category-tab')

// window.addEventListener('scroll',function(){
//     if(window.scrollY <= 1096){
//         headerMenu[0].classList.remove('is-active')
//         headerMenu[1].classList.add('is-active')
//     }else if(window.scrollY <= 1600){
//         headerMenu[1].classList.remove('is-active')
//         headerMenu[2].classList.add('is-active')
//     }else if(window.scrollY <= 2110){
//         headerMenu[2].classList.remove('is-active')
//         headerMenu[3].classList.add('is-active')
//     }else if(window.scrollY <= 2480){
//         headerMenu[3].classList.remove('is-active')
//         headerMenu[4].classList.add('is-active')
//     }else if(window.scrollY <= 2995){
//         headerMenu[4].classList.remove('is-active')
//         headerMenu[5].classList.add('is-active')
//     }else{
//         headerMenu.classList.remove('is-active')
//         // headerMenu[0].classList.add('is-active')
//     }
// })