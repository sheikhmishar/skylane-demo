<?php

if (!isset($_POST) or !isset($_POST["name"]) or !isset($_POST["email"]) or !isset($_POST["message"])) {
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    return;
}

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
//$to = "info@skylaneeducation.com";
$to = "rafiuzzaman15-9655@diu.edu.bd";

$message = "
<h4><strong>Name:</strong> $name</h4>
<p><strong>Message:</strong> $message</p>
";
$message = wordwrap($message, 70, "\r\n");

$headers = "From: <$email>\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

if (mail($to, $subject, $message, $headers))
    header('Location: ' . $_SERVER['HTTP_REFERER']);
else
    header('Location: /');