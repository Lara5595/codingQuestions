const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open')
    console.log("hrlo")
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))