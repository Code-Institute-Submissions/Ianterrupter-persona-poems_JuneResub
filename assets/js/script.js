// List of Questions

const questionsList = [
    {
        question: "Which of the below movies best describes you?",
        options: ["Pulp Fiction", "The Notebook", "The Hangover", "Die Hard"],
        answers: ["An ostentatious figure, ", "A lifelong romantic,", "With an air of levity,", "Some might call you bullish," ]
    },
    {
        question : "Which of the below books best describes you?",
        options: ["The Hunger Games", "Twilight", "1984", "A Short History of Nearly Everything"],
        answers: ["You appreciate the struggle,", "You're inspired by the curious,", "You look beneath the liminal,", "You strive for the greater meaning," ]
    },
    {
        question : "Which of the below foods do you like the most?",
        options: ["Fried Chicken", "Caesar Salad", "Pepperoni Pizza", "Steak tartare"],
        answers: ["Action, immediacy is best,", "Prudent, think before you act,", "Unfamiliar, something different but not quite,", "Elegance, the finer things are necessary," ]
    },
    {
        question : "If you were one of these drinks, what would you be?",
        options: ["Beer", "Spirit", "Cocktail", "Anything wet"],
        answers: ["You care not to rock the boat,", "There is a fire inside you,", "Full of poise, finesse,", "You enjoy the anarchy," ]
    },
    {
        question : "Where would you most enjoy being?",
        options: ["City", "Beach", "Countryside", "Mountain"],
        answers: ["The bustle is your nature.", "Bright repose is your endgame.", "You yearn for the hinterland.", "Steep solitude waits on you." ]
    }
];


// Question Counter

let questionCounter = 0;

// Array of Answers

let answers = [];

// Questions

let question = document.getElementById("main-question");
let options = document.getElementsByClassName("question-answer");
let optionsList = document.getElementById("answers");
let startButton = document.getElementById("start-button");

let optionCount = options.length;
function questionDisplay() {
    
    question.innerHTML = questionsList[questionCounter].question;

    changeOptionsAndNavigationVisibility("visible");

    startButton.style.visibility = "hidden";

    for (let i = 0; i < optionCount; i++) {
        let option = options[i];
        option.innerHTML = questionsList[questionCounter].options[i];
        // This is for saving the answer so we know what answer was clicked
        option.dataset.indexNumber = i;
    }

    // Event for saving answers
    let buttons = document.getElementsByClassName("question-answer");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', saveAnswer);
    }

    // This function is called after saveAnswer so that the array is updated before nextQuestion
    for (let i = 0; i < optionCount; i++) 
    {
        options[i].addEventListener('click', nextQuestion);
    }
}

// Poem

function displayPoem() {

    question.innerHTML = "Thank you for your time...";

    // Makes poem...
    let heading = "<h3>... here's a little poem based on your answers!</h3>";

    for (let i = 0; i < answers.length; i++) {
        let index = answers[i];
        let question = questionsList[i];
        let answer = question.answers[index];
        heading += '<p>' + answer + '</p>';
    }

    let poem = document.createElement("div");

    poem.setAttribute("id","poem");

    poem.innerHTML = heading;

    question.appendChild(poem);

    // Hides answers and navigation buttons...
    changeOptionsAndNavigationVisibility("hidden");

    let restartButton = document.createElement("button");

    restartButton.setAttribute("id","restart-button");
    restartButton.innerHTML = "<i class='fa-solid fa-arrow-rotate-left'></i>";
    question.appendChild(restartButton);
    restartButton.addEventListener('click', restartQuestions);
}

function restartQuestions() {
    
    questionCounter = 0;
    answers = [];

    changeOptionsAndNavigationVisibility("visible");


    let restartButton = document.getElementById("restart-button");
    restartButton.remove();

    let headingRemove = document.getElementsByTagName("h3")[0];
    headingRemove.remove();

    questionDisplay();
}

// Navigation

function nextQuestion() {
    questionCounter++;
		const isQuestionsCompleted = questionCounter > optionCount;
    const display = isQuestionsCompleted? displayPoem(): questionDisplay();
  	display();
}

let navigationRight = document.getElementById("navigation-right");
navigationRight.addEventListener('click', nextQuestion);

function previousQuestion() {
    if (questionCounter > 0) {
        questionCounter--;
        questionDisplay();
    }
}

let navigationLeft = document.getElementById("navigation-left");
navigationLeft.addEventListener('click', previousQuestion);

// Stored Answers

function saveAnswer() {
    answers[questionCounter] = this.dataset.indexNumber;
}

// Start questions

function startDisplay() {
    question.innerHTML = "What's your personality poem?";
    changeOptionsAndNavigationVisibility("hidden");

    startButton.addEventListener('click', questionDisplay);
}

function changeOptionsAndNavigationVisibility(visibility) {
    optionsList.style.visibility = visibility;
    navigationLeft.style.visibility = visibility;
    navigationRight.style.visibility = visibility;
}

window.addEventListener('load', (event) => {
    startDisplay();
});