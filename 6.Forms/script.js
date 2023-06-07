/*
*/

const firstname=(e)=>{
    form=document.getElementById("display-firstname")
    form.textContent=form.textContent+e.key
}
const age=(e)=>{
    console.log(inputboxes[1].value)
    if (inputboxes[1].value>=18){
        truth=document.getElementById("a-hard-truth")
        truth.style="visibility:visible"
    }
    else{
        truth=document.getElementById("a-hard-truth")
        truth.style="visibility:hidden"
    }
}
inputboxes=document.querySelectorAll("input")

inputboxes[0].addEventListener('keyup',firstname)
inputboxes[1].addEventListener('keyup',age)