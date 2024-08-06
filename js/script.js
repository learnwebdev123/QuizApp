// Sample questions. DONT touch this data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Stylesheets",
      "Cascading Styling Styles",
      "Cascading Sheets for Stylings",
      "Cascaded Stylesheets",
    ],
    correct: 0,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
  {
    text: "Javascript is a single threaded programming language",
    options: ["True", "False"],
    correct: 0,
  },
  {
    text: "API calls in Javascript can be done using the following method",
    options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.text;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("li");
    optionElement.innerHTML = `
      <input type="radio" name="option" id="option${index}" value="${index}">
      <label for="option${index}">${option}</label>
    `;
    optionsContainer.appendChild(optionElement);
  });
  submitButton.style.display = "inline-block";
  nextButton.style.display = "inline-block";
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const answer = parseInt(selectedOption.value);
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    if (answer === correctAnswerIndex) {
      score++;
      const correctOption = document.getElementById(
        `option${correctAnswerIndex}`
      );
      correctOption.parentElement.style.backgroundColor = "lightgreen";
    } else {
      const correctOption = document.getElementById(
        `option${correctAnswerIndex}`
      );
      correctOption.parentElement.style.backgroundColor = "lightgreen";
    }
    submitButton.style.display = "none";
    nextButton.style.display = "inline-block";
  } else {
    alert("Please select an option!");
  }
}

submitButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert(`Quiz completed! Your score is ${score} out of ${questions.length}.`);
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
  }
});

// Load the first question on startup
loadQuestion();
