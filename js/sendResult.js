// const totalResultScore = document.getElementById('formResult');
// totalResultScore.addEventListener('submit, formSend');

// async function formSend(e) {
//   e.preventDefault();

//   // Создаем проверку всех квизов
//   let error = formValidate(form);

// }

// function formValidate(form) {
//   let error = 0;
// }



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
