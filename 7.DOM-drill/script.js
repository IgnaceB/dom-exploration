document.body.style = "background-color:white"
const list = document.querySelector("ul")
let items = list.childNodes
let div = document.createElement("div")
let select = document.createElement("select")
// console.log(items)

document.body.insertBefore(div, list)
list.previousElementSibling.appendChild(select)
franchise = document.querySelector("select")
let newOption1 = new Option('Best franchise', 'good');
let newOption2 = new Option('poor franchise', 'bad');
franchise.add(newOption1, undefined)
franchise.add(newOption2, undefined)



items.forEach(element => {
    if (element.nodeType === 1) {
        let max = 0
        for (let i = 0; i < items.length; i++) {
            console.log(i)

            if (element.innerText == (items[i].innerText) && max == 0) {
                max = i
                console.log(max)
            }
            else if (element.innerText == (items[i].innerText) && max > 0) {
                list.removeChild(items[i])
            }
        }

        // console.log(element.innerText)
        if (element.innerText == "Fast and Furious") {
            list.insertBefore(element, list.firstChild)
            element.className = "important"
            element.addEventListener('click', (event) => {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
            })
        }
        else {
            element.addEventListener('click', (event) => {
                alert(event.target.innerText)
            })
        }

    }
    else {
    }
})

let trueitems = list.children
console.log(list.children[0])

const sort = (event) => {
    console.log(event.key)
    if (event.key == 'r') {
        console.log(trueitems)
        Array.from(trueitems).forEach(element => {
            list.insertBefore(element, trueitems[Math.floor(Math.random() * trueitems.length)])
        })

        Array.from(trueitems).forEach(element => {
            if (element.innerText == "Fast and Furious") {
                list.insertBefore(element, list.firstChild)
            }
        }
        )
    }
    else if (event.key == 'd') {
        // Array.from(trueitems).forEach(element => {
        // if (element.innerText == "Fast and Furious") {
        let fast = list.firstChild
        let clone = fast.cloneNode(true)
        list.appendChild(clone)
        clone.addEventListener('click', (event) => {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        })

        //     }
        // })
    }
}
cleanornot = (event) => {
    console.log("toggle")
    all = document.querySelectorAll("li")
    display = document.querySelectorAll(".important")
    console.log(all)
    if (event.target.value == "good"){
        all.forEach(element => {
            element.style = 'visibility:hidden'
        }
        )
    display.forEach(element => {
        element.style = 'visibility:visible'
    }
    )}
    else if (event.target.value == "bad"){
        all.forEach(element => {
            element.style = 'visibility:visible'
        }
        )
    display.forEach(element => {
        element.style = 'visibility:hidden'
    }
    )}
}
franchise.addEventListener('change', cleanornot)
document.body.addEventListener('keypress', sort)
