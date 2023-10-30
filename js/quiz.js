const questions = [
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что означает CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
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
  submitBtn.onclick = () => history.go();

};
