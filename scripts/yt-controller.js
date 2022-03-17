(function() {
	var elPlayer = document.querySelector('.js-player');
	var elVideos = document.querySelector('.js-videos');
	var elPlay = document.querySelector('.js-play');

	var player = window.player = youtube({ el:elPlayer,
	options: {
		controls: 1,
		disabledkb: 0,
		showInfo: 0,
		id: 'wfxt1SGWAI8', // TO REMOVE?
		modestbranding: 1
	} });

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

let lesinitiales = "LES INITIALES";
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
		lyricBox.style.opacity = 1;
		inputBox.style.display = 'none';
		updateInputPreview();
		inputBox.blur();
		buttonBloque.focus();
		inputBoxPreview.style.display = 'none';
		location.href="#video";
	}
}

function refreshGUI() {

	inputBox.innerHTML = "";
	inputBoxPreview.style.display = 'none';

	initialsUsed = false;
	buttonInitiales.innerText = lesinitiales;

	buttonInitiales.style.display = 'block';
	buttonReveal.style.display = 'none';

	updateInputPreview();

	buttonBloque.style.opacity = 0.2;
	buttonNextRound.style.display = 'none';
	buttonAdvance.style.display = 'block';
	buttonBloque.style.opacity = 0.2;

	for(i = 0; i < maxRounds; i++){
		roundBox[i].classList.remove("round-active");
		roundBox[i].classList.add("round-inactive");
	}

	for(i = 0; i < syncData.length; i++){
		let line = lines[i];
		let [timeStr, text] = line.trim().split(']');
		syncData[i].text = text;
	}

	roundBox[round].classList.remove("round-inactive");
	roundBox[round].classList.add("round-active");
	let lineno = stops[round].update[0];
	let newstr = stops[round].update[1];
	syncData[lineno].text = newstr;

	bottomAvance.style.opacity = 1;
	buttonInitiales.style.opacity = 0.2;
	buttonBack.style.opacity = 0.2;

}

function initiales(button) {
	if(window.getComputedStyle(button).getPropertyValue('opacity') == 1) {
		initialsUsed = true;
		const realAnswer = wordArrayFromString(stops[round].answer);
		ret = "";
		for(i=0; i < realAnswer.length; i++){
			ret += realAnswer[i].charAt(0).toUpperCase();
		}
		buttonInitiales.innerText = ret;
		updateInputPreview();
	}
}

function startGame() {
	round = 0;
	document.querySelector('.comment-jouer').style.display = 'none';
	buttonPlay.classList.add("hidden");
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

function nextRound(button) {
	if(window.getComputedStyle(button).getPropertyValue('opacity') == 1){
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
}

function endGame() {
	gameRunning = false;
	inputBox.style.display = 'none';
	inputBoxPreview.style.display = 'none';
	buttonAdvance.style.opacity = 0.2;
	buttonBloque.style.opacity = 0.2;
	buttonNextRound.style.display = 'none';
	
	divBloque.style.display = 'none';
	divDummy.style.display = 'none';

	for(i = 0; i < syncData.length; i++){
		let line = lines[i];
		let [timeStr, text] = line.trim().split(']');
		syncData[i].text = text;
	}
	for(i = 0; i < maxRounds; i++){
		roundBox[i].style.opacity = 1;
		roundBox[i].classList.remove("round-active");
		roundBox[i].classList.add("round-inactive");
	}
	showSummary();
	player.play();
}

const htmlBlack = "&#11035;";
const htmlRed = "&#128997;";
const htmlGreen = "&#129001;";
const htmlYellow = "&#129000;";

const emojiBlack = String.fromCodePoint(0x1F532);
const emojiRed = String.fromCodePoint(0x1F7E5);
const emojiGreen = String.fromCodePoint(0x1F7E9);
const emojiYellow = String.fromCodePoint(0x1F7E8);

let summaryAnswers = new Array(5).fill("[sans réponse]");
let summaryCorrectness = new Array(5).fill(-1);
let summaryEmoji = [[],[],[],[],[]];

function share(btn) {

	let emojiCorrectness = [emojiBlack,emojiBlack,emojiBlack,emojiBlack,emojiBlack];
	for(i=0; i < 5; i++){
		if(summaryCorrectness[i] == 0) emojiCorrectness[i] = emojiRed;
		if(summaryCorrectness[i] == 1) emojiCorrectness[i] = emojiGreen;
		if(summaryCorrectness[i] == 2) emojiCorrectness[i] = emojiYellow;
	}

	let ret = "";
	
	ret += `NOPLPdle: ${ title } - ${ artiste }\n`;
	for(i=0; i < 5; i++){
		ret += `${ emojiCorrectness[i] } Tour ${ i+1 }: `
		if(stops[i].words <= 6){
			ret += stops[i].teaser.toLocaleLowerCase() + ' ';
		}
		ret += `${ summaryEmoji[i].join('') } \n`;
	}
	ret += `https://guissmo.com/noplpdle.html\n`;
	
	navigator.clipboard.writeText(ret);
	btn.innerText = "COPIÉ!";

}

function showSummary() {

	let emojiCorrectness = [htmlBlack,htmlBlack,htmlBlack,htmlBlack,htmlBlack];
	for(i=0; i < 5; i++){
		if(summaryCorrectness[i] == 0) emojiCorrectness[i] = htmlRed;
		if(summaryCorrectness[i] == 1) emojiCorrectness[i] = htmlGreen;
		if(summaryCorrectness[i] == 2) emojiCorrectness[i] = htmlYellow;
	}

	let ret = "";

	ret += `<center>`;
	ret += `<button class="button-below big-button share-button" onclick="share(this)">PARTAGER</button>`;
	ret += `</center>`;
	ret += `<br>`;
	ret += `<h3>SOMMAIRE</h3>`;
	for(i=0; i < 5; i++){
		ret += `<h4>${ emojiCorrectness[i] } TOUR ${ i+1 }</h4>`;
		ret += `${ stops[i].update[1] } ${ summaryAnswers[i] }`;
		if( emojiCorrectness[i] == htmlRed || emojiCorrectness[i] == htmlBlack ){
			ret += `<p style="color:#696969">${ stops[i].update[1] } ${ stops[i].answer }</p>`;
		}
	}
	ret += `</center>`;
	
	bottomEndGame.style.display = 'block';
	bottomEndGame.classList.remove('hidden');
	bottomEndGame.innerHTML = ret;

	// bottomEndGame.style.display = 'block';
	// bottomEndGame.innerHTML = ""
	// for(i=0; i < 5; i++){
	// 	bottomEndGame.innerHTML += `Coupure 1: ${i + 1}: ${ summaryAnswers[i] }<br>`;
	// }
	// bottomEndGame.innerHTML += `<br>`;
	// for(i=0; i < 5; i++){
	// 	let emoji = emojiBlack;
	// 	if(summaryCorrectness[i] == 0) emoji = emojiRed;
	// 	if(summaryCorrectness[i] == 1) emoji = emojiGreen;
	// 	if(summaryCorrectness[i] == 2) emoji = emojiYellow;
	// 	bottomEndGame.innerHTML += `${ emoji }`;
	// }
	// bottomEndGame.innerHTML += `<br>`;
	// for(i=0; i < 5; i++){
	// 	oneLine = `Coupure ${ i+1 }: `;
	// 	for(j=0; j < summaryEmoji[i].length; j++){
	// 		oneLine += summaryEmoji[i][j];
	// 	}
	// 	oneLine += "<br>"
	// 	bottomEndGame.innerHTML += `${ oneLine }`;
	// }
}

function purifyString(str) {
	if (typeof str === 'undefined') return("");
	return( removeDiacritics(str).toUpperCase().replace(/[^A-Z']/g, ``) );
}

function wordArrayFromString(str) {
	let n = stops[round].words;
	const cleanString = str.trim().replaceAll(/[’´’']/g,"' ");
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
	let newArray = wordArrayFromString(inputBox.value);
	const realAnswer = wordArrayFromString(stops[round].answer);
	if(initialsUsed){
		for(i = 0; i < realAnswer.length; i++){
			if(realAnswer[i].length == 2 && realAnswer[i].charAt(1) == "'"){
				newArray[i] = realAnswer[i];
				console.log(2)
			} else if(newArray[i].includes(blank)){
				console.log(newArray[i])
				newArray[i] = realAnswer[i].charAt(0) + blank;
				console.log(newArray[i])
				console.log(realAnswer[i])
				console.log(blank)
				console.log(11111)
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

		buttonBloque.style.opacity = 1;
		buttonInitiales.style.opacity = 1;
		buttonBack.style.opacity = 1;
		
		buttonAdvance.style.opacity = 0.2;

		// location.href = "#while-answering";
		// if(!isMobile){

		inputBox.focus();
		// } else {
			// inputBoxPreview.style.display = 'block';
			// inputBoxPreview.style.opacity = 1;
			// inputBox.style.display = 'none';
		// }
	}
}

function exitAnswerMode() {
	inputBoxPreview.style.display = 'block';
	inputBoxPreview.style.opacity = 1;
	lyricBox.style.opacity = 1;
	inputBox.style.display = 'none';
	updateInputPreview();
	inputBox.blur();
	buttonBloque.focus();
}

function correctTheInput() {
	let userAnswer = wordArrayFromString(inputBox.value);
	const realAnswer = wordArrayFromString(stops[round].answer);
	if(initialsUsed){
		for(i = 0; i < realAnswer.length; i++){
			if(userAnswer[i].includes(blank)){
				if(initialsUsed){
					userAnswer[i] = realAnswer[i].charAt(0) + blank;
				}else{
					userAnswer[i] = blank;
				}
			}
			if(realAnswer[i].length == 2 && realAnswer[i].charAt(1) == "'"){
				userAnswer[i] = realAnswer[i];
			}
			if(initialsUsed){
				userAnswer[i] = realAnswer[i].charAt(0) + userAnswer[i].slice(1, userAnswer[i].length);
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
	buttonBloque.style.opacity = 0.2;
	buttonAdvance.style.opacity = 0.2;
	buttonNextRound.style.opacity = 0.2;
	
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
			if(audio.currentTime >= 3.50 & !done){//3.50
				inputBoxPreview.innerHTML = ret.join(' ');
				summaryAnswers[round] = inputBoxPreview.innerHTML;
				inputBoxPreview.style.opacity = 1;
				buttonInitiales.style.opacity = 0.2;

				buttonAdvance.style.display = 'none';
				buttonNextRound.style.display = 'block';
				buttonNextRound.style.opacity = 1;
				buttonAdvance.style.opacity = 1;

				buttonReveal.style.display = 'block';
				buttonInitiales.style.opacity = 0.2;
				buttonInitiales.style.display = 'none';

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
		buttonInitiales.style.opacity = 0.2;
		buttonBack.style.opacity = 0.2;
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

function teleport(button) {
	console.log(button.style.opacity);
	console.log(button.style.opacity);
	console.log(window.getComputedStyle(button).getPropertyValue('opacity'));
	if(window.getComputedStyle(button).getPropertyValue('opacity') == 1){
		inputBox.blur();
		player.currentTime = stops[round].time - 5;
		waitingForAnswer = false;
		inputBox.style.display = 'none';
		// updateInputPreview();
		inputBoxPreview.style.display = 'none';
		// buttonBloque.focus();
		player.play();
	}
}

let lines = lyrics.trim().split('\n');
let syncData = [];  
lines.map((line, index) => {
    let [timeStr, text] = line.trim().split(']');
    timeStr = timeStr.replaceAll('[', '');
    let [minStr, secStr] = timeStr.split(':');
    let time = parseInt(minStr)*60 + parseFloat(secStr)
    syncData.push({'start': time, 'text': text.trim()})
})

let lyricUpdater = player.addEventListener('timeupdate', function(event) {
	syncData.forEach((item) => {
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
const buttonPlay = document.querySelector('.js-play')
const buttonBloque = document.querySelector('.bloque')
const buttonAdvance = document.querySelector('.avance')
const bottomBloque = document.querySelector('.bottom-bloque')
const buttonNextRound = document.querySelector('.continue')
const bottomEndGame = document.querySelector('.real-bottom-end-game')
const bottomAvance = document.querySelector('.bottom-avance')
const buttonReveal = document.querySelector('.reveal')
const divBloque = document.querySelector('[id=bloq]')
const divDummy = document.querySelector('[id=dummy]')
// const buttonNextRound = document.querySelector('.next-round')
const buttonInitiales = document.querySelector('.initiales')
const buttonBack = document.querySelector('.back')
const roundBox = [
	document.querySelector('.round-1'),
	document.querySelector('.round-2'),
	document.querySelector('.round-3'),
	document.querySelector('.round-4'),
	document.querySelector('.round-5'),
];
inputBox.value = "";