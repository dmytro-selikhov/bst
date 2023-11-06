const questions = [
  {
    question: "What standards are used in the company?",
    answers: ["ISO 9002:2012, ISO 27001:2013", "ISO 9002:2011", "ISO 27001:2013", "ISO 9001:2015, ISO 27001:2013"],
    correct: 4,
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
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

// Змінні гри
let score = 0; // кількість вірних відповідей
let questionIndex = 0; // актуальне питання

// Функція з очистки контейнера з інформацією
clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
  headerContainer.innerHTML = '';
  listContainer.innerHTML = '';
}

// Відображаємо поточне питання
function showQuestion() {
  console.log('showQuestion()');

  // Питання
  // console.log(questions[questionIndex]['question']);

  // Створюємо шаблон питання:
  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);

  headerContainer.innerHTML = title;

  // Варіанти відповідей
  let answerNumber = 1;
  for (answerText of questions[questionIndex]['answers']) {
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
    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
};

function checkAnswer() {
  console.log('checkAnswer started');

  // Для того щоб знайти обрану кнопку у певному контейнері треба обрати контейнер та використати querySelector('input[type="radio"]:checked')
  // listContainer.querySelector('input[type="radio"]:checked')

  const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

  // Перевірка: Чи була знайдена кнопка з відповіддю, чи ні
  // Якщо відповідь не надана, то виходимо з функції.
  if (!checkedRadio) {
    submitBtn.blur();
    return;
  }

  // Змінюємо строку на число
  const userAnswer = parseInt(checkedRadio.value);

  // Якщо відповідь вірна, то збільшуємо рахунок
  // questions[questionIndex]['correct'] - вірна відповідь
  if (userAnswer === questions[questionIndex]['correct']) {
    score++;
  } else {
    score = score;
  }
  console.log('score = ', score);

  // Перевіряємо, чи останній елемент у масиві
  if (questionIndex !== questions.length - 1) {
    //  Не останнє питання у масиві
    console.log('Not last question');
    // Збільшуємо індекс на 1
    questionIndex++;
    // Чистимо сторінку від попереднього питання з відповідями
    clearPage();
    // Генеруємо нове питання з відповідями
    showQuestion();
    // Функція закінчила свою работу
    return;

  } else {
    // Останнє питання у масиві
    console.log('Last question');
    // Чистимо сторінку від останього запитання
    clearPage();
    // Показуємо результати
    showResults();

  }

};

function showResults() {
  console.log('This section result is ', score);

  const resultsTemplate = `
      <h2 class="title">%title%</h2>
      <h3 class="summary">%message%</h3>
      <p class="result">%result%</p>
  `;

  let title, message;
  // Варіанти відповідей в залежності від рахунка в секції.
  if (score === questions.length) {
    title = 'Congratulations!';
    message = 'You have passed all questions, Master Jedi!'
  } else if (score * 100 / questions.length >= 50) {
    title = 'Good result';
    message = 'You have passed more than half questions, Jedi Knight!'
  } else {
    title = 'Need to put in more effort...';
    message = 'You have passed less than half questions, May the Force be with you, Padawan!'
  }

  // Результат
  let result = `${score} of ${questions.length}`;

  // Фінальне сповіщення
  const finalMessage = resultsTemplate
    .replace('%title%', title)
    .replace('%message%', message)
    .replace('%result%', result);


  headerContainer.innerHTML = finalMessage;

  // Грати знову - поміняти на перейти до наступної секції
  submitBtn.blur();
  submitBtn.innerText = 'Go to the next section';

  // Перезавантаження стоірнки, треба поміняти на перехід до іншої секції та зберегти результат у змінну.
  // submitBtn.onclick = () => history.go();

  submitBtn.onclick = function () {
    // Scroll to the "section4" element
    const section4 = document.getElementById("section4");
    if (section4) {
      section4.scrollIntoView({ behavior: "smooth" });
    }
  };
};

