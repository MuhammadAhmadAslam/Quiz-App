let qustionPara = document.getElementById('question')
let l1 = document.getElementById('l1')
let l2= document.getElementById('l2')
let l3= document.getElementById('l3')
let l4= document.getElementById('l4')

let radio1  = document.getElementById('radio1')
let radio2 = document.getElementById('radio2')
let radio3 = document.getElementById('radio3')
let radio4 = document.getElementById('radio4')

const htmlQuiz = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperText Machine Language", "HyperText Meta Language", "None of the above"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define a paragraph?",
      options: ["<p>", "<div>", "<span>", "<b>"],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the <head> element in HTML?",
      options: ["To define the body of the HTML document", "To define the head of the HTML document", "To link to an external stylesheet", "To define a JavaScript function"],
      correctAnswer: 1
    },
    {
      question: "Which HTML attribute is used to specify the source of an image?",
      options: ["src", "alt", "title", "href"],
      correctAnswer: 0
    },
    {
      question: "What is the difference between the <strong> and <b> elements?",
      options: ["<strong> is used for emphasis, while <b> is used for bold text", "<strong> is used for bold text, while <b> is used for emphasis", "There is no difference between the two", "One is used for headings, while the other is used for paragraphs"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define a hyperlink?",
      options: ["<a>", "<link>", "<img>", "<button>"],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the <title> element in HTML?",
      options: ["To define the title of the HTML document", "To define the body of the HTML document", "To link to an external stylesheet", "To define a JavaScript function"],
      correctAnswer: 0
    },
    {
      question: "Which HTML attribute is used to specify the alternative text for an image?",
      options: ["alt", "src", "title", "href"],
      correctAnswer: 0
    },
    {
      question: "What is the difference between the <i> and <em> elements?",
      options: ["<i> is used for italic text, while <em> is used for emphasis", "<i> is used for emphasis, while <em> is used for italic text", "There is no difference between the two", "One is used for headings, while the other is used for paragraphs"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define a list item?",
      options: ["<li>", "<ul>", "<ol>", "<dl>"],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the <body> element in HTML?",
      options: ["To define the head of the HTML document", "To define the body of the HTML document", "To link to an external stylesheet", "To define a JavaScript function"],
      correctAnswer: 1
    },
    {
      question: "Which HTML attribute is used to specify the width of an image?",
      options: ["width", "height", "src", "alt"],
      correctAnswer: 0
    },
    {
      question: "What is the difference between the <table> and <tr> elements?",
      options: ["<table> is used to define a table, while <tr> is used to define a table row", "<table> is used to define a table row, while <tr> is used to define a table", "There is no difference between the two", "One is used for headings, while the other is used for paragraphs"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define a form?",
      options: ["<form>", "<input>", "<textarea>", "<select>"],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the <label> element in HTML?",
      options: ["To define a form label", "To define a form input", "To define a form textarea", "To define a form select"],
      correctAnswer: 0
    },
    {
      question: "Which HTML attribute is used to specify the type of an input field?",
      options: ["type", "name", "value", "placeholder"],
      correctAnswer: 0
    },
]

function generateUniqueRandomNumbers() {
    let numbersGenerated = [];
    
    // Generate numbers until we have generated 1 through 10
    while (numbersGenerated.length < 10) {
      let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
      
      if (!numbersGenerated.includes(randomNumber)) {
        numbersGenerated.push(randomNumber);
      }
    }
    
    // Check if all numbers 1 through 10 are generated
    let allNumbersGenerated = numbersGenerated.length === 10;
    
    console.log(numbersGenerated);
    console.log(allNumbersGenerated);
  }
  
  // Example usage:
 
