const questionsThree = [
  {
    question: "Strong Password is:?",
    answers: ["My pet name", "qwerty", "My birthday", "none of above"],
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
const headerContainerThree = document.querySelector('#headerThree');
const listContainerThree = document.querySelector('#listThree');
const submitBtnThree = document.querySelector('#submitThree');

// Змінні гри
let scoreThree = 0; // кількість вірних відповідей
let questionIndexThree = 0; // актуальне питання

// Функція з очистки контейнера з інформацією
clearPageThree();
showQuestionThree();
submitBtnThree.onclick = checkAnswerThree;

function clearPageThree() {
  headerContainerThree.innerHTML = '';
  listContainerThree.innerHTML = '';
}

// Відображаємо поточне питання
function showQuestionThree() {
  console.log('showQuestionThree()');

  // Питання
  // console.log(questionsThree[questionIndexThree]['question']);

  // Створюємо шаблон питання:
  const headerTemplateThree = `<h2 class="title">%title%</h2>`;
  const titleThree = headerTemplateThree.replace('%title%', questionsThree[questionIndexThree]['question']);

  headerContainerThree.innerHTML = titleThree;

  // Варіанти відповідей
  let answerNumber = 1;
  for (answerText of questionsThree[questionIndexThree]['answers']) {
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
    listContainerThree.innerHTML += answerHTML;
    answerNumber++;
  }
};

function checkAnswerThree() {
  console.log('checkAnswerThree started');

  // Для того щоб знайти обрану кнопку у певному контейнері треба обрати контейнер та використати querySelector('input[type="radio"]:checked')
  // listContainerThree.querySelector('input[type="radio"]:checked')

  const checkedRadio = listContainerThree.querySelector('input[type="radio"]:checked');

  // Перевірка: Чи була знайдена кнопка з відповіддю, чи ні
  // Якщо відповідь не надана, то виходимо з функції.
  if (!checkedRadio) {
    submitBtnThree.blur();
    return;
  }

  // Змінюємо строку на число
  const userAnswer = parseInt(checkedRadio.value);

  // Якщо відповідь вірна, то збільшуємо рахунок
  // questionsThree[questionIndexThree]['correct'] - вірна відповідь
  if (userAnswer === questionsThree[questionIndexThree]['correct']) {
    scoreThree++;
  } else {
    scoreThree = scoreThree;
  }
  console.log('score = ', scoreThree);

  // Перевіряємо, чи останній елемент у масиві
  if (questionIndexThree !== questionsThree.length - 1) {
    //  Не останнє питання у масиві
    console.log('Not last question');
    // Збільшуємо індекс на 1
    questionIndexThree++;
    // Чистимо сторінку від попереднього питання з відповідями
    clearPageThree();
    // Генеруємо нове питання з відповідями
    showQuestionThree();
    // Функція закінчила свою работу
    return;

  } else {
    // Останнє питання у масиві
    console.log('Last question');
    // Чистимо сторінку від останього запитання
    clearPageThree();
    // Показуємо результати
    showResults();

  }

};

function showResults() {
  console.log('This section result is ', scoreThree);

  const resultsTemplate = `
      <h2 class="title">%title%</h2>
      <h3 class="summary">%message%</h3>
      <p class="result">%result%</p>
  `;

  let title, message;
  // Варіанти відповідей в залежності від рахунка в секції.
  if (scoreThree === questionsThree.length) {
    title = 'Congratulations!';
    message = 'You have passed all questions, Master Jedi!'
  } else if (scoreThree * 100 / questionsThree.length >= 50) {
    title = 'Good result';
    message = 'You have passed more than half questions, Jedi Knight!'
  } else {
    title = 'Need to put in more effort...';
    message = 'You have passed less than half questions, May the Force be with you, Padawan!'
  }

  // Результат
  let result = `${scoreThree} of ${questionsThree.length}`;

  // Фінальне сповіщення
  const finalMessage = resultsTemplate
    .replace('%title%', title)
    .replace('%message%', message)
    .replace('%result%', result);


  headerContainerThree.innerHTML = finalMessage;

  // Грати знову - поміняти на перейти до наступної секції
  submitBtnThree.blur();
  submitBtnThree.innerText = 'Go to the next section';

  // Перезавантаження стоірнки, треба поміняти на перехід до іншої секції та зберегти результат у змінну.
  // submitBtnThree.onclick = () => history.go();

  submitBtnThree.onclick = function () {
    // Scroll to the "section6" element
    const section8 = document.getElementById("section8");
    if (section8) {
      section8.scrollIntoView({ behavior: "smooth" });
    }
  };


};
