<?php

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['tel'];
$msg = $_POST['msg'];

$body = "
    Nome: $nome <br>
    Email: $email <br>
    Telefone: $telefone <br>
    Mensagem: $msg 
";

$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
$headers .= "From: $email\r\n"; // remetente
$headers .= "Return-Path: $email\r\n"; // return-path
$envio = mail("devoczust@gmail.com", "Contato pelo Site", $body, $headers);

$status = $envio ? true : false;

header("Location: index.php?email=$status");
exit;
