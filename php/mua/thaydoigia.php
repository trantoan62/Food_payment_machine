<?php
header('Content-Type: application/json');
$server = "localhost";
$user = "trantoan62";
$pass = "chianheo0";

$database = "databasequanan";
$conn = mysqli_connect($server,$user,$pass,$database);

$sql = "select * from gia";
$result = mysqli_query($conn,$sql);

$data = array();


foreach ($result as $row){
    $data[]=$row;
}
mysqli_close($conn);

echo json_encode($data);
?>
