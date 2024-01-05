const boxGroup =document.querySelectorAll('.box')
window.addEventListener('scroll',boxShowing)

boxShowing()
function boxShowing(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxGroup.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}