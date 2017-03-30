

function playSound(e) {
	let keyCode = e.keyCode;
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

	const key = document.querySelector(`div[data-key="${keyCode}"]`);
	if(!audio) return;

	audio.currentTime = 0;
	audio.play()
	.then(() => {
		key.classList.add('playing');    
	}).catch((error) => {
		console.log(error);
	});
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);


//Alternative Method to remove transition. May become out of sync
// window.addEventListener('keyup', (e) => {
//     let keyCode = e.keyCode;    
//     const key = document.querySelector(`div[data-key="${keyCode}"]`);
//     if(!key) return;    
//     key.className = 'key';
// });