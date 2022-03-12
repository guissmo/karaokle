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

let blank = `<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>`;
const maxRounds = stops.length;
stops.push({
	time: 10000000
})

let waitingForAnswer = false;
const lyric = document.querySelector('.lyric')

let initialsUsed = false;
let gameRunning = false;

function videoPlaying() {
	if (gameRunning){
		exitAnswerMode();
		inputBoxPreview.style.opacity = 0.2;
	}
}

function refreshGUI() {
	inputBox.innerHTML = ""

	initialsUsed = false;
	buttonInitiales.innerText = "Les Initiales";

	updateInputPreview();

	bottomBloque.style.display = 'none';
	bottomNextRound.style.display = 'none';

	for(i = 0; i < maxRounds; i++){
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

	bottomAvance.style.display = 'block';

}

function initiales() {
	initialsUsed = true;
	const realAnswer = wordArrayFromString(stops[round].answer);
	ret = "";
	for(i=0; i < realAnswer.length; i++){
		ret += realAnswer[i].charAt(0);
	}
	buttonInitiales.innerText = ret;
	updateInputPreview();
}

function startGame() {
	round = 0;
	gameRunning = true;
	refreshGUI();
	for(i = 0; i < maxRounds; i++){
		roundBox[i].innerText = `${stops[i].words } MOTS`//'&#9642;&#65039;&#9642;&#65039;&#9642;&#65039;&#9642;&#65039;&#9642;&#65039;';
		roundBox[round].classList.remove("r-bg");
		roundBox[round].classList.remove("y-bg");
		roundBox[round].classList.remove("g-bg");
	}
	inputBox.value = "";
	player.play();
}

function nextRound() {
	player.currentTime = stops[round].time - 1;
	round = round + 1;
	if(round == maxRounds){
		endGame();
		return;
	}
	inputBox.value = "";
	refreshGUI();
	player.play();
}

function endGame() {
	gameRunning = false;
	inputBox.style.display = 'none';
	inputBoxPreview.style.display = 'none';
	bottomAvance.style.display = 'none';
	bottomBloque.style.display = 'none';
	bottomNextRound.style.display = 'none';
	for(i = 0; i < syncData.length; i++){
		let line = lines[i];
		let [timeStr, text] = line.trim().split(']');
		syncData[i].text = text;
	}
	for(i = 0; i < maxRounds; i++){
		roundBox[i].style.opacity = 1;
	}
	showSummary();
	player.play();
}

const emojiBlack = "&#11035;";
const emojiRed = "&#128997;";
const emojiGreen = "&#129001;";
const emojiYellow = "&#129000;";

let summaryAnswers = new Array(5).fill("Not registered.");
let summaryCorrectness = new Array(5).fill(-1);
let summaryEmoji = [[],[],[],[],[]];
function showSummary() {
	bottomEndGame.style.display = 'block';
	bottomEndGame.innerHTML = ""
	for(i=0; i < 5; i++){
		bottomEndGame.innerHTML += `Coupure 1: ${i + 1}: ${ summaryAnswers[i] }<br>`;
	}
	bottomEndGame.innerHTML += `<br>`;
	for(i=0; i < 5; i++){
		let emoji = emojiBlack;
		if(summaryCorrectness[i] == 0) emoji = emojiRed;
		if(summaryCorrectness[i] == 1) emoji = emojiGreen;
		if(summaryCorrectness[i] == 2) emoji = emojiYellow;
		bottomEndGame.innerHTML += `${ emoji }`;
	}
	bottomEndGame.innerHTML += `<br>`;
	for(i=0; i < 5; i++){
		oneLine = `Coupure ${ i+1 }: `;
		for(j=0; j < summaryEmoji[i].length; j++){
			oneLine += summaryEmoji[i][j];
		}
		oneLine += "<br>"
		bottomEndGame.innerHTML += `${ oneLine }`;
	}
}

function purifyString(str) {
	if (typeof str === 'undefined') return("");
	return( removeDiacritics(str).toUpperCase().replace(/[^A-Z']/g, ``) );
}

function wordArrayFromString(str) {
	let n = stops[round].words;
	const cleanString = str.trim().replaceAll("'","' ");
	const wordArray = cleanString.split(/[ ]+/);
	let smallWordArray = [];
	if(cleanString.length > 0){
		smallWordArray = wordArray.slice(0, n);
	}
	while (smallWordArray.length < n) {
		smallWordArray.push(blank);
	}
	return(smallWordArray)
}

function updateInputPreview() {
	const newArray = wordArrayFromString(inputBox.value);
	const realAnswer = wordArrayFromString(stops[round].answer);
	if(initialsUsed){
		for(i = 0; i < realAnswer.length; i++){
			// console.log(realAnswer[i].length)
			// console.log(realAnswer[i].charAt(0));
			// console.log(realAnswer[i].charAt(1));
			// console.log(realAnswer[i]);
			// console.log();
			if(realAnswer[i].length == 2 && realAnswer[i].charAt(1) == "'"){
				newArray[i] = realAnswer[i];
				console.log(2)
			} else if(newArray[i] == blank){
				newArray[i] = realAnswer[i].charAt(0) + newArray[i].replace("&nbsp;", "");
				console.log(1)
			} else {
				console.log(3)
				newArray[i] = newArray[i].replace(newArray[i].charAt(0), realAnswer[i].charAt(0));
			}
		}
	}
	const previewText = newArray.join(' ');
	inputBoxPreview.innerHTML = previewText;
}

function enterAnswerMode() {
	if (waitingForAnswer){
		inputBoxPreview.style.display = 'none';
		inputBox.style.display = 'block';
		lyricBox.style.opacity = 0.8;
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
	let userAnswer = wordArrayFromString(inputBox.value);
	const realAnswer = wordArrayFromString(stops[round].answer);
	if(initialsUsed){
		for(i = 0; i < realAnswer.length; i++){
			userAnswer[i] = userAnswer[i].replace(userAnswer[i].charAt(0), realAnswer[i].charAt(0));
			if(realAnswer[i].length == 2 && realAnswer[i].charAt(1) == "'"){
				userAnswer[i] = realAnswer[i];
			}
		}
	}
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
			summaryEmoji[round].push(emojiGreen);
		}else{
			wrong = true;
			ret.push( `<font class="r">${ userAnswer[i] }</font>` )
			summaryEmoji[round].push(emojiRed);
		}
	}
	let soundName = 'wrong';
	let done = false;
	if(!wrong) soundName = 'correct'
	const audio = new Audio(`./files/woo_${ soundName }.mp3`);
		audio.addEventListener('timeupdate', (event) => {
			if(audio.currentTime >= 3.50 & !done){
				inputBoxPreview.innerHTML = ret.join(' ');
				summaryAnswers[round] = inputBoxPreview.innerHTML;
				inputBoxPreview.style.opacity = 1;
				bottomNextRound.style.display = 'block';
				if(wrong){
					buttonReveal.focus();
					roundBox[round].classList.add("r-bg");
					summaryCorrectness[round] = 0;
				}else{
					buttonNextRound.focus();
					if(initialsUsed){
						roundBox[round].classList.add("y-bg");
						summaryCorrectness[round] = 2;
					}else{
						roundBox[round].classList.add("g-bg");
						summaryCorrectness[round] = 1;
					}
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
	lyricBox.style.opacity = 1;
	inputBox.style.display = 'none';
	inputBoxPreview.style.opacity = 0.2;
	inputBoxPreview.style.display = 'block';
	updateInputPreview();
	inputBox.blur();
	bloqueBox.focus();
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
const bottomEndGame = document.querySelector('.bottom-end-game')
const bottomAvance = document.querySelector('.bottom-avance')
const buttonReveal = document.querySelector('.reveal')
const buttonNextRound = document.querySelector('.next-round')
const buttonInitiales = document.querySelector('.initiales')
const roundBox = [
	document.querySelector('.round-1'),
	document.querySelector('.round-2'),
	document.querySelector('.round-3'),
	document.querySelector('.round-4'),
	document.querySelector('.round-5'),
];
inputBox.value = "";