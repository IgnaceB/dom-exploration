/*
*/
inputboxes = document.querySelectorAll("input")

const firstname = (e) => {
    console.log(e)
    form = document.getElementById("display-firstname")
    // if (e.key=="Delete"|e.key=="Backspace"){
    //     console.log(form.innerText)
    //     let text=form.innerText
    //     let newtext=text.slice(0,-1)
    //     form.innerText=newtext
    //     let textbox=inputboxes[0].value
    //     let textspan=form.innerText
    //     console.log(textbox.length)
    //     console.log(textspan.length)
    //     let dif = textbox.length-textspan.length
    //     if(dif!=0) {
    //         let newtext=text.slice(0,dif)
    //         form.innerText=newtext
    //     }
    // }
    // else
    // {
    form.innerText = e.target.value
}
const age = (e) => {
    console.log(inputboxes[1].value)
    if (inputboxes[1].value >= 18) {
        truth = document.getElementById("a-hard-truth")
        truth.style = "visibility:visible"
    }
    else {
        truth = document.getElementById("a-hard-truth")
        truth.style = "visibility:hidden"
    }
}


const no = (event) => {
    if (isFinite(event.key) | event.key == "Shift" | event.key == "Backspace") {
        console.log("ca marche")

    }
    else {
        event.target.value = ""
        alert("please enter a number")
    }
}

const check = (e) => {
    console.log(inputboxes[2].value)
    console.log(inputboxes[3].value)
    if (inputboxes[2].value === inputboxes[3].value && inputboxes[2].value.length >= 6) {
        inputboxes[2].style = "background-color:white"
        inputboxes[3].style = "background-color:white"
    }
    else {
    console.log("pas la meme")
    inputboxes[2].style = "background-color:red"
    inputboxes[3].style = "background-color:red"
}
}
const darkmode=(event)=>{
    console.log(event)
    if (event.target.value=="dark"){
        document.body.style="background-color:black ; color:white"
    }
    else {
        console.log("pas dark")
        document.body.style="background-color:white ; color:black"

    }
}
const dark=document.getElementById("toggle-darkmode")

inputboxes[0].addEventListener('keyup', firstname)
inputboxes[1].addEventListener('keyup', age)
inputboxes[1].addEventListener('keyup', no)
inputboxes[2].addEventListener('keyup', check)
inputboxes[3].addEventListener('keyup', check)
dark.addEventListener('change', darkmode)