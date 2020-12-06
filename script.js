var startButton = document.getElementById('start');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');


// start button...create a button to start quiz + advance to next page w questions
function startQuiz()

// build the quiz...create a layout to display and make the quiz function
function buildQuiz()

// build results...need to show scores towards the end of quiz somehow
function showResults()


// make question for the quiz
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false }
        ]
    },
    {
        question: 'The condition in an if/else statement isnenclosed within _____.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'parentheses', correct: false },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        answer: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }
        ]
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        answer: [
            { text: 'commas', correct: true },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: false },
            { text: 'parentheses', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the dubugger is:',
        answer: [
            { text: 'JavaScript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true }
        ]
    },


]


// make a timer/counter 
function timer() {
    var sec = 20;
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = sec;
        sec--;
        if (sec === 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = 'Done';
            alert("You're out of time!");
        }
    }, 1000);
}
