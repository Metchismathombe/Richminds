<?php
$dbhost="localhost";
$dbuser="root";
$dbpass="";
$dbname="mentalhealth";

$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
if(!$conn)
{
    die("failed to connect");
}    
?>
