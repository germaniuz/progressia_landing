<?php

if (isset($_POST['phone']) || isset($_POST['email'])){

	$message ='<h2>Заявка с сайта «Разработка Паспорта Безопасности»</h2>';
	
	if(isset($_POST['name'])){
		$message .= '<p>Имя: <b>'.$_POST['name'].'</b></p>';
	}
	
	if(isset($_POST['phone'])){
		$message .= '<p>Телефон: <b>'.$_POST['phone'].'</b></p>';
	}	

	if(isset($_POST['email'])){
		$message .= '<p>E-mail: <b>'.$_POST['email'].'</b></p>';
	}
	
	include "class.phpmailer.php";

	$mail = new PHPMailer();
	$mail->From = $_POST['email'] ? $_POST['email'] : "noreply@".$_SERVER['HTTP_HOST'];
	$mail->FromName = $_REQUEST['name'] ? $_REQUEST['name'] : '-не указано-';
	$mail->AddAddress('germanius@list.ru');
	$mail->IsHTML(true);
	$mail->Subject = "Заявка с сайта Разработка Паспорта Безопасности";
	$mail->Body = $message;	
	
	if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
	echo  "Заявка успешно отправлена. Наши менеджеры свяжутся с Вами в ближайшее время";
	
} ?>