const predictions = [
    "You got Hacked, this is your IP? 127.0.0.1",
    "Your Hack Club Slack message will be misunderstood today (again).",
    "Someone will steal your prize from the Flavortown shop.",
    "You will accidentally submit a project with a typo in the title… heroically.",
    "A new emoji will inspire a revolutionary idea… or just a meme war.",
    "A stranger in Flavortown will ask for your GitHub password (and probably wink).",
    "Something trivial in code will feel deeply poetic, like a haiku.",
    "Your keyboard might betray your keystrokes today… plot twist.",
    "Your lunch could unexpectedly match your mood perfectly (spoiler: it's pizza).",
    "You will accidentally create a bug so legendary it gets its own name.",
    "Your cat will stare at you judging your Hack Club code skills.",
    "Someone will suggest a random project and it will actually work.",
    "You will momentarily think you’re a hacker, then spill coffee on your laptop.",
    "Beware of doors on your left side today… they’re sneaky.",
    "Your Wi-Fi will mysteriously work better after you give it a compliment.",
    "You will get an unexpected compliment from someone you didn’t notice.",
    "Your snack stash will disappear mysteriously…"
];

const predictionText = document.getElementById("fortune-text");
const againBtn = document.getElementById("predict-btn");
let remainingPredictions = [...predictions];

function generate() {
    if (remainingPredictions.length === 0) {
        predictionText.textContent = "No more predictions for now!";
        return;
    }
    const index = Math.floor(Math.random() * remainingPredictions.length);
    predictionText.textContent = remainingPredictions[index];
    remainingPredictions.splice(index, 1);
}

againBtn.addEventListener("click", generate);