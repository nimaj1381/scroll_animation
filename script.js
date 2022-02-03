const boxes = document.querySelectorAll('.box')

let triggerBottom = window.innerHeight / 5 * 4
boxes.forEach(box => {
    let boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom){
        box.classList.add("show")
    }
})

window.addEventListener("scroll", checkBoxes)

function checkBoxes(){
    let triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom){
            box.classList.add("show")
        } else {
            box.classList.remove('show')
        }
    })
}

