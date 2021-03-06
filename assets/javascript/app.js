$(document).ready(function () {

  // define variables including timers
  var qTimer = 30;
  var triviaQA = "";
  var pauseTimer = 0;
  var qNumber = 0;
  var userPick = null;
  var correctAns = 0;
  var totalCorrect = 0;
  var totalWrong = 0;
  var totalUnAns = 0;
  var gameRunning = false;
  var qImage = null;


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

  // var qCount = (triviaQs.length);
  // var startGame;

  // if Start is clicked, start the game, Hide the button and go Ask the questions
  $("#start").click(function () {
    $("#start").hide();
    // $(".result").remove();
    // $("div").html("");
    // startGame = new $(window).startGame();
    askQuestion();
    timer();
  });



  function askQuestion() {

    // Display trivia question
    if (qNumber < triviaQs.length) {
      $("#timer").html("<h4>Time remaining: " + "00:" + qTimer + "secs</h4>");
      $(".question").html(triviaQs[qNumber].question);
      // console.log(triviaQs[qNumber].question);

      // Display possible answers as buttons using same format as #start button

      var choicesArr = triviaQs[qNumber].choices;
      var buttonsArr = [];

      // console.log(choicesArr);
      // console.log(qNumber);

      for (var i = 0; i < choicesArr.length; i++) {
        // var choice1 = choicesArr[i];
        var button = $("<button>");
        button.text(choicesArr[i]);
        console.log(button);
        button.attr("button-id", i);
        console.log(i);
        $(".choices-div").append(button);
        console.log(button);
      }

      window.triviaCounter = setInterval(qTimer, 1000);
      $(".choices-div").on("click", 'button', function (e) {
        var userPick = $(this).data("id");
        var correctAns = triviaQs[qNumber].correct;
        if (userPick !== correctAns) {
          $(".choices-div").text("Wrong answer! The correct answer was: " + triviaQs[correctAns].choices);
          totalWrong++;
        } else {
          $(".choices-div").text("Correct!!! The correct answer was: " + triviaQs[correctAns].choices);
          totalCorect++;
        }
        nextQ();
      });

    } else {
      // end of questions, provide totals and offer to restart the game
    }

    // $(document).ready(function () {
    //   $("<button>").click(function () {
    //     $(this).hide();
    // $(document.body).on("click", button, function () {

    // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
    // console.log(button);
    // var userPick = $(this).attr("choices_div");
    // console.log("This is the User's choice: " + userPick)

    // Select and Remove the specific <p> element that previously held the to do item number.
    // $("#item-" + toDoNumber).remove();
  }
  //   })
  // }

  function timer() {
    qTimer--;
    if (qTimer <= 0) {
      setTimeout(function () {
        nextQ();
      });
    } else {
      $("#timer").html("<h4>Time remaining: " + "00:" + qTimer + "secs</h4>");
    }
  };

  function nextQ() {
    qNumber++
    clearInterval(window.triviaCounter);
    qTimer = 30;
    $('#timer').html("");
    setTimeout(function () {
      cleanUp();
      askQuestion();
    }, 1000)
  };

  function cleanUp() {
    console.log("What needs to be cleaned?");
  }
  // button.attr(".data-id", );
  // $("#choicediv").append(button);
  // console.log(".data-id");

  // window.triviaCounter = setInterval(qTimer, 1000);
  // Start timer
  // Add Else for end of game to show totals
});



//Listen for click on answer or check to see if timer is 0. If timer 0 then go to display answer

// check answer to see if it is correct and display appropriate message, correct answer and image (Add timer), add to counter, when timer is 0, go to Next Question

// end game function