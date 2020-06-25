const buttons = document.getElementsByClassName("calc-btn")
let screen = document.getElementsByClassName("calc-display-val")[0]
const equals = document.getElementById("calc-equals")
const clear = document.getElementById("calc-clear")
const backSpace = document.getElementById("calc-backspace")
let display = []

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', () => {
    const button = buttons[i].innerText
    const shouldNotRenderZero = display[0] === '0'
      && button === '0'
      && display.length < 2

    if (shouldNotRenderZero || button === '=') {
      return
    }
    display.push(button)
    screen.innerText = display.join("")
  })
}

equals.addEventListener("click", () => {
  screen.innerText = eval(display.join(''))
  // console.log(screen)
})

clear.addEventListener("click", () => {
  screen.innerText = '0'
  display = []
});

// TODO fix backspace 
backSpace.addEventListener('click', () => {
  (0,screen.length -1)
return display.value.screen.substring(0,screen.length -1)
})


