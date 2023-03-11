<!--  We are getting the canvas-->
const canvas = document.querySelector("#draw")
//We are grabbing the context
const ctx = canvas.getContext('2d')

// We are setting the width and height
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// this is set to false till we start drawing
let isDrawing = false;

// The line needs a start and an end
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }


    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}

// this check if the mouse is down then it will log
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});



canvas.addEventListener('mousemove', draw)


// this wont
canvas.addEventListener('mouseup', function()  {
    isDrawing = false
})

// this wont
canvas.addEventListener('mouseout', function () {
    isDrawing = false
})