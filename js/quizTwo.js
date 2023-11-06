const questionsTwo = [
  {
    question: "When should you lock your workstation screen?",
    answers: ["When the employee left for lunch.", "When an employee works in a public place.", "Any time the workstation is left unattended.", "You never need to lock your workstation screen."],
    correct: 3,
  },
  {
    question: "You should use your corporate workstation and corporate accounts for ",
    answers: [
      "personal usage.",
      "performing work duties.",
      "none of above.",
      "all of above.",
    ],
    correct: 2,
  },
  {
    question: "When you use personal devices you need: ",
    answers: [
      "Let it be as it is.",
      "Install antivirus software.",
      "Install updates for programs that are constantly used.",
      "Enforce security configurations on your personal and mobile devices (password protection, anti-malware system, regular OS update).",
    ],
    correct: 4,
  },
  {
    question: "All users are responsible for updating software installed on their workstations according to the latest corrections and additions",
    answers: ["False", "True"],
    correct: 2,
  },
  {
    question: "What software is prohibited in the company?",
    answers: [
      "Torrents and software from the aggressor country are prohibited.",
      "I can use any software.",
      "Computer games are prohibited.",
      "Unlicensed software may be used.",
    ],
    correct: 1,
  },
  {
    question: "You can safely download files from:",
    answers: [
      "Torrent site",
      "The link received from a friend",
      "Official website",
      "Browser pop-up",
    ],
    correct: 3,
  },
];

// Шукаємо елементи 
const headerContainerTwo = document.querySelector('#headerTwo');
const listContainerTwo = document.querySelector('#listTwo');
const submitBtnTwo = document.querySelector('#submitTwo');

// Змінні гри
let scoreTwo = 0; // кількість вірних відповідей
let questionIndexTwo = 0; // актуальне питання

// Функція з очистки контейнера з інформацією
clearPageTwo();
showQuestionTwo();
submitBtnTwo.onclick = checkAnswerTwo;

function clearPageTwo() {
  headerContainerTwo.innerHTML = '';
  listContainerTwo.innerHTML = '';
}

// Відображаємо поточне питання
function showQuestionTwo() {
  console.log('showQuestionTwo()');

  // Питання
  // console.log(questionsTwo[questionIndexTwo]['question']);

  // Створюємо шаблон питання:
  const headerTemplateTwo = `<h2 class="title">%title%</h2>`;
  const titleTwo = headerTemplateTwo.replace('%title%', questionsTwo[questionIndexTwo]['question']);

  headerContainerTwo.innerHTML = titleTwo;

  // Варіанти відповідей
  let answerNumber = 1;
  for (answerText of questionsTwo[questionIndexTwo]['answers']) {
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
    listContainerTwo.innerHTML += answerHTML;
    answerNumber++;
  }
};

function checkAnswerTwo() {
  console.log('checkAnswerTwo started');

  // Для того щоб знайти обрану кнопку у певному контейнері треба обрати контейнер та використати querySelector('input[type="radio"]:checked')
  // listContainerTwo.querySelector('input[type="radio"]:checked')

  const checkedRadio = listContainerTwo.querySelector('input[type="radio"]:checked');

  // Перевірка: Чи була знайдена кнопка з відповіддю, чи ні
  // Якщо відповідь не надана, то виходимо з функції.
  if (!checkedRadio) {
    submitBtnTwo.blur();
    return;
  }

  // Змінюємо строку на число
  const userAnswer = parseInt(checkedRadio.value);

  // Якщо відповідь вірна, то збільшуємо рахунок
  // questionsTwo[questionIndexTwo]['correct'] - вірна відповідь
  if (userAnswer === questionsTwo[questionIndexTwo]['correct']) {
    scoreTwo++;
  } else {
    scoreTwo = scoreTwo;
  }
  console.log('score = ', scoreTwo);

  // Перевіряємо, чи останній елемент у масиві
  if (questionIndexTwo !== questionsTwo.length - 1) {
    //  Не останнє питання у масиві
    console.log('Not last question');
    // Збільшуємо індекс на 1
    questionIndexTwo++;
    // Чистимо сторінку від попереднього питання з відповідями
    clearPageTwo();
    // Генеруємо нове питання з відповідями
    showQuestionTwo();
    // Функція закінчила свою работу
    return;

  } else {
    // Останнє питання у масиві
    console.log('Last question');
    // Чистимо сторінку від останього запитанняscoreTwo
    clearPageTwo();
    // Показуємо результати
    showResultsTwo();

  }

};

function showResultsTwo() {
  console.log('This section result is ',);

  const resultsTemplate = `
      <h2 class="title">%title%</h2>
      <h3 class="summary">%message%</h3>
      <p class="result">%result%</p>
  `;

  let title, message;
  // Варіанти відповідей в залежності від рахунка в секції.
  if (scoreTwo === questionsTwo.length) {
    title = 'Congratulations!';
    message = 'You have passed all questions, Master Jedi!'
  } else if (scoreTwo * 100 / questionsTwo.length >= 50) {
    title = 'Good result';
    message = 'You have passed more than half questions, Jedi Knight!'
  } else {
    title = 'Need to put in more effort...';
    message = 'You have passed less than half questions, May the Force be with you, Padawan!'
  }

  // Результат
  let result = `${scoreTwo} of ${questionsTwo.length}`;

  // Фінальне сповіщення
  const finalMessage = resultsTemplate
    .replace('%title%', title)
    .replace('%message%', message)
    .replace('%result%', result);


  headerContainerTwo.innerHTML = finalMessage;

  // Грати знову - поміняти на перейти до наступної секції
  submitBtnTwo.blur();
  submitBtnTwo.innerText = 'Go to the next section';

  // Перезавантаження стоірнки, треба поміняти на перехід до іншої секції та зберегти результат у змінну.
  // submitBtnTwo.onclick = () => history.go();

  submitBtnTwo.onclick = function () {
    // Scroll to the "section6" element
    const section6 = document.getElementById("section6");
    if (section6) {
      section6.scrollIntoView({ behavior: "smooth" });
    }
  };


};
