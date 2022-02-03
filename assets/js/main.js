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

// let headerMenu = document.querySelector