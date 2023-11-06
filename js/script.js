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


const userInput = document.getElementById("userInput");
const formBtn = document.getElementById("formBtn");

// Initialize a variable to store the email address
let userEmail = "";

// Add an event listener to the submit button
formBtn.addEventListener("click", function (e) {
  // Prevent the default form submission behavior(page reload)
  e.preventDefault();
  // Get the value from the input field
  userEmail = userInput.value;

  // Check if the entered email matches the desired domain
  const techMagicDomain = "@techmagic.co";
  if (userEmail.endsWith(techMagicDomain)) {
    // Email is valid, log it to the console
    console.log("Entered email address: " + userEmail);
    // Clear the input field
    emailInput.value = "";
  } else {
    // Clear the input field
    emailInput.value = "";
    // Email is not valid, display an error message
    console.log("Invalid email address. Please use an email from techmagic.co");
    alert("Invalid email address. Please use an email from techmagic.co");
  }


  // Log the email address to the console
  console.log("Entered email address: " + userEmail);
});