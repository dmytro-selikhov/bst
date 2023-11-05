const questionsFour = [
  {
    question: "1password is",
    answers: ["1 password", "companies control app", "digital password safety place", "i'm not sure what is it"],
    correct: 3,
  },
  {
    question: "ISO 9001:2015 is: ",
    answers: [
      "an international security standard that lays out best practices for how organizations should manage their data",
      "a set of practices and requirements that can help organizations of all sizes improve their quality management and create a quality management system (QMS)",
      "none of above",
      "all of above",
    ],
    correct: 2,
  },
  {
    question: "ISO 27001:2013 is: ",
    answers: [
      "an international security standard that lays out best practices for how organizations should manage their data",
      "a set of practices and requirements that can help organizations of all sizes improve their quality management and create a quality management system (QMS)",
      "none of above",
      "all of above",
    ],
    correct: 1,
  },
  {
    question: "What product does the company use to administer its IT infrastructure?",
    answers: ["PCControl", "ManageEngine", "Jamf", "None of above"],
    correct: 2,
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
    showResults();

  }

};

function showResults() {
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
