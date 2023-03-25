window.onload = milibreria()
document.querySelector('.doc').onclick = ()=>{
    console.log('se hizo click')
    milibreria()
}
// [...document.querySelectorAll('.li')].forEach((elem)=>{
//     elem.onclick = ()=>{
//         console.log('se hizo click')
//         milibreria()
//     }
// })

function milibreria() {
    const li = document.querySelectorAll(".li")
    const block = document.querySelectorAll(".block")
    const imgLib = document.querySelector('.library')
    const imgAcc = document.querySelector('.img-account')

    setTimeout(()=>{
        if(window.location.hash !='') {
            li[0].classList.remove('active')
            block[0].classList.remove('active')
            li[1].classList.add('active')
            block[1].classList.add('active')
            imgLib.src = '../assets/icons/library.png'
            imgAcc.src = '../assets/icons/account-2.png'
        }else{
            imgLib.src = '../assets/icons/library-2.png'
            imgAcc.src = '../assets/icons/account.png'
        }
    })
    
}