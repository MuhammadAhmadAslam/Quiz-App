const htmlMCQs = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Marking Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Who is making the Web standards?",
    options: ["Mozilla", "Google", "The World Wide Web Consortium", "Microsoft"],
    answer: "The World Wide Web Consortium"
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["<heading>", "<h1>", "<h6>", "<head>"],
    answer: "<h1>"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<line>"],
    answer: "<br>"
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "<body background='yellow'>"],
    answer: "<body style='background-color:yellow;'>"
  },
  {
    question: "Choose the correct HTML element to define important text",
    options: ["<b>", "<important>", "<strong>", "<i>"],
    answer: "<strong>"
  },
  {
    question: "Choose the correct HTML element to define emphasized text",
    options: ["<italic>", "<i>", "<em>", "<strong>"],
    answer: "<em>"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: ["<a>http://www.example.com</a>", "<a href='http://www.example.com'>Example</a>", "<a url='http://www.example.com'>Example</a>", "<a name='http://www.example.com'>Example</a>"],
    answer: "<a href='http://www.example.com'>Example</a>"
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["*", "/", "<", "^"],
    answer: "/"
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    options: ["<a href='url' new>", "<a href='url' target='_blank'>", "<a href='url' target='new'>", "<a href='url' open>"],
    answer: "<a href='url' target='_blank'>"
  },
  {
    question: "Which of these elements are all <table> elements?",
    options: ["<table><head><tfoot>", "<thead><body><tr>", "<table><tr><td>", "<table><tr><tt>"],
    answer: "<table><tr><td>"
  },
  {
    question: "How can you make a numbered list?",
    options: ["<ol>", "<ul>", "<dl>", "<list>"],
    answer: "<ol>"
  },
  {
    question: "How can you make a bulleted list?",
    options: ["<ul>", "<ol>", "<dl>", "<list>"],
    answer: "<ul>"
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    options: ["<input type='check'>", "<check>", "<checkbox>", "<input type='checkbox'>"],
    answer: "<input type='checkbox'>"
  },
  {
    question: "What is the correct HTML for making a text input field?",
    options: ["<input type='textfield'>", "<input type='text'>", "<textinput type='text'>", "<textfield>"],
    answer: "<input type='text'>"
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    options: ["<input type='dropdown'>", "<select>", "<list>", "<input type='list'>"],
    answer: "<select>"
  },
  {
    question: "What is the correct HTML for making a text area?",
    options: ["<input type='textarea'>", "<textarea>", "<textinput type='textarea'>", "<textfield>"],
    answer: "<textarea>"
  },
  {
    question: "What is the correct HTML for inserting an image?",
    options: ["<img src='image.gif' alt='MyImage'>", "<img href='image.gif' alt='MyImage'>", "<image src='image.gif' alt='MyImage'>", "<img alt='MyImage'>image.gif</img>"],
    answer: "<img src='image.gif' alt='MyImage'>"
  },
  {
    question: "What is the correct HTML for inserting a background image?",
    options: ["<background img='background.gif'>", "<body bg='background.gif'>", "<body style='background-image:url(background.gif)'>", "<background url='background.gif'>"],
    answer: "<body style='background-image:url(background.gif)'>"
  },
  {
    question: "An <iframe> is used to display a web page within a web page.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "HTML comments start with <!-- and end with -->",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Block elements are normally displayed without starting a new line.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Inline elements are normally displayed without starting a new line.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    answer: "style"
  },
  {
    question: "Which HTML attribute is used to define CSS styles?",
    options: ["class", "styles", "style", "font"],
    answer: "class"
  },
  {
    question: "Which is the correct CSS syntax?",
    options: ["{body;color:black;}", "body:color=black;", "{body:color=black;}", "body {color: black;}"],
    answer: "body {color: black;}"
  },
  {
    question: "How do you display hyperlinks without an underline?",
    options: ["a {text-decoration:none;}", "a {decoration:no-underline;}", "a {underline:none;}", "a {text-decoration:no-underline;}"],
    answer: "a {text-decoration:none;}"
  },
  {
    question: "Which property is used to change the background color?",
    options: ["bgcolor", "color", "background-color", "bg-color"],
    answer: "background-color"
  },
  {
    question: "Which property is used to change the text color of an element?",
    options: ["fgcolor", "text-color", "color", "font-color"],
    answer: "color"
  },
  {
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<foot>"],
    answer: "<footer>"
  }
];

let currentQuestionIndex = 0;
let radioButtons = document.getElementsByName('quiz');

let shuffled = htmlMCQs
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
var index = 1
function loadQuestion() {
  if (currentQuestionIndex < shuffled.length) {
    let question = shuffled[currentQuestionIndex];
    document.getElementById('questionHeading').innerText = `${index}) ${question.question}`;
    document.getElementById('l1').innerText = `${question.options[0]}`;
    document.getElementById('l2').innerText = question.options[1];
    document.getElementById('l3').innerText = question.options[2];
    document.getElementById('l4').innerText = question.options[3];


    for (let i = 0; i < radioButtons.length; i++) {

      radioButtons[i].value = question.options[i];
      radioButtons[i].checked = false;
    }


  } else {
    printAfter()
  }
}
var nextBtn = document.getElementById('nextBtn')


var score = 0;
function validateRadios() {
  var checkedButton = null;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedButton = radioButtons[i].value;
      nextBtn = nextBtn.disabled = false
      index++
      question = shuffled[currentQuestionIndex];
      if (checkedButton == question.answer) {
        console.log(true)
        score++
        localStorage.setItem('Score' , score)
        currentQuestionIndex++
        console.log(score)
      } else {
        console.log(false);
        currentQuestionIndex++
        console.log('This is else checked button', checkedButton);
        console.log('this is else question.answer', question.answer)
      }
      break
    }
  }
}

document.getElementById('nextBtn').addEventListener('click', function () {
  validateRadios();
  loadQuestion();
});

window.onload = loadQuestion;


document.addEventListener('keydown', function (event) {
  if (event.keyCode === 116) {
    event.preventDefault();
  }
});

let timeRemaining = 60 * 60; // 60 minutes in seconds
let countdownInterval = setInterval(() => {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  document.getElementById("countdown").innerText = `${minutes} : ${seconds}`;
  timeRemaining--;
  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    printAfter()
  }
}, 1000); // 1 second in milliseconds


function printAfter() {
  if (score > 17) {
    
  var quizDiv =  document.getElementById("quizDiv")
  quizDiv.innerHTML = 
    `<div class='QuizBox'>
    <h1>Your Result</h1>
    <h6>Quiz Finished! Your Score : ${(score/htmlMCQs.length)*100}</h6>
    <h6>Wrong Answers : ${htmlMCQs.length-score}</h6>
    <img src='Images/passed.png' alt='img' id='img'>
    </div>`;
  }else{
    document.getElementById("quizDiv").innerHTML = 
    `<div class='QuizBox'>
    <h1 class='h'>Your Result</h1>
    <h6 class='h1'>Quiz Finished! Your Score : ${(score/htmlMCQs.length)*100}</h6>
    <h6 class='h1'>Wrong Answers : ${htmlMCQs.length-score}</h6>
    <img src='Images/fail.png' alt='img' id='img'>
    </div>`
    quizDiv.setAttribute('class' , 'QuizBox')
  }
}