<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


session_start();

if(isset($_POST["verify_email"])){
$email=$_POST['email'];
$verification_code= $_POST['verification_code'];
include("dbconnect.php");

$sql = "UPDATE useraccess SET Verification_at= NOW() WHERE email = '" . $email . "' AND Verification_code = '" . $verification_code . "'";
$result= mysqli_query($conn, $sql);

if (mysqli_affected_rows($conn) == 0)
{
    die("Verification code failed.double check");
	
}
else{
    header("Location: login.php");
exit();}
}
?>

<html lang="en">
<head>
    <title>Authentication Page</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="otpStyle.css"/>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="style.css"/>
	
</head>
<body>
    <div class="maincontainer">
        <header>
            <i class="bx bxs-check-sheild"></i>
        </header>
        <h4>Enter OTP Code</h4>
        <form method="POST">
            <div class="inputOTP"> 
                <input type="number" name="verification_code" placeholder="Enter verification code" required style="width:150px;font-size:0.9rem;"/>
            </div>
            <input type="hidden" name="email" value="<?php echo htmlspecialchars($_GET['email'] ?? '', ENT_QUOTES); ?>" required>
            <button class="Authentication-button" type="submit" name="verify_email" style="width:150px;font-size:0.9rem;">Verify Email</button>
        </form>
    </div>
</body>
</html>

