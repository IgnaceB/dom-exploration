/*
*/
const item = document.querySelectorAll('.important')
console.log(item)
// item.title="This is an important item"
for (const dev of item) {
    dev.title = "This is an important item"
}

const imag = document.querySelectorAll('img')

for (const i of imag) {
    if (i.className == "important") {

    }
    else {
        i.style = "display:none"
    }
}
const parag = document.querySelectorAll('p')

for (const i of parag) {
    if (i.className != "") {
        console.log(i.textContent + " " + i.className)
    }
    else {
        console.log(i.textContent)
    }
}


let array = [255, 255, 255]


const Myfunction = () => {
    for (let i = 0; i < array.length; i++) {
        
        array[i] = Math.floor(Math.random()*array[i])
    }
    return array
}


for (const i of parag) {
    if (i.className == "") {
        let random = Myfunction ()
        i.style = `background-color : rgb(${random})`
    }
}