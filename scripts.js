class AudioController {
    constructor() {
        this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
        this.flipSound = new Audio('Assets/Audio/flip.wav');
        this.matchSound = new Audio('Assets/Audio/match.wav');
        this.victorySound = new Audio('Assets/Audio/victory.wav');
        this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    math() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining - totalTime;
        this.timer = document.querySelector("#time-remaining");
        this.ticker = document.querySelector("#flips");
        this.audioController = new AudioController();

    }
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            //if statement
        }
    }

    sguffleCards() {
        // for () {

        // }
    }


    canFlipCard(card) {
        return true;
        // return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck 
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text')),
        cards = Array.from(document.getElementsByClassName("card")),
        game = new MixOrMatch(100, cards)

    console.log(cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startGame
            game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipCard(card);
            game.flipCard(card);
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}


// new MixOrMatch(100,cardsArray)