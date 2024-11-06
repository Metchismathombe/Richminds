<?php
include("dbconnect.php");

if (!function_exists('strip_crlf')) {
    // Define the function only if it doesn't exist
    function strip_crlf($string)
    {
        return str_replace("\r\n", "", $string);
    }
}
if (!empty($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST['message'];

    $stmt = $conn->prepare("INSERT INTO contact_us (name, email, phone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $message);
    $stmt->execute();
    $stmt->close();

    $toEmail = 'richfieldminds@gmail.com';
    // CRLF Injection attack protection
    $name = strip_crlf($name);
    $email = strip_crlf($email);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "The email address is invalid.";
    } else {
        // Construct mail headers
        $subject = "Contact Form Submission";
        $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";
        $mailHeaders .= "Reply-To: " . $email . "\r\n";
       // $mailHeaders .= "X-Mailer: PHP/" . phpversion(); // Optional headers
        
        // Email content
        $emailContent = "Name: $name\n";
        $emailContent .= "Email: $email\n";
        $emailContent .= "Phone: $phone\n";
        $emailContent .= "Message: $message\n";

        // Send email
        if (mail($toEmail, $subject, $emailContent, $mailHeaders)) {
            $message = "Your contact information has been received successfully.";
            $type = "success";
        } else {
            $message = "Failed to send email. Please try again later.";
            $type = "error";
        }
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Contact Form</title>
	
</head>
<body>
<form id="contact-form" method="POST" action="contact.php">
 
  <div class="form-row">
    <label for="contact-form-name">Name:</label>
    <input id="contact-form-name" class="form-input" type="text" name="name" required>
  </div>

  <div class="form-row">
    <label for="contact-form-email">Email:</label>
    <input id="contact-form-email" class="form-input" type="email" name="email" required>
  </div>

  <div class="form-row">
    <label for="contact-form-phone">Phone:</label>
    <input id="contact-form-phone" class="form-input" type="tel" name="phone">
  </div>

  <div class="form-row">
    <label for="contact-form-message">Message:</label>
    <textarea id="contact-form-message" class="form-input" name="message" required></textarea>
  </div>
  
  <button type="submit">Submit</button>
</form>
</body>
</html>

