<?php 
include "ajaxcall.php";
$origin = $_SERVER['HTTP_ORIGIN'];
header("Access-Control-Allow-Origin: " . $origin);
if($_SERVER['REQUEST_METHOD'] == "POST") {
        // print_r($_GET);
            $name = $_POST["name"];
            $email = $_POST["email"];
            $mobile = $_POST["mobile"];

$queryex = "INSERT INTO formdata (`name`,`email`,`mobile`) VALUES('$name','$email',$mobile)";
$sql = mysqli_query($conn,$queryex);
echo mysqli_connect_error($conn);
if(mysqli_affected_rows($conn) == 1) {
    echo json_encode(array(
        'message' => 'success'
    ));
}
else{
    echo json_encode(array(
        'message' => 'failure'
    )); 
}
}
?> 