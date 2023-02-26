const secondHand = document.querySelector(".second-hand")
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {
    // now gives you todays date
    const now = new Date();
    // gives you the seconds of todays date
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;

    // we are using the query select and passing secondegrees to it
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg`;


}

// by setting setDate for 1 second its going to log every second
setInterval(setDate, 1000)