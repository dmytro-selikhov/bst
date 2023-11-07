<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the form
    $email = $_POST['email'];
    $score = $_POST['score'];

    // Define the recipients
    $recipients = array(
        'dmytro.selikhov@gmail.com',
        'dmytro.selikhov@techmagic.co',
        'admin@techmagic.co',
        $email  // Send a copy to the user's provided email
    );

    // Email subject and message
    $subject = 'Score Information';
    $date = date('Y-m-d H:i:s'); // Current date and time
    $message = "This user '$email' has score '$score' on $date";

    // Send the email to all recipients
    foreach ($recipients as $recipient) {
        mail($recipient, $subject, $message);
    }

    // Redirect or display a success message
    echo "Email sent successfully!";
}
?>