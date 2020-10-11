const container = document.querySelector('.container')
const button = document.querySelector('button')

button.addEventListener('click', function(){
    container.classList.toggle('spaceBetween')
})