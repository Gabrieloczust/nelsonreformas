<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$nome     = $_POST['nome'];
$email    = $_POST['email'];
$tel      = $_POST['tel'];
$mensagem = $_POST['msg'];
$back     = $_SERVER['HTTP_REFERER'];

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp1.example.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'Nelson Reformas';                     // SMTP username
    $mail->Password   = '';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('contato@nelsonreformas.com.br', 'Site');
    $mail->addAddress('nelsonoczust1975@gmail.com', 'Site');     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "$nome enviou uma mensagem";
    $mail->Body    = "
        <b>Email:</b> $email <br>
        <b>Telefone:</b> $telefone <br>
        <b>Mensagem:</b> $mensagem
    ";
    $mail->AltBody = $mensagem;

    $mail->send();
    header("Location: $back?mail=success");
} catch (Exception $e) {
    header("Location: $back?mail=error");
    //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
