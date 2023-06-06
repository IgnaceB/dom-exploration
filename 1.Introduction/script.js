/*
*/
console.log(document.title)
document.title="Modifying the DOM"
console.log(document.title)
document.body.style="background-color:#FF69B4"
let a=Math.floor(Math.random() * 255)
let b=Math.floor(Math.random() * 255)
let c=Math.floor(Math.random() * 255)

console.log(a)
//document.body.style.backgroundColor="rgb("+a+","+b+","+c+")"
document.body.style=`background-color:rgb(${a},${b},${c})`

// let children=[document.body.childNodes]

//  for (let i=0; i<children.length;i++){
//      document.children[i].style="display:none"
//  }

// let parent=document.children[0].children[1].childNodes
// console.log(parent.length)
//  for (let i=0; i<parent.length;i++){
//     console.log("itération")
//      document.parent[i].style="display:none"
//  }

//console.log(parent)
 for (const test of document.children[0].children[1].childNodes){
    console.log(test)
 }