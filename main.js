const buttons = document.getElementsByClassName("calc-btn")
let screen = document.getElementsByClassName("calc-display-val")[0]
const equals = document.getElementById("calc-equals")
const clear = document.getElementById("calc-clear")
let sums = []

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', event => {
    const shouldNotRenderZero = buttons.length === 1 && buttons[0] === 0
    const button = buttons[i].innerText
    if (button !== '=') {
      sums.push(button)
      console.log(sums)
    }
    screen.innerText = sums.join("")
  })
}

equals.addEventListener("click", function(){
  // console.log(eval(sums.join('')))
  console.log(sums)
  screen.innerText = eval(sums.join(''))
})

clear.addEventListener("click", function(){
  screen.innerText = '0'
  sums = []
  console.log(sums)
});

