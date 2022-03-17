(function() {
	var elPlayer = document.querySelector('.js-player');
	var elVideos = document.querySelector('.js-videos');
	var elPlay = document.querySelector('.js-play');

	var player = window.player = youtube({ el:elPlayer });

	player.addEventListener('canplay', function(event) {
		elVideos.disabled = false;
		elPlay.disabled = false;
	});
	player.addEventListener('play', function(event) {
		videoPlaying()
	});
	player.addEventListener('error', function(event) {
		console.error(event);
	});

	elPlay.addEventListener('click', function(event) {
		player.play();
        player.currentTime = timeAdjust + debugTimeAdjust;
	});
})();

let waitingForAnswer = false;
const lyric = document.querySelector('.lyric')

let initialsUsed = false;

function videoPlaying() {
	exitAnswerMode();
	inputBoxPreview.style.opacity = 0.2;
}

function refreshGUI() {
	inputBox.innerHTML = ""
	updateInputPreview();
	// motsBox.innerText = `${ stops[round].words } MOTS`;

	bottomBloque.style.display = 'none';
	bottomNextRound.style.display = 'none';

	for(i = 0; i < 5; i++){
		roundBox[i].style.opacity = 0.2;
	}

	for(i = 0; i < syncData.length; i++){
		let line = lines[i];
		let [timeStr, text] = line.trim().split(']');
		syncData[i].text = text;
	}

	roundBox[round].style.opacity = 1;
	let lineno = stops[round].update[0];
	let newstr = stops[round].update[1];
	syncData[lineno].text = newstr;

	initialsUsed = false;
	bottomAvance.style.display = 'block';

}

function startGame() {
	round = 0;
	refreshGUI();
	for(i = 0; i < 5; i++){
		roundBox[i].innerText = `${stops[i].words } MOTS`//'&#9642;&#65039;&#9642;&#65039;&#9642;&#65039;&#9642;&#65039;&#9642;&#65039;';
		roundBox[round].classList.remove("r-bg");
		roundBox[round].classList.remove("g-bg");
	}
	inputBox.value = "";
	
	player.play();
}

function nextRound() {
	player.currentTime = stops[round].time - 1;
	round = round + 1;
	inputBox.value = "";
	refreshGUI();
	player.play();
}

function purifyString(str) {
	if (typeof str === 'undefined') return("");
	return( removeDiacritics(str).toUpperCase().replace(/[^A-Z']/g, ``) );
}

function wordArrayFromString(str) {
	let n = stops[round].words;
	const cleanString = str.trim().replaceAll("'","' ");
	if (cleanString === ""){
		n += 1;
	}
	const wordArray = cleanString.split(/[ ]+/);
	const smallWordArray = wordArray.slice(0, n);
	while (smallWordArray.length < n) {
		smallWordArray.push("<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>");
	}
	return(smallWordArray)
}

function updateInputPreview() {
	const newArray = wordArrayFromString(inputBox.value);
	const previewText = wordArrayFromString(inputBox.value).join(' ');
	inputBoxPreview.innerHTML = previewText;
}

function enterAnswerMode() {
	if (waitingForAnswer){
		inputBoxPreview.style.display = 'none';
		inputBox.style.display = 'block';
		lyricBox.style.opacity = 0.75;
		inputBox.style.opacity = 1;
		bottomBloque.style.display = 'block';
		bottomAvance.style.display = 'none';
		inputBox.focus();
	}
}

function exitAnswerMode() {
	inputBoxPreview.style.display = 'block';
	inputBoxPreview.style.opacity = 1;
	lyricBox.style.opacity = 1;
	inputBox.style.display = 'none';
	updateInputPreview();
	inputBox.blur();
	bloqueBox.focus();
}

function correctTheInput() {
	const userAnswer = wordArrayFromString(inputBox.value);
	const realAnswer = wordArrayFromString(stops[round].answer);
	const correctionArray = [];
	for(i = 0; i < userAnswer.length; i++){
		if ( purifyString(userAnswer[i]) == purifyString(realAnswer[i]) ) {
			correctionArray.push(1);
		}else{
			correctionArray.push(0);
		}
	}
	outputResult(userAnswer, correctionArray);
}

function outputResult(userAnswer, corrArray) {
	let ret = [];
	let wrong = false;
	inputBoxPreview.style.opacity = 0.5;
	bottomBloque.style.display = 'none';
	for(i = 0; i < corrArray.length; i++){
		if( corrArray[i] == 1 ){
			ret.push( `<font class="g">${ userAnswer[i] }</font>` )
		}else{
			wrong = true;
			ret.push( `<font class="r">${ userAnswer[i] }</font>` )
		}
	}
	let soundName = 'wrong';
	let done = false;
	if(!wrong) soundName = 'correct'
	const audio = new Audio(`./files/woo_${ soundName }.mp3`);
		audio.addEventListener('timeupdate', (event) => {
			if(audio.currentTime >= 3.50 & !done){
				inputBoxPreview.innerHTML = ret.join(' ');
				inputBoxPreview.style.opacity = 1;
				bottomNextRound.style.display = 'block';
				if(wrong){
					buttonReveal.focus();
					roundBox[round].classList.add("r-bg");
				}else{
					buttonNextRound.focus();
					roundBox[round].classList.add("g-bg");
				}
				done = true;
			}
		});
	audio.play();
}

function bloqueLesParoles() {
	if(waitingForAnswer) {
		waitingForAnswer = false;
		exitAnswerMode();
		player.pause();
		correctTheInput();
	}
}

function revealAnswer() {
	waitingForAnswer = false;
	inputBoxPreview.innerHTML = `<font class="g">${ wordArrayFromString(stops[round].answer).join(' ') }</font>`;
	inputBoxPreview.style.opacity = 1;
	inputBoxPreview.style.display = 'block';
	inputBox.style.display = 'none';
	buttonNextRound.focus();
}

function check(el) {
	if(event.key === 'Enter'){
		exitAnswerMode();
	}
	return ;
}

function teleport() {
	player.currentTime = stops[round].time - 5;
	waitingForAnswer = false;
	exitAnswerMode();
	player.play();
}

let lines = lyrics.trim().split('\n');
let syncData = [];  
lines.map((line, index) => {
    let [timeStr, text] = line.trim().split(']');
    timeStr = timeStr.replaceAll('[', '');
    let [minStr, secStr] = timeStr.split(':');
    let time = parseInt(minStr)*60 + parseFloat(secStr)
    console.log(time)
    syncData.push({'start': time, 'text': text.trim()})
})

let lyricUpdater = player.addEventListener('timeupdate', function(event) {
	syncData.forEach((item) => {
		console.log(item)
		if (player.currentTime - timeAdjust >= item.start){
			if (player.currentTime - timeAdjust >= stops[round].time){
				player.currentTime = stops[round].time + timeAdjust;
				enterAnswerMode();
				player.pause();
				waitingForAnswer = true;
			}else{
				lyric.innerText = item.text
			}
		}
	})
})

const lyricBox = document.querySelector('.lyric')
const inputBox = document.querySelector('[name=input]')
const inputBoxPreview = document.querySelector('.inputPreview')
const motsBox = document.querySelector('.mots')
const bloqueBox = document.querySelector('.bloque')
const bottomBloque = document.querySelector('.bottom-bloque')
const bottomNextRound = document.querySelector('.bottom-next-round')
const bottomAvance = document.querySelector('.bottom-avance')
const buttonReveal = document.querySelector('.reveal')
const buttonNextRound = document.querySelector('.next-round')
const roundBox = [
	document.querySelector('.round-1'),
	document.querySelector('.round-2'),
	document.querySelector('.round-3'),
	document.querySelector('.round-4'),
	document.querySelector('.round-5'),
];
inputBox.value = "";