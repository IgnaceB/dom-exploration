const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const position = document.querySelectorAll("section")
const log = document.createElement("li")

const box = (e)=>{
  alert(e.target.classList[1])
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const element = document.createElement("div")
  position[0].appendChild(element)
  element.classList = e.target.classList
  const log = document.createElement("li")
  position[2].lastElementChild.appendChild(log)
  log.textContent = getElapsedTime() + " Created a new " + e.target.classList[1] + " square"
  element.addEventListener('click',box)
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const myevent = (e) => {
  if (e.code == "Space") {
    let randomcolor = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    document.body.style = `background-color:rgb(${randomcolor})`
    const position = document.querySelectorAll("section")
    const log = document.createElement("li")
    position[2].lastElementChild.appendChild(log)
    log.textContent = getElapsedTime() + " background changed "
  }
  else if (e.code == "KeyL") {
    while (position[2].lastElementChild.firstChild) {
      position[2].lastElementChild.firstChild.remove()
    }
  }

  else if (e.code == "KeyS") {
    while (position[0].firstChild) {
      position[0].firstChild.remove()
    }

  }
  console.log(e.code)
}

document.addEventListener('keypress', myevent)
