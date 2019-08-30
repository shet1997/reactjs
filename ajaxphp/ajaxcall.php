<?php 
    $server = 'localhost';
    $username = 'prajwala';
    $password = 'root';
    $database = 'ajaxdata';

    $conn = mysqli_connect($server,$username,$password,$database);

    if(!$conn) {
        die("connection failed".mysqli_connect_error());
    }
    else {
        // echo "connected successfully";
    }
 ?>