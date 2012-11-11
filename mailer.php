<?php
if(isset($_POST['submit'])) {
	$to = "z@zackmayeda.com";
	$subject = "Comment on Style and Syntax";
	$name_field = $_POST['name'];
	$email_field = $_POST['email'];
	$comment = $_POST['comment'];
 
	$body = "From: $name_field\n E-Mail: $email_field\n Comment:\n $comment";
 
	//echo "Your comment has been sent.Thanks for the feedback!";
	mail($to, $subject, $body);
	header("Location: http://zackmayeda.com/lang.html");
}
?>