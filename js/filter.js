const button = document.querySelectorAll('.button')
const filter = document.querySelectorAll('.filter')

button.forEach( ( cadaButton, i )=>{
    button[i].addEventListener('click', ()=>{
        filter[i].classList.toggle('active')
    })
})

