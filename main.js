const buttons = document.getElementsByClassName("calc-btn")
let screen = document.getElementsByClassName("calc-display-val")[0]
const equals = document.getElementById("calc-equals")
const clear = document.getElementById("calc-clear")
let sums = []

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', () => {
    const button = buttons[i].innerText
    const shouldNotRenderZero = sums[0] === '0'
      && button === '0'
      && sums.length < 2

    if (shouldNotRenderZero || button === '=') {
      console.log('button =', button)
      return
    }
    sums.push(button)
    screen.innerText = sums.join("")
  })
}

equals.addEventListener("click", function(){
  console.log(eval(sums.join('')))
  console.log(sums)
  screen.innerText = eval(sums.join(''))
})

clear.addEventListener("click", () => {
  screen.innerText = '0'
  sums = []
  console.log(sums)
});

