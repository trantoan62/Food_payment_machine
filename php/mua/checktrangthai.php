<?php
header('Content-Type: application/json');
include("config.php");

$sql = "select * from trangthai;";
$result = mysqli_query($conn,$sql);

$data = array();


foreach ($result as $row){
    $data[]=$row;
}
mysqli_close($conn);

echo json_encode($data);
?>
