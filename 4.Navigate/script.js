/*
*/
position=document.querySelector("ol")
listOl=position.children
position.insertBefore(listOl[listOl.length-1],listOl[0])
console.log(listOl[0])

sec=document.querySelectorAll("section")

sec[1].insertBefore(sec[2].querySelector("h2"),sec[1].lastElementChild)

sec[2].insertBefore(sec[1].querySelector("h2"), sec[2].firstElementChild)

sec[sec.length-1].remove()
document.body.lastElementChild.remove()