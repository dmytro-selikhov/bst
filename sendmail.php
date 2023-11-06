<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// Set the email addresses to send to
$recipients = ['dmytro.selikhov@techmagic.co', 'admin@techmagic.co', 'dmytro.selikhov@gmail.com'];

// От кого письмо
$mail->setFrom('admin@selikhov.dev', 'selikhov.dev');
// Кому отправить (using a loop to add all recipients)
foreach ($recipients as $recipient) {
    $mail->addAddress($recipient);
}

// Тема письма
$mail->Subject = 'Letter from website!';

// Total score
$totalScore = 42; // Replace with your actual total score value

// Тело письма
$body = '<h2>Вам пришло сообщение с selikhov.dev</h2>';
$body .= '<p><strong>Total Score:</strong> ' . $totalScore . '</p>';

// You can add more content to the email body here

$mail->Body = $body;

// Send the email
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
