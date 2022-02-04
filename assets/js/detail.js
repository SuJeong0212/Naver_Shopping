let detailPopupOpen = () => {
    document.querySelector('body').classList.add('scroll-off')
    document.querySelector('.option-popup-area').classList.add('show')
}

let detailpopupClose = () => {
    document.querySelector('body').classList.remove('scroll-off')
    document.querySelector('.option-popup-area').classList.remove('show')
}

let btnOrder = document.querySelector('.order-info-area .btn-order')
let orderCloseBtn = document.querySelector('.content-top .btn-close')

btnOrder.addEventListener('click', function(){
    detailPopupOpen();
})

orderCloseBtn.addEventListener('click', function(){
    detailpopupClose();
})

// 포장, 매장 스위치버튼
let 