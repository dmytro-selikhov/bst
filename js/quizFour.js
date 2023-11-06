const questionsFour = [
  {
    question: "1password is",
    answers: ["a password manager developed by AgileBits Inc", "companies access control application", "digital password safety place", "i'm not sure what is it"],
    correct: 1,
  },
  {
    question: "What platforms does 1password support?",
    answers: [
      "Linux only.",
      "iOS and Android only.",
      "Windows, MacOS, Linux, iOS, Android.",
      "Windows only.",
    ],
    correct: 3,
  },
  {
    question: "1password supports two-factor authentication:",
    answers: [
      "true",
      "false",
    ],
    correct: 1,
  },
  {
    question: "1password has a browser extension:",
    answers: [
      "false",
      "true",
    ],
    correct: 2,
  },
  {
    question: "What information can be stored in 1password?",
    answers: [
      "Logins and passwords",
      "Credit card information",
      "Bank account information.",
      "All of above.",
    ],
    correct: 4,
  },
  {
    question: "Information security is the responsibility of:",
    answers: [
      "IT Team",
      "Security Guard",
      "Everyone in the company",
      "Management Team",
    ],
    correct: 3,
  },
  {
    question: "Why is it important to have a good understanding of information security policies and procedures? ",
    answers: [
      "Helps to protect individuals from being victims of cybercriminals",
      "Helps to protect the TechMagic information and business reputation",
      "Helps to understand levels of responsibility",
      "All of the above",
    ],
    correct: 4,
  },
];

// Шукаємо елементи 
const headerContainerFour = document.querySelector('#headerFour');
const listContainerFour = document.querySelector('#listFour');
const submitBtnFour = document.querySelector('#submitFour');

// Змінні гри
let scoreFour = 0; // кількість вірних відповідей
let questionIndexFour = 0; // актуальне питання

// Функція з очистки контейнера з інформацією
clearPageFour();
showQuestionFour();
submitBtnFour.onclick = checkAnswerFour;

function clearPageFour() {
  headerContainerFour.innerHTML = '';
  listContainerFour.innerHTML = '';
}

// Відображаємо поточне питання
function showQuestionFour() {
  console.log('showQuestionFour()');

  // Питання
  // console.log(questionsFour[questionIndexFour]['question']);

  // Створюємо шаблон питання:
  const headerTemplateFour = `<h2 class="title">%title%</h2>`;
  const titleFour = headerTemplateFour.replace('%title%', questionsFour[questionIndexFour]['question']);

  headerContainerFour.innerHTML = titleFour;

  // Варіанти відповідей
  let answerNumber = 1;
  for (answerText of questionsFour[questionIndexFour]['answers']) {
    // Створюємо шаблон відповідей
    const questionTemplate =
      `<li>
          <label>
            <input value="%number%" type="radio" class="answer" name="answer" />
            <span>%answer%</span>
          </label>
        </li>
      `;

    // console.log(answerHTML);
    // Виводимо номер та зміст відповіді

    const answerHTML = questionTemplate
      .replace('%answer%', answerText)
      .replace('%number%', answerNumber);

    // Додаємо всі варіанти відповідей до структури HTML
    listContainerFour.innerHTML += answerHTML;
    answerNumber++;
  }
};

function checkAnswerFour() {
  console.log('checkAnswerFour started');

  // Для того щоб знайти обрану кнопку у певному контейнері треба обрати контейнер та використати querySelector('input[type="radio"]:checked')
  // listContainerFour.querySelector('input[type="radio"]:checked')

  const checkedRadio = listContainerFour.querySelector('input[type="radio"]:checked');

  // Перевірка: Чи була знайдена кнопка з відповіддю, чи ні
  // Якщо відповідь не надана, то виходимо з функції.
  if (!checkedRadio) {
    submitBtnFour.blur();
    return;
  }

  // Змінюємо строку на число
  const userAnswer = parseInt(checkedRadio.value);

  // Якщо відповідь вірна, то збільшуємо рахунок
  // questionsFour[questionIndexFour]['correct'] - вірна відповідь
  if (userAnswer === questionsFour[questionIndexFour]['correct']) {
    scoreFour++;
  } else {
    scoreFour = scoreFour;
  }
  console.log('score = ', scoreFour);

  // Перевіряємо, чи останній елемент у масиві
  if (questionIndexFour !== questionsFour.length - 1) {
    //  Не останнє питання у масиві
    console.log('Not last question');
    // Збільшуємо індекс на 1
    questionIndexFour++;
    // Чистимо сторінку від попереднього питання з відповідями
    clearPageFour();
    // Генеруємо нове питання з відповідями
    showQuestionFour();
    // Функція закінчила свою работу
    return;

  } else {
    // Останнє питання у масиві
    console.log('Last question');
    // Чистимо сторінку від останього запитання
    clearPageFour();
    // Показуємо результати
    showResultsFour();

  }

};

function showResultsFour() {
  console.log('This section result is ', scoreFour);

  const resultsTemplate = `
      <h2 class="title">%title%</h2>
      <h3 class="summary">%message%</h3>
      <p class="result">%result%</p>
  `;

  let title, message;
  // Варіанти відповідей в залежності від рахунка в секції.
  if (scoreFour === questionsFour.length) {
    title = 'Congratulations!';
    message = 'You have passed all questions, Master Jedi!'
  } else if (scoreFour * 100 / questionsFour.length >= 50) {
    title = 'Good result';
    message = 'You have passed more than half questions, Jedi Knight!'
  } else {
    title = 'Need to put in more effort...';
    message = 'You have passed less than half questions, May the Force be with you, Padawan!'
  }

  // Результат
  let result = `${scoreFour} of ${questionsFour.length}`;

  // Фінальне сповіщення
  const finalMessage = resultsTemplate
    .replace('%title%', title)
    .replace('%message%', message)
    .replace('%result%', result);


  headerContainerFour.innerHTML = finalMessage;

  // Грати знову - поміняти на перейти до наступної секції
  submitBtnFour.blur();
  submitBtnFour.innerText = 'Go to the next section';

  // Перезавантаження стоірнки, треба поміняти на перехід до іншої секції та зберегти результат у змінну.
  // submitBtnFour.onclick = () => history.go();

  submitBtnFour.onclick = function () {
    // Scroll to the "section9" element
    const section9 = document.getElementById("section9");
    if (section9) {
      section9.scrollIntoView({ behavior: "smooth" });
    }
  };


};
