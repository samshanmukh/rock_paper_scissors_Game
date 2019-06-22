const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
	player: 0,
	computer: 0
}

// Play game
function play(e) {
	restart.style.display = 'inline-block';
	const playerChoice = e.target.id;
	const computerChoice = getComputerChoice();
	const winner = getWinner(playerChoice, computerChoice);
	showWinner(winner, computerChoice);
	console.log(playerChoice, computerChoice, winner);
}

// Get computers choice
function getComputerChoice() {
	const rand = Math.random();
	if(rand < 0.34) {
		return 'rock';
	} else if (rand <= 0.67) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

// Get game winner
function getWinner(playerChoice, computerChoice) {
	if(playerChoice == computerChoice) {
		return 'draw';
	} else if(playerChoice == 'rock') {
		if(computerChoice == 'paper') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if(playerChoice == 'paper') {
		if(computerChoice == 'scissors') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if(playerChoice == 'scissors') {
		if(computerChoice == 'rock') {
			return 'computer';
		} else {
			return 'player';
		}
	}
}

function showWinner(winner, computerChoice) {
	if(winner == 'player') {
		// Increament player score
		scoreboard.player++;
		// Show moadl result
		result.innerHTML = `
			<h1 class="text-win">You Win</h1>
			<i class="fas fa-hand-${computerChoice} fa-10x"></i>
			<p>Computer Chose <strong>${computerChoice}</strong></p>
		`;
	} else if(winner == 'computer') {
		// Increament player score
		scoreboard.computer++;
		// Show moadl result
		result.innerHTML = `
			<h1 class="text-lose">You Lose</h1>
			<i class="fas fa-hand-${computerChoice} fa-10x"></i>
			<p>Computer Chose <strong>${computerChoice}</strong></p>
		`;
	} else {
		// Show modal result
		result.innerHTML = `
			<h1>It's a Draw</h1>
			<i class="fas fa-hand-${computerChoice} fa-10x"></i>
			<p>Computer Chose <strong>${computerChoice}</strong></p>
		`;
	}
	// Show score
	score.innerHTML = `
		<p>Player: ${scoreboard.player}</p>
		<p>Computer: ${scoreboard.computer}</p>
	`;

	modal.style.display = 'block';
}

// Restart game
function restartGame() {
	scoreboard.player = 0;
	scoreboard.computer = 0;
	score.innerHTML = `
		<p>Player: 0</p>
		<p>Computer: 0</p>
	`;
}

// Clear Modal
function clearModal(e) {
	if(e.target == modal) {
		modal.style.display = 'none';
	}
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);