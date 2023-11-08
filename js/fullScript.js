$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    adaptiveHeight: false,
    easing: 'liner',
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.sliderTwo').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    adaptiveHeight: false,
    easing: 'liner',
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.sliderThree').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    adaptiveHeight: false,
    easing: 'liner',
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.sliderFour').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 800,
    adaptiveHeight: false,
    easing: 'liner',
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});



// Input form and email verification
const userInput = document.getElementById("userInputEmail");

const formBtn = document.getElementById("formBtn");

// Initialize a variable to store the email address
let userEmail = "";

let totalScore = 0;
console.log(userInput);


// Add an event listener to the submit button
formBtn.addEventListener("click", function (e) {
  // Prevent the default form submission behavior(page reload)
  e.preventDefault();
  // Get the value from the input field
  userEmail = userInput.value;
  console.log(userEmail);
  // Log the email address to the console
  console.log("Entered email address: " + userEmail);

  // Check if the entered email matches the desired domain
  const techMagicDomain = "@techmagic.co";
  if (userEmail.endsWith(techMagicDomain)) {
    // Email is valid, log it to the console
    console.log("Entered email address: " + userEmail);
    // Clear the input field
    userInput.value = "";
  } else {
    // Clear the input field
    userInput.value = "";
    // Email is not valid, display an error message
    console.log("Invalid email address. Please use an email from techmagic.co");
    alert("Invalid email address. Please use an email from techmagic.co");
  }
});




// Code for first quiz //

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

  // Here, you should add the following line to accumulate the score in totalScore
  totalScore += score;

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






// Code for second Quiz //

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

  // Here, you should add the following line to accumulate the score in totalScore
  totalScore += score;

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


// Code for Thrid Quiz // 

const questionsThree = [
  {
    question: "Which of the following is an example of a strong password?",
    answers: ["Passw0rd", "13Jun1990", "$ayN02#ackers", "MyPetName"],
    correct: 3,
  },
  {
    question: "Who are the targets of modern-day hackers?",
    answers: [
      "Banks and finance companies that process a lot of payments",
      "Any organization or individual is liable to be the victim of hackers",
      "Companies that hold a lot of proprietary information",
      "Companies that hold the credit card numbers of customers",
    ],
    correct: 2,
  },
  {
    question: "It is OK to use the same password for all your online accounts as long as you keep it secret",
    answers: [
      "False",
      "True",
    ],
    correct: 1,
  },
  {
    question: "To which source should you refer when installing additional software on the workstation: ",
    answers: ["Personal recommendations from your colleague", "Google Play app chart", "None of them, you can install the software without any limitations", "List of Standard Software and Blacklisted software"],
    correct: 4,
  },
  {
    question: "What would you do if the downloaded file disappeared?",
    answers: ["Download it again", "Go to another site", "Scan computer for viruses", "Make coffee and relax"],
    correct: 3,
  },
  {
    question: "Your email account has been compromised. What is the best way of preventing further unauthorized access to your email?",
    answers: ["Change the password and enable multi-factor authentication", "Change the password, then run an anti-virus scan", "Change the login password to your computer", "Update email application software to the latest version"],
    correct: 1,
  },
  {
    question: "What is the BEST way to validate a legitimate email vs. a phishing email?",
    answers: ["Bad spelling, poor syntax, and grammar are some of the tell-tale signs of a fake email", "Look at the email headers to see where it really came from", "Look for poorly replicated logos", "Contact the sender on some other medium besides email to verify whether they sent you the email"],
    correct: 4,
  },
  {
    question: "On which categories are data owned by TechMagic classified?",
    answers: ["Confidential, Public, Internal", "Public, Internal, Top secret", "Confidential, Public, Commercial secret", "Internal, Confidential, Top secret"],
    correct: 1,
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

  // Here, you should add the following line to accumulate the score in totalScore
  totalScore += score;

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
    showResultsThree();

  }

};

function showResultsThree() {
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


// Code for Fourth Quiz //

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

  // Here, you should add the following line to accumulate the score in totalScore
  totalScore += score;

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
    const userEmailResult = document.getElementById("userEmailResult");
    const userFinalScore = document.getElementById("userFinalScore");

    userEmailResult.value = userEmail;
    userFinalScore.value = totalScore;

    console.log(`user email is ${userInput} and user score is ${totalScore}`);
    totalScore = 0;
  };

};
