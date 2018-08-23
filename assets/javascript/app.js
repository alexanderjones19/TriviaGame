//object for game with array of objects for question bank
//properties of questions that include correct answer: true or false
//buttons for answers and p for question text

//question bank
//question timer
//next question timer

//answering function, check for correct answer
//game start function
//time run out function
//put question on screen function

//create game screen after they hit start
//create end game screen at the very end with summary
//create answer screen functions for all three possibilities (out of time, correct, incorrect)
var game = {
    questionTime: 30,
    nextTime: 4,
    questionBank: [
        {
            question: 'What animal has the longest lifespan?',
            answers: [
                {
                    answer: 'Elephant',
                    correct: false
                },
                {
                    answer: 'Blue Whale',
                    correct: false
                },
                {
                    answer: 'Giant Tortoise',
                    correct: true
                },
                {
                    answer: 'Locust',
                    correct: false
                }
            ],
            image: 'giant-tortoise.jpg'
        },
        {
            question: 'What is the only mammal capable of true flight?',
            answers: [
                {
                    answer: 'Bat',
                    correct: true
                },
                {
                    answer: 'Flying Squirrel',
                    correct: false
                },
                {
                    answer: 'Ocelot',
                    correct: false
                },
                {
                    answer: 'Hummingbird',
                    correct: false
                }
            ],
            image: 'bat.jpg'
        },
        {
            question: 'What is the collective noun used to describe a group of crows?',
            answers: [
                {
                    answer: 'Gaggle',
                    correct: false
                },
                {
                    answer: 'Murder',
                    correct: true
                },
                {
                    answer: 'Army',
                    correct: false
                },
                {
                    answer: 'Squad',
                    correct: false
                }
            ],
            image: 'crows.jpg'
        },
        {
            question: 'Lupus is the latin name for what animal?',
            answers: [
                {
                    answer: 'Leopard',
                    correct: false
                },
                {
                    answer: 'Gorilla',
                    correct: false
                },
                {
                    answer: 'Crab',
                    correct: false
                },
                {
                    answer: 'Wolf',
                    correct: true
                }
            ],
            image: 'wolf.jpg'
        },
        {
            question: 'Which animal is responsible for the most human deaths every year?',
            answers: [
                {
                    answer: 'Shark',
                    correct: false
                },
                {
                    answer: 'Snake',
                    correct: false
                },
                {
                    answer: 'Mosquito',
                    correct: true
                },
                {
                    answer: 'Hippopotamus',
                    correct: false
                }
            ],
            image: 'mosquito.jpg'
        },
        {
            question: 'What is the fastest animal?',
            answers: [
                {
                    answer: 'Cheetah',
                    correct: false
                },
                {
                    answer: 'Black Marlin',
                    correct: false
                },
                {
                    answer: 'Peregrine Falcon',
                    correct: true
                },
                {
                    answer: 'House Cat',
                    correct: false
                }
            ],
            image: 'peregrinefalcon.jpg'
        }
    ],  
    gameStart: function() {

    },
    
}



$(document).ready(function(){
    gameStart();
});