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
    // const hasDuplicates = (/([.]).*?\1/).test(display)

    // console.log('display=', display, 'hasDuplicates=', hasDuplicates)

    if (shouldNotRenderZero || button === '=') {
      return
    }
    display.push(button)
    screen.innerText = display.join("")
  })
}



equals.addEventListener("click", () => {
  screen.innerText = eval(display.join(''))
})

clear.addEventListener("click", () => {
  screen.innerText = '0'
  display = []
});

backSpace.addEventListener('click', () => {
  screen.innerText = screen.innerText.slice(1, -1);
  console.log(screen)
})



