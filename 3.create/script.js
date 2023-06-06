/*
*/
learner = ["Noah", "Lucie", "Athi","Leslie"]

let position = document.querySelector('article')


for (let i = 0; i < learner.length; i++) {
    const section = document.createElement('section')
    const p = document.createElement('p')
    if (Math.random() > 0.5) {
        position.appendChild(section)
        position.lastChild.appendChild(p)
        p.textContent = learner[i]

        let coulrand = [(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
        let darkorbright = coulrand[2]

        console.log(darkorbright)
        if (darkorbright < 50) {
            console.log("true")
            p.style = `background-color:hsl(${coulrand[0]},${coulrand[1]}%,${coulrand[2]}%); color:rgb(255,255,255)`
        }
        else {
            console.log("false")
            p.style = `background-color:hsl(${coulrand[0]},${coulrand[1]}%,${coulrand[2]}%); color:rgb(0,0,0)`
        }
        // section.classList.add(i)
    }
    else
    {   let firstsection=document.querySelector("section")
        position.insertBefore(section, firstsection)
        section.appendChild(p)
        console.log("childnodes")
        p.textContent = learner[i]

        let coulrand = [(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
        let darkorbright = coulrand[2]

        console.log(darkorbright)
        if (darkorbright < 50) {
            console.log("true")
            p.style = `background-color:hsl(${coulrand[0]},${coulrand[1]}%,${coulrand[2]}%); color:rgb(255,255,255)`
        }
        else {
            console.log("false")
            p.style = `background-color:hsl(${coulrand[0]},${coulrand[1]}%,${coulrand[2]}%); color:rgb(0,0,0)`
        }
        // section.classList.add(i)
    }

}
