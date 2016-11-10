<?php
	
header('Content-Type: text/html; charset=UTF-8');	
	
if(trim($_POST['firstName']) == '') {
	$hasError = true;
}	else {
	$fname = trim($_POST['firstName']);
}

if(trim($_POST['lastName']) == '') {
	$hasError = true;
}	else {
	$lname = trim($_POST['lastName']);
}

if(trim($_POST['mail']) == '') {
	$hasError = true;
}	else if(!preg_match("/[0-9a-z_\.\-]+@[0-9a-z_\.\-]+\.[a-z]{2,4}/i",
		trim($_POST['mail']))) {
	$hasError = true;
	} else {
	$email = trim($_POST['mail']);
}

if(trim($_POST['phone']) == '') {
	$hasError = true;
}	else {
	$phone = trim($_POST['phone']);
}


if(trim($_POST['message']) == '') {
	$hasError = true;
}	else {
	if(function_exists('stripslashes')) {
	$comments = stripslashes(trim($_POST['message']));
	} else {
	$comments = trim($_POST['message']);
}
}

if(!isset($hasError)) {
	$emailTo = 'info@berfect.de';
		
	 $body = "Name: $fname $lname \n\nEmail: $email
 	 \n\nComments:\n $comments";
	$headers = 'From: My Site <'.$emailTo.'>' .
	"\r\n" . 'Reply-To: ' . $email;
	mail($emailTo, $subject, $body, $headers);
	$emailSent = true;	
}

if(isset($hasError)) {
	echo"<script type=\"text/javascript\">";
	echo "window.alert(\"Bitte, füllen Sie die Felder korrekt aus!\")";
	echo "</script>";
	echo "Bitte, füllen Sie alle Felder mit korrekten Daten aus.";
}

if($emailSent == true) {
	echo "<script type=\"text/javascript\">";
	echo "window.alert(\"Die Nachricht ist erfolgreich versendet worden!\")";
	echo "</script>";
	
	echo "<p><strong>Die Nachricht ist erfolgreich versendet worden!</strong></p>";
	echo "Danke für die Nutzung der Kontaktform. Ihre Nachricht ist erfolgreich versendet!<br><br>";
	echo "Wir werden uns umgehend bei Ihnen melden.</p>";
}

	echo "<a href = \"index.html\">Fubuizz</a>";
	
	echo "<script type=\"text/javascript\">";
	echo "window.location = \"index.html\"";
	echo "<\script>";
	
	
?>