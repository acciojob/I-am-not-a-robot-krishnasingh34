let main = document.querySelector('main')
let classNamesArray = ["img1", "img2", "img3", "img4", "img5"]
let randomIndex = parseInt(Math.random() * classNamesArray.length)
classNamesArray.push(classNamesArray[randomIndex])

classNamesArray.sort(() => Math.random() - 0.5)
// function randomarray(){
//     let newarr=[]
//     while(newarr.length<classNamesArray.length){
//         let randomIndex=parseInt(Math.random()*classNamesArray.length)
//         if(classNamesArray[randomIndex]=='y'){
//             continue
//         }
//         newarr.push(classNamesArray[randomIndex])
//         classNamesArray[randomIndex]='y'
//     }
// }

let h1 = document.createElement('h1')
h1.innerText = "I'm not a robot"
main.append(h1)

for(let t of classNamesArray){
    let img = document.createElement('img')
    img.classList.add(t)
    main.append(img)
    img.addEventListener("click", verifyRobo)
}

let h3 = document.createElement('h3')
h3.setAttribute('id', 'h')
h3.innerText = 'Please click on the identical tiles to verify that you are not a robot.'
main.append(h3)

function verifyRobo(e){
    let clickedImage = e.target
    clickedImage.classList.add("selected")
    // if(clickedImage.getAttribute("class") == "selected"){
    //     return
    // }
    if(clickedImage.getAttribute("data-status") == "clicked"){
        return
    }
    clickedImage.setAttribute("data-status", "clicked")

    if(document.getElementById("reset") == null){
        let btn = document.createElement("button")
        btn.setAttribute("id", "reset")
        btn.innerText = "Reset"
        main.append(btn)
        btn.addEventListener('click', resetBtn)
        }

        if(document.querySelectorAll('.selected').length==2){
        let btn = document.createElement("button")
        btn.setAttribute("id", "verify")
        btn.innerText = "Verify"
        main.append(btn)
        btn.addEventListener('click', VerifyBtn)
        }

        if(document.querySelectorAll('.selected').length>2){
            let btn = document.getElementById('verify')
            btn.style.display =  'none'

        }
}

function resetBtn(){
    let selectedImg = document.querySelectorAll('.selected')
    for(let t of selectedImg){
        t.classList.remove('selected')
        t.setAttribute('data-status', '')
        let resetBtn = document.getElementById("reset")
        resetBtn.remove()
        let verifyBtn = document.getElementById("verify")
        if(verifyBtn){
        verifyBtn.remove()
        }
        let para = document.getElementById("para")
        if(para){
            para.remove()
        }    
    }
}

function VerifyBtn(e){
    let para = document.createElement("p")
    para.setAttribute('id', 'para')
    main.append(para)
    let selectedImg = document.querySelectorAll('.selected')
    if(selectedImg[0].classList[0] == selectedImg[1].classList[0]){
        para.innerText = "You are a human. Congratulations!"
    }
    else{
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
    }
    e.target.remove()
}