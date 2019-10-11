<?php
$recepient = "info@gmail.com"; //заменить на свой почтовый ящик
$sitename = "Родные земли";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$message = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $mail \nСообщение: $message";
$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
