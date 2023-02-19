const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".questionContainer");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const playAgain = document.querySelector(".playAgain");

let qIndex = 0;
let correctAns = 0;
let wrongAns = 0;
let total = 0;

let selectedAnswer;

const reset = () => {
  qIndex = 0;
  correctAns = 0;
  wrongAns = 0;
  total = 0;
  showQuestion(qIndex);
};

playAgain.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  reset();
});
const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";
  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctAns}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongAns}`;
  resultScreen.querySelector(".score").textContent = `Total: ${
    (correctAns - wrongAns) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (items, index) =>
        ` <div class="answers">
    <input name="answer" type="radio" id=${index} value=${items.isCorrect} />
    <label for=${index}>${items.answer}</label>
  </div>`
    )
    .join(" ");
  selectAnswer();
};

const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAns = () => {
  submit.addEventListener("click", (ev) => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctAns++ : wrongAns++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Select an answer!");
    }
  });
};

showQuestion(qIndex);

submitAns();

console.log(data[0].answers.map((items, index) => items));
