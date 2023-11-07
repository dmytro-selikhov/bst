
document.addEventListener('DOMContentLoaded', function () {
  const totalResultScore = document.getElementById('formResult');
  totalResultScore.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    // Создаем проверку всех квизов
    let error = formValidate(form);

  }

  function formValidate(form) {
    let error = 0;

    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      input.classList.remove('_error');

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if {(input.value === '')
          formAddError(input);
        error++;
      }
    }

  }
}

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  // Email check

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);

  }


});















/*
Some test
// Define the totalScore value you want to send
let totalScore = 42; // Replace with your actual total score value

// Create a data object to send to the PHP file
const data = { totalScore: totalScore };

// Send the data to the PHP file using fetch
fetch('sendmail.php', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data.message); // Output the response from the sendmail.php file
  })
  .catch(error => {
    console.error('Error:', error);
  });


  */