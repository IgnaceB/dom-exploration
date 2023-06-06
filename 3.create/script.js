/*
*/
learner=["Noah","Lucie","Athi"]

let position=document.querySelector('article')


for (let i=0;i<learner.length; i++){
    const section=document.createElement('section')
    const p=document.createElement('p')
    position.appendChild(section)
    position.lastChild.appendChild(p)
    p.textContent=learner[i]
    let coulrand=[Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)]
    p.style="background-color:rgb(${coulrand})"
}