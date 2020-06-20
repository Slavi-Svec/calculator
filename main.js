const buttons = document.getElementsByClassName("calc-btn")
let screen = document.getElementsByClassName("calc-display-val")[0]
const equals = document.getElementById("calc-equals")
const sums = []

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', event => {
    const button = buttons[i].innerText
    if (button !== '=') {
      sums.push(button)
    }
    screen.innerText = sums.join("")
  })
}

equals.addEventListener("click", function(){
  screen.innerText = eval(sums.join(''))
})

