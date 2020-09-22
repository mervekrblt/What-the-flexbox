const btn1= document.querySelector('.btn1')
const btn2= document.querySelector('.btn2')
const boxes = document.querySelectorAll('.box')
const boxxes = document.querySelectorAll('.boxx')


btn1.addEventListener("click", add)
btn2.addEventListener("click", addd)

function add(){ boxes.forEach(i => {
 i.classList.toggle("flex")

})};

function addd(){ boxxes.forEach(a => {
    a.classList.toggle("flex")
   
})};


