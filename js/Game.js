import * as init from './init.js';

export default class Game {

    computerChoice;
    playerChoice;

    constructor(event) {
        this.playerHand = event.currentTarget.value;

        this.buildRound();
    }

    buildRound() {
        this.playerPlay();
        this.computerPlay();

        this.showRoundCanvas();

        this.buildScore();
        
        this.incrementRound();
    }

    playerPlay() {
        const plyerPLay = this.getImageButton(this.playerHand);
        init.playerHand.src = plyerPLay.src;

        this.playerChoice = plyerPLay.name;
    }

    computerPlay() {
        const choices = ['rock', 'paper', 'scissor'];
        const random = Math.floor((Math.random() * 3) + 1);

        const cpuChoiceIndex = choices[random - 1];

        const cpuHand = this.getImageButton(cpuChoiceIndex);
        init.computerHand.src = cpuHand.src;

        this.computerChoice = cpuHand.name;
    }

    showRoundCanvas() {
        init.roundCanvas.style.display = 'flex';
    }

    getImageButton(id) {
        const choices = [
            {
                name: "rock",
                src: "./images/rock.png"
            },
            {
                name: "paper",
                src: "./images/paper.png"
            },
            {
                name: "scissor",
                src: "./images/scissor.png"
            },
        ];

        switch (id) {
            case "rock":
                return choices[0];
            case "paper":
                return choices[1];
            case "scissor":
                return choices[2];
        }
    }

    buildScore() {
        let countWins = +init.scoreSection[0].firstElementChild.innerHTML;
        let countLoss = +init.scoreSection[1].firstElementChild.innerHTML;
        let countTies = +init.scoreSection[2].firstElementChild.innerHTML;

        if (this.computerChoice === this.playerChoice) {
            init.scoreSection[2].firstElementChild.innerHTML = ++countTies;
        }
    }

    incrementRound() {
        let roundNumber = +init.roundNumber.firstElementChild.innerHTML;
        init.roundNumber.firstElementChild.innerHTML = ++roundNumber;
    }
}