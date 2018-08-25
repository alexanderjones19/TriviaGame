var game = {
    questionTime: 20,
    correctAnswersCount: 0,
    incorrectAnswersCount: 0,
    unansweredCount: 0,
    timerInterval: 0,
    currentQuestion: {},
    correctAnswer: '',
    gameQuestions: [],
    questionBank: [
        {
            question: 'Which animal has the longest lifespan?',
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
            image: 'giant-tortoise.jpeg'
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
            question: 'Lupus is the latin name for which animal?',
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
            question: 'Which of these animals is responsible for the most human deaths every year?',
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
            image: 'peregrine-falcon.jpg'
        }
    ],  
    questionDisplay: function() {
        this.currentQuestion = this.gameQuestions.splice(Math.floor(Math.random() * this.gameQuestions.length), 1)[0];
        this.questionTime = 20;
        this.answerTimer();
        var questionText = $('<p id="question-text">').html(this.currentQuestion.question);
        $('#game-content').append(questionText);
        var answerText = [];
        for (i = 0; i < this.currentQuestion.answers.length; i++) {
            var newButton = $('<button type="button" class="btn btn-lg answers"/>').html(this.currentQuestion.answers[i].answer);
            newButton.attr('correct', this.currentQuestion.answers[i].correct);
            answerText.push(newButton);
        }
        $('#game-content').append(answerText);
    },
    gameStart: function() {
        $('#game-content').empty();
        this.correctAnswersCount = 0;
        this.incorrectAnswersCount = 0;
        this.unansweredCount = 0;
        this.gameQuestions = this.questionBank.slice(0);
        $('#start-button').hide();
        $('#reset-button').hide();
        this.questionDisplay();
    },
    answerTimer: function() {
        $('#game-content').append($('<p id="time-remaining">Time Remaining: ' + this.questionTime + '</p>'));
        this.timerInterval = setInterval(function() {
            game.questionTime--;
            $('#time-remaining').html($('<p id="time-remaining">Time Remaining: ' + game.questionTime + '</p>'));
            if (game.questionTime === 0) {
                game.timeRunOut();
            }
        }, 1000); 
    },
    timeRunOut: function() {
        this.unansweredCount++;
        clearInterval(this.timerInterval);
        $('#game-content').empty();
        this.findAnswer();
        $('#game-content').append($('<p class="correct-answer">Time\'s Up! The Correct Answer Was ' + this.correctAnswer + '</p>'));
        $('#game-content').append($('<img class="img-fluid" id="picture" src="assets/images/' + this.currentQuestion.image + '" />'));
        this.nextQuestion();
    },
    answerSelect: function(button) {
        if (button.attr('correct') == 'true') {
            this.correctAnswersCount++;
            clearInterval(this.timerInterval);
            $('#game-content').empty();
            this.findAnswer();
            $('#game-content').append($('<p class="correct-answer">Correct! ' + this.correctAnswer + '</p>'));
            $('#game-content').append($('<img class="img-fluid" id="picture" src="assets/images/' + this.currentQuestion.image + '" />'));
            this.nextQuestion();
        }
        if (button.attr('correct') == 'false') {
            this.incorrectAnswersCount++;
            clearInterval(this.timerInterval);
            $('#game-content').empty();
            this.findAnswer();
            $('#game-content').append($('<p class="correct-answer">Incorrect! The Correct Answer Was ' + this.correctAnswer + '</p>'));
            $('#game-content').append($('<img class="img-fluid" id="picture" src="assets/images/' + this.currentQuestion.image + '" />'));
            this.nextQuestion();
        }
    },
    findAnswer: function() {
        for (i = 0; i < this.currentQuestion.answers.length; i++) {
            if (this.currentQuestion.answers[i].correct === true) {
                this.correctAnswer = this.currentQuestion.answers[i].answer;
            }
        }
    },
    nextQuestion: function() {
        setTimeout(function() {
            $('#game-content').empty();
            if (game.gameQuestions.length > 0) {
                game.questionDisplay();
            }
            else if (game.gameQuestions.length === 0) {
                game.endGame();
            }
        }, 1000 * 4);
    },
    endGame: function() {
        clearInterval(this.timerInterval);
        $('#game-content').append($('<p class="correct-answer">How Did We Do?</p>'));
        $('#game-content').append($('<p class="correct-answer">Correct Answers: ' + this.correctAnswersCount + '</p>'));
        $('#game-content').append($('<p class="correct-answer">Incorrect Answers: ' + this.incorrectAnswersCount + '</p>'));
        $('#game-content').append($('<p class="correct-answer">Unanswered: ' + this.unansweredCount + '</p>'));
        $('#game-content').append($('<button type="button" class="btn btn-lg start-reset-buttons" id="reset-button">Click Here To Play Again</button>'));
        $('#reset-button').on('click', game.gameStart.bind(game));
    }
}



$(document).ready(function() {
    $('#start-button').on('click', game.gameStart.bind(game));
    $(document).on('click', '.answers', function() {
        game.answerSelect($(this));
    });
});