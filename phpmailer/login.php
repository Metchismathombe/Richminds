
<?php
session_start();
include("dbconnect.php");
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql= "SELECT * FROM useraccess WHERE username='".$username."'";
    $result= mysqli_query($conn, $sql);

    if (!$result || mysqli_num_rows($result) == 0){
        header("Location: login.php?error=Email not Found");
        exit();
    }

    $user=mysqli_fetch_object($result);
    if (!password_verify($password,$user->password)){

        header("Location: login.php?error=Password is incorrect");
        exit();
    }

	
    if ($user->Verification_at==null){
        header("location: login.php?error=Please verify your email");
        exit();
    }
	

    $conn->close();
	
	header("Location: /E - Hub/Home");
    exit();
	
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
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
		h6{color : red;
		}
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form action="login.php" method="POST">
            <label for="username">Username:<h6>* PLEASE REMAIN ANONYMOUS</h6></label>
		  <input type="text" id="username" name="username" placeholder="e.g anonymous" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <input type="submit" value="Login" name="login">
        </form>
        <p>Don't have an account? <a href="RegistrationForm.php">Create one</a>.</p>
    </div>
</body>
</html>