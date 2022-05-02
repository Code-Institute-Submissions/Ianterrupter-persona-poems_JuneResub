// List of Questions

const questionsList = [
    {
        question: "Which of the below movies best describes you?",
        options: ["Pulp Fiction", "The Notebook", "The Hangover", "Die Hard"],
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4' ]
    },
    {
        question : "Which of the below books best describes you?",
        options: ["The Hunger Games", "Twilight", "1984", "A Short History of Nearly Everything"],
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4' ]
    },
    {
        question : "Which of the below foods do you like the most?",
        options: ["Fried Chicken", "Caesar Salad", "Pepperoni Pizza", "Steak tartare"],
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4' ]
    },
    {
        question : "If you were one of these drinks, what would you be?",
        options: ["Beer", "Spirit", "Cocktail", "Anything wet"],
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4' ]
    },
    {
        question : "City, Beach, Countryside or Mountain?",
        options: ["City", "Beach", "Countryside", "Mountain"],
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4' ]
    }
];


// Question Counter

let questionCounter = 0;
const questionNumber = options.length;

// Array of Answers

let answers = [];

// Questions

let question = document.getElementById("main-question");

let options = document.getElementsByClassName("question-answer");

function questionDisplay() {
    
    question.innerHTML = questionsList[questionCounter].question;

    options[0].innerHTML = questionsList[questionCounter].options[0];
    options[1].innerHTML = questionsList[questionCounter].options[1];
    options[2].innerHTML = questionsList[questionCounter].options[2];
    options[3].innerHTML = questionsList[questionCounter].options[3];
}

// Poem

function displayPoem() {
    
}

// Navigation

function nextQuestion() {
    if (questionCounter > 5) {
        displayPoem();
    } else {
        questionCounter++;
        questionDisplay();
    }

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


questionDisplay();

// Stored Answers

let answersProvided = Array(5).fill("No Answer Provided");

function storeAnswers(option) {
    answersProvided[questionCounter] = option.innerHTML;
    nextQuestion();
}

for (let i = 0; i < options.length; i++) {

    options[i].addEventListener('click', storeAnswers());
}

