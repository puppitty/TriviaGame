$(document).ready(function () {

      // define variables including timers
      var qTimer = 0;
      var pauseTimer = 0;
      var qNumber = 0;
      var userPick = null;
      var correctAns = 0;
      var totalCorrect = 0;
      var totalWrong = 0;
      var totalUnAns = 0;
      var gameRunning = false;

      // arrays for questions, answers, image and correct answer
      // website for trivia questions: http://www.partycurrent.com/chocolate-trivia.html
      triviaQs = [{
          question: "Which type of chocolate is considered good for your health?",
          choices: ["Dark", "Milk", "Semisweet", "White"],
          image: ["../images/Dark-chocolate.jpg"],
          correct: 0
        }, {
          question: "What is Hershey Sidekick (in Canada) known as in the US?",
          choices: ["Dagoba Chocolate", "Reese’s Fast Break", "Hershey’s Symphony", "Almond Joy Bar"],
          image: ["../images/reeses-fast-break.jpg"],
          correct: 1
        }, {
          question: "In Belgium, which form of chocolate is added to steamed milk to make ‘chocolat chaud’?",
          choices: ["Chocolate liquor", "Chocolate powder", "Chocolate squares", "Chocolate chips"],
          image: ["../images/Chips.jpg"],
          correct: 3
        },
        {
          question: "Which Cadbury’s brand of chocolate had the famous slogan ‘A glass and a half in every half pound’?",
          choices: ["Milk Tray", "Dairy Milk", "Eclairs", "Bournville"],
          image: ["../images/aglassandahalf.jpg"],
          correct: 1
        },
        {
          question: "Thanks to its distinct regional flavors, chocolate is often likened to what?",
          choices: ["Coffee", "Wine", "Cigars", "Whiskey"],
          image: ["../images/winechocolate.jpg"],
          correct: 1
        }
      ];

      // reset screen function
      // Is game running?
      // If 1st time through, display Start button until clicked, then remove it.
      $("#start-button").click(function () {
        $(this).hide();
        counter = setInterval(timer, 1000);
        displayTrivia();
      });

      function timer() {
        count--;
        if (count <= 0) {
          clearInterval(counter);
          return;
        }

        $("#timer").html("Time remianing: " + count + " secs");
      }

      function displayTrivia() {
        $("#question_div").html(questions[0].question);
        question++;

        var choicesArr = questions[0].choices;
        var buttonsArr = [];

        for (let i = 0; i < choicesArr.length; i++) {
          var button = $('<button>');
          button.text(choicesArr[i]);
          button.attr('data-id', i);
          $('choices_div').append(button);
        }
      }
      $('choices_div').on('click', 'button', function (e) {
          userPick = $(this).data("id");
          questions[0].correct);
        if (userPick != questions[0].correct) {
          $('#choices_div').text("Wrong Answer! The corect answer is " + questions.question.correct[i]);
          wrong++

        } else if (userPick === questions[0].validAnswer) {
          $('choices_div').text("Correct!!! The correct answer is " + questions.question.correct[i])
          correct++;
        }
      })

    // function to call questions
    // write to DOM
    // timer
    // Question
    // Answer Choices as buttons (on hover highlight answer)
    // on click, check to see if answer is right or wrong or no answer
    // also watch timer for timeout of question and go to display answer
    // display answer
    // check if correct, if yes, display Correct message, if no, check to see if time out or incorrect answer and display appropriate answer
    // display correct answer and image
    ;