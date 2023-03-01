// this will select all the inputs in the page
const inputs = document.querySelectorAll('.controls input')

function handleUpdate(){
    const suffix = this.dataset.sizing || '';

    // we are selecting the document which is the root and adding a style
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// This is looping through the inputs  in controls and its adding the event change to the function handleUpdate
inputs.forEach(input => input.addEventListener('change', handleUpdate))