<!--  We are getting the canvas-->
const canvas = document.querySelector("#draw")
//We are grabbing the context
const ctx = canvas.getContext('2d')

// We are setting the width and height
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BASA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// this is set to false till we start drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;