<?php 
include "ajaxcall.php";

$origin = $_SERVER['HTTP_ORIGIN'];
header("Access-Control-Allow-Origin: " . $origin);
$sql = "select * from formdata";
$query = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($query);

echo json_encode(array(
    $row
)
    
);

?>