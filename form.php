<html>
    <head>
        <title>Form</title>
    </head>
    <style>
        body{
            background: skyblue;
        }
        h1{
            text-align:center;
            margin-top:40vh;
        }
    </style>
    <body>
        <?php
            $name=$email=$message="";
            if($_SERVER["REQUEST_METHOD"]=="POST")
            {
                $name=test_input($_POST["name"]);
                $email=test_input($_POST["mail"]);
                $message=test_input($_POST["message"]);
            }
            function test_input($data){
                $data=trim($data);
                $data=stripslashes($data);
                $data=htmlspecialchars($data);
                return $data;
            }

            use PHPMailer\PHPMailer\PHPMailer;
            use PHPMailer\PHPMailer\SMTP;
            use PHPMailer\PHPMailer\Exception;

            require "PHPMailer/PHPMailer.php";
            require "PHPMailer/SMTP.php";
            require "PHPMailer/Exception.php";

            $mail = new PHPMailer(true);

            try {
                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com';
                $mail->SMTPAuth   = true;
                $mail->Username   = '';       //  SENDERS MAIL
                $mail->Password   = '';   //  SENDERS PASSWORD
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port       = 587;

                $mail->setFrom('');       //  SENDERS MAIL
                $mail->addAddress('');  //  RECEIVERS MAIL
                // $mail->addReplyTo($email);      //  PARTICIPANT'S MAIL TO REPLY DIRECTLY

                $mail->isHTML(true);
                $mail->Subject = 'Esummit Form';
                $mail->Body    = "<ul><li>Name = $name</li>";
                $mail->Body .= "<li>E-Mail = $email</li>";
                $mail->Body .= "<li>Message :</li><ul>$message</ul></ul>";

                $mail->send();
                header('Location:index.html');
            } 
            catch (Exception $e) {
                echo "<h1>Message could not be sent....<br>Please check internet connection</h1>";
            }
        ?>
    </body>
</html>