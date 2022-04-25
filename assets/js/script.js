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

// Questions

let question = document.getElementById("main-question");
question.innerHTML = questionsList[0].question;

let options = document.getElementsByClassName("question-answer");
options[0].innerHTML = questionsList[0].options[0];
options[1].innerHTML = questionsList[0].options[1];
options[2].innerHTML = questionsList[0].options[2];
options[3].innerHTML = questionsList[0].options[3];