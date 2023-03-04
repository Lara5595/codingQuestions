
// getting the query
const panels = document.querySelectorAll('.panel');



// functions for the events
function toggleOpen(){
    this.classList.toggle('open')
    console.log("hrlo")
}


function  toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}



// Event handlers
panels.forEach(panel => panel.addEventListener('click', toggleOpen))


panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))



