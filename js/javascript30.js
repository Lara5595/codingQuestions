
// Everytime a key is press it will log the event and if you do e.keycode it logs the code of the key (keydown)
window.addEventListener('keydown', function (e){
    // console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key)

    if(!audio) return; // stops the function from running

    audio.currentTime =0; // rewind to start
    // .play lets you play the beat
    audio.play()
})