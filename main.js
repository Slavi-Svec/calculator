const buttons = document.getElementsByClassName("calc-btn")
let screen = document.getElementsByClassName("calc-display-val")[0]
const equals = document.getElementById("calc-equals")
const clear = document.getElementById("calc-clear")
let display = []

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', () => {
    const button = buttons[i].innerText
    const shouldNotRenderZero = display[0] === '0'
      && button === '0'
      && display.length < 2
    const hasDuplicates = (/([.]).*?\1/).test(display)

    console.log('display=', display, 'hasDuplicates=', hasDuplicates)

    if (shouldNotRenderZero || button === '=') {
      return
    }
    display.push(button)
    screen.innerText = display.join("")
  })
}

equals.addEventListener("click", function(){
  screen.innerText = eval(display.join(''))
})

clear.addEventListener("click", () => {
  screen.innerText = '0'
  display = []
});




const str= [".", "."]
var hasDuplicates = (/([.]).*?\1/).test(str)
console.log("repeating string ", hasDuplicates)