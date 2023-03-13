const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

function handleCheck(e){
    // check if they had the shift key down
    // and check that they are checking it
    let inBetween = false;

    if(e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween =  !inBetween;
                console.log("starting to check in between")
            }
// if the boxes are inbetween they will get a check
            if (inBetween) {
                checkbox.checked = true;
            }

        })
    }


    lastChecked = this
}

let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))