let orderbtnToggle = document.querySelectorAll('.agreement-item .btn-toggle')
let orderToggleMenuList = (e) => {
    e.currentTarget.closest('.agreement-item').classList.toggle('is-open')
}

orderbtnToggle.forEach(function (e) {
    e.addEventListener('click', orderToggleMenuList)
})

//모달
let modalOpen = () => {
    document.querySelector('body').classList.add('scroll-off')
    document.querySelector('.dimmed-layer').classList.remove('hidden')
    document.querySelector('.modal-wrapper').classList.remove('hidden')
}

let modalClose = () => {
    document.querySelector('body').classList.remove('scroll-off')
    document.querySelector('.dimmed-layer').classList.add('hidden')
    document.querySelector('.modal-wrapper').classList.add('hidden')
}

let orderBtnDisabled = document.querySelectorAll('.amount-and-price .btn-minus.disabled')
let orderModalClose = document.querySelector('.modal-content .btn-close')
let orderModalClose2 = document.querySelector('.btn-area')

orderBtnDisabled.forEach((item) => {
    item.addEventListener('click', () => {
        modalOpen()
        this.removeEventListener('click',modalOpen)
    })
});

orderModalClose2.addEventListener('click',function(){
    modalClose()
})

orderModalClose.addEventListener('click',function(){
    modalClose()
})

// Toast : 주문하기 버튼 누를 시
let removeToast;
let orderBtn = document.querySelector('.btn-order-area .btn-order')
let toast = document.getElementById("toast");

    //   function toast2(string) {

    //     toast.classList.contains("reveal") ?
    //       (clearTimeout(removeToast), removeToast = setTimeout(function () {
    //         document.getElementById("toast").classList.remove("reveal")
    //       }, 1000)) :
    //       removeToast = setTimeout(function () {
    //         document.getElementById("toast").classList.remove("reveal")
    //       }, 1000)
    //     toast.classList.add("reveal")
    // }
    
    orderBtn.addEventListener('click',function(){
        // if(toast.classList.contains("reveal")){
        //     console.log('h2')
        
        // }else{
            //     console.log('ddd');
            // } 
            toast.classList.add('reveal')
            toast.innerText = '지금은 주문 가능한 시간이 아닙니다.'
            
      })