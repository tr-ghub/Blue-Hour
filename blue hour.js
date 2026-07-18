//MOOD
function mood(moodSelected) {
    const message = document.getElementById("popUpQuestion");

    //CALM
    if (moodSelected === "calm") {
        const calmQuotes = [
            "Life goes fast, just enjoy it.",
            "One of the best ways to enjoy life is to accept things that you cannot control.",
            "Take a deep breath and let go.",
            "When you're calm, you see stars.",
            "The answer you find will come to you, when you relax and wait."
        ];
        const calmColours = [
            "#C1D6F7",
            "#B8EAF2",
            "#b7d4a2ff",
            "#CDEBC7"
        ]
        const randomQuotes = calmQuotes[Math.floor(Math.random() * calmQuotes.length)];
        //math.random(): 0<=number<1
        //math.random*5 could be 3.347
        //math.floor: 3 - quote 3
        const randomColours = calmColours[Math.floor(Math.random() * calmColours.length)];
        message.textContent = randomQuotes;
        document.body.style.backgroundColor = randomColours;
    }

    //HAPPY
    else if (moodSelected === "happy") {
        const happyQuotes = [
            "Joy doesn't need any reasons.",
            "I like the smile on your face.",
            "Happiness is all you need.",
            "Let this happiness stays forever.",
            "May your everyday filled with laughter and happiness."
        ];
        const happyColours = [
            "#b4c1ecff",
            "#FFC7D2",
            "#fae98bff",
            "#FFCFD6"
        ]
        const randomQuotes = happyQuotes[Math.floor(Math.random() * happyQuotes.length)];
        const randomColours = happyColours[Math.floor(Math.random() * happyColours.length)];
        message.textContent = randomQuotes;
        document.body.style.backgroundColor = randomColours;
    }

    //LUCKY
    else if (moodSelected === "lucky") {
        const luckyQuotes = [
            "Luck comes in every way.",
            "Luck takes time to find you.",
            "What's meant for you, won't miss you.",
            "Something great is waiting ahead.",
            "You are at the right place, at the right moment."
        ];
        const luckyColours = [
            "#C6F5CB",
            "#D4FFD7",
            "#D4FBFF",
            "#e5cff7ff"
        ]
        const randomQuotes = luckyQuotes[Math.floor(Math.random() * luckyQuotes.length)];
        const randomColours = luckyColours[Math.floor(Math.random() * luckyColours.length)];
        message.textContent = randomQuotes;
        document.body.style.backgroundColor = randomColours;
    }

    //SAD
    else if (moodSelected === "sad") {
        const sadQuotes = [
            "Don't give up. I'm sure something great is waiting ahead for you.",
            "It's okay to feel heavy. It's okay to cry. Let the tears out so they don't burden you tomorrow.",
            "You don't need to fix everything immediately.",
            "It's okay to have feelings.",
            "Every step counts.",
            "I'm right here with you."
        ];
        const sadColours = [
            "#CFE1FF",
            "#CFD5FF",
            "#CBFFC9",
            "#FFE5FD"
        ]
        const randomQuotes = sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
        const randomColours = sadColours[Math.floor(Math.random() * sadColours.length)];
        message.textContent = randomQuotes;
        document.body.style.backgroundColor = randomColours;
    }

    //ANGRY
    else if (moodSelected === "angry") {
        const angryQuotes = [
            "Storm pass, even when they feel endless.",
            "Take a deep breathe. Let the feeling exist, but don't be controlled by them.",
            "It's okay to feel angry. But remember to pause before letting it all out.",
            "Step back for a moment. Everything will be okay.",
            "Pause. Breathe in. Breathe out. Are you feeling better?",
            "Give yourself a quiet moment.",
            "Let this feeling settle before moving. You will be okay."
        ];
        const angryColours = [
            "#C7D2E3",
            "#C9D8C5",
            "#BFD3E6",
            "#C3D9D6"
        ]
        const randomQuotes = angryQuotes[Math.floor(Math.random() * angryQuotes.length)];
        const randomColours = angryColours[Math.floor(Math.random() * angryColours.length)];
        message.textContent = randomQuotes;
        document.body.style.backgroundColor = randomColours;
    }

    //UNWELL
    else if (moodSelected === "unwell") {
        const unwellQuotes = [
            "Rest is part of the journey.",
            "Taking good care of yourself is enough today.",
            "It's okay to slow down.",
            "Take some rest and everything will be just fine.",
            "You don't need to push yourself right now."
        ];
        const unwellColours = [
            "#FFF5E1",
            "#D6F0E6",
            "#F5EDE0",
            "#EBE0D1"
        ]
        const randomQuotes = unwellQuotes[Math.floor(Math.random() * unwellQuotes.length)];
        const randomColours = unwellColours[Math.floor(Math.random() * unwellColours.length)];
        message.textContent = randomQuotes;
        document.body.style.backgroundColor = randomColours;
    }
}

//MUSIC
function music(sound) {
    const musicPlayer = document.getElementById("music");
    if (sound === "rain") {
        musicPlayer.src = "royal-free-musics/mixkit-rain-long-loop-2394.wav";
    } else if (sound === "thunder") {
        musicPlayer.src = "royal-free-musics/mixkit-calm-thunderstorm-in-the-jungle-2415.wav";
    } else if (sound === "cafe") {
        musicPlayer.src = "royal-free-musics/Bread.mp3";
    } else if (sound === "morning") {
        musicPlayer.src = "royal-free-musics/Morning.mp3";
    } else if (sound === "butterflies") {
        musicPlayer.src = "royal-free-musics/Butterflies.mp3";
    }
    musicPlayer.loop = true;
    musicPlayer.play();
}

function stopMusic() {
    const musicPlayer = document.getElementById("music");
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
    musicPlayer.src = "";
    musicPlayer.play();
}

//TIMER
let timeLeft = 25 * 60;
let interval;

function updateTimeDisplayed() {
    const start = document.getElementById("start");
    const stop = document.getElementById("pause");
    const reset = document.getElementById("reset");

    const minutes = Math.floor(timeLeft / 60);
    //timeLeft=125 -> 125/60 = 2.0833 -> 2 mins
    const seconds = timeLeft % 60;
    //125%60 = 5 seconds

    const timer = document.getElementById("timeDisplayed");
    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    //mins = 3, secs = 5 -> numbers become text using toString() -> "3" and "5" 
    //padStart(2, "0") adds 0 in front of the number if it is less than 2 digits -> "03" and "05"
};

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimeDisplayed();

        if (timeLeft == 0) {
            clearInterval(interval);
            alert("Time's up! Let's take a break. :D ");  //show pop-up message
            timeLeft = 25 * 60;
            updateTimeDisplayed();
        }
    }, 1000);
    //setInterval(function,time) - executes the function every 1000 milliseconds (1 second) 
    // -> substract 1 from timeLeft
};
const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 25 * 60;
    updateTimeDisplayed();
}
