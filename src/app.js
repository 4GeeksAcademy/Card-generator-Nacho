import "./style.css";



const randomGenerator = () => {
  const img = Math.floor(Math.random() * 4) + 1
  let number = Math.floor(Math.random() * 12) + 1
  if (number === 10) number = "J"
  if (number === 11) number = "Q"
  if (number === 12) number = "K"
  return { img: selector(img), number }
}

const selector = number => {
  switch (number) {
    case 1:
      return "<span class='diamond'>♦</span>"
    case 2:
      return "<span class='heart'>♥</span>"
    case 3:
      return "<span class='spade'>♠</span>"
    case 4:
      return "<span class='club'>♣</span>"
    default:
      break;
  }
}
let width = 0
let height = 0
function render() {
  const img = randomGenerator().img
  const number = randomGenerator().number
  document.querySelector("#icon").innerHTML = img
  document.getElementById("icon2").innerHTML = img
  document.getElementById("number").innerHTML = number
  width = document.getElementById('card').style.width
  height = document.getElementById('card').style.height
  width = Number(width.replace("px", ""))
  height = Number(height.replace("px", ""))

}
function refresh() {
  setInterval(render, 10000)
}
function redimension() {
  document.getElementById('width').addEventListener("change", function (event) {
    const fontSize = Number(window.getComputedStyle(document.querySelector(".bottom-right")).fontSize.replace("px", ""))
    let result = Math.floor(fontSize * (Number(event.target.value) / width))
    console.log(result)
    document.querySelector(".top-left").style.fontSize = result + "px"
    document.querySelector(".bottom-right").style.fontSize = result + "px"
    document.querySelector(".card").style.width = event.target.value + "px"
  })
  document.getElementById('height').addEventListener("change", function (event) {
    const fontSize = Number(window.getComputedStyle(document.querySelector(".card-value")).fontSize.replace("px", ""))
    let result = Math.floor(fontSize * (Number(event.target.value) / height))
    document.querySelector(".card-value").style.fontSize = result + "px"
    document.querySelector(".card").style.height = event.target.value + "px"
  })
}

window.onload = function () {
  //write your code here
  render()
  redimension()
  document.getElementById("reloadBtn").addEventListener("click", render);
  refresh()




};
