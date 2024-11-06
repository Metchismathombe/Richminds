<?php

session_start();
// Include database connection file
include("dbconnect.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoloader
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Function to generate random verification code
/*function generateVerificationCode($length = 6) {
    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
}*/

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['reg'])) {
    $name = $_POST['name'];
    $surname = $_POST['sname'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['cpassword'];
    // $verificationCode=generateVerificationCode();
    $verification_code = substr(number_format(time() * rand(), 0, '', ''), 0, 6);
    // Check if password and confirm password match
    if ($password !== $confirm_password) {
        echo '<script>alert("Passwords do not match")</script>';
        exit(); // Stop further execution
    }

    // Hash the password
    $hash = password_hash($password, PASSWORD_DEFAULT);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match('/^[0-9]+@my\.richfield\.ac\.za$/', $email)) {
        echo '<script>alert("Invalid email format. Use Richfield Email Address format, e.g., 3333@my.richfield.ac.za")</script>';
        $errors[] = "Invalid email format. Use Richfield Email Address format, e.g., 3333@my.richfield.ac.za";
        exit(); // Stop further execution
    }

    // Check if username already exists
    $duplicatevar = mysqli_query($conn, "SELECT * FROM useraccess WHERE username='$username'");
    if (mysqli_num_rows($duplicatevar) > 0) {
        echo '<script>alert("Username already exists")</script>';
        exit(); // Stop further execution
    }

    // Prepare and bind the SQL statement
    // Prepare and bind the SQL statement
    $query = "INSERT INTO useraccess (name, Surname, username, email, password, Verification_Code) VALUES (?, ?, ?, ?, ?, ?)";
    $statement = mysqli_prepare($conn, $query);

    // Check if preparing the statement was successful
    if (!$statement) {
        die("Error preparing statement: " . mysqli_error($conn));
    }

    // Bind parameters to the prepared statement
    mysqli_stmt_bind_param($statement, "ssssss", $name, $surname, $username, $email, $hash, $verification_code);

    // Execute the prepared statement
    mysqli_stmt_execute($statement);

    // Check if execution was successful
    if (mysqli_stmt_affected_rows($statement) > 0) {
        echo '<script>alert("Record inserted successfully")</script>';
    } else {
        echo "Error: " . mysqli_stmt_error($statement);
    }

    // Close the statement
    mysqli_stmt_close($statement);

    echo '<script>alert("Success")</script>';

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set up PHPMailer
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'richfieldminds@gmail.com'; // SMTP username
        $mail->Password = 'jponnovvzzelvqnb';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        //Recipients
        $mail->setFrom('richfieldminds@gmail.com', 'RichMinds');
        $mail->addAddress($email, $name);

        // Content
        $mail->isHTML(true);
        //  $verification_code = substr(number_format(time() * rand(), 0, '', ''), 0, 6);
        $mail->Subject = 'Email Verification';
        $mail->Body = 'Your verification code is: ' . $verification_code;

        $mail->Body = 'Your verification code is: ' . $verification_code;
        // Send email
        $mail->send();
        echo '<script>alert("Verification email sent!")</script>';
        // Redirect the user to the verification page with the email value as a query parameter
        header("Location: verification.php?email=" . urlencode($email));
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Page</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #80B541;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }

        input[type="text"],
        input[type="password"],
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Create Account</h2>
        <form action="RegistrationForm.php" method="POST">
            <!-- name input -->
            <label for="namefield">Name:</label></br>
            <input type="text" id="namefield" name="name" required></br>
            <!--surname input -->

            <label for="snamefield">Surname:</label></br>
            <input type="text" id="snamefield" name="sname" required></br>
            <!-- email input -->
            <label for="email">Email:</label></br>
            <input type="text" id="email" name="email" placeholder="Enter Email" required></br>
            <!-- username input -->
            <label for="newUsername">Username:</label></br>
            <input type="text" id="newUsername" name="username" required></br>
            <!-- password-->
            <label for="newPassword">Password:</label></br>
            <input type="password" id="newPassword" name="password" required></br>
            <!--Confirm  -->
            <label for="CPassword">Password:</label></br>
            <input type="password" id="CPassword" name="cpassword" required></br>

            <input type="checkbox" name="agree">
            <lable> <a href="T&C/Ts&Cs.html" >Agree to Terms of Service: </a></lable>

            <span class="error"> </span>
            <br><br>
            <!-- submit btn -->
            <input type="submit" value="Register" name="reg">

            <label>Already have an account?</label>
            <a href="login.html">Login</a>
        </form>
    </div>
</body>

</html>