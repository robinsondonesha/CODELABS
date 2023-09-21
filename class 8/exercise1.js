function changeBackground(){
    document.body.style.backgroundColor="#fcba03"
}
let secondButton = document.querySelector('.secondB')

function buttonColorChange(){
    secondButton.style.backgroundColor = '#fff700'
  
}
secondButton.addEventListener('click', buttonColorChange)

let thirdButton = document.querySelector('.thirdB')

function changePageColor(){
    document.body.style.backgroundColor='#1034A6'
}
thirdButton.addEventListener('mouseenter', changePageColor)
