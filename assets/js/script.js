// List of Questions

const questionsList = [
    {
        question: "Which of the below movies best describes you?",
        options: ["Pulp Fiction", "The Notebook", "The Hangover", "Die Hard"]
    },
    {
        question : "Which of the below books best describes you?",
        options: ["The Hunger Games", "Twilight", "1984", "A Short History of Nearly Everything"]
    },
    {
        question : "Which of the below foods do you like the most?",
        options: ["Fried Chicken", "Caesar Salad", "Pepperoni Pizza", "Steak tartare"]
    },
    {
        question : "If you were one of these drinks, what would you be?",
        options: ["Beer", "Spirit", "Cocktail", "Anything wet"]
    },
    {
        question : "City or Beach?",
        options: ["City", "Beach"]
    }
];


// Question Counter

let questionCounter = 0;

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

// Navigation

function nextQuestion() {
    questionCounter++;
    questionDisplay();
}

let navigationRight = document.getElementById("navigation-right");

navigationRight.addEventListener('click', nextQuestion);

function previousQuestion() {
    questionCounter--;
    questionDisplay();
}

let navigationLeft = document.getElementById("navigation-left");

navigationLeft.addEventListener('click', previousQuestion);

for (let i = 0; i < options.length; i++) {
    
    options[i].addEventListener('click', nextQuestion);
}

questionDisplay();

//add event listener for next button
//next ++i and update question/options

//add event listener for previous button
//next --i and update question/options