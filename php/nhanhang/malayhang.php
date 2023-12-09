<?php
include("config.php");

$malayhang = $_POST['malayhang'];

$sql = "select * from muaban where (malayhang = $malayhang and danauxong= 1 and dalayhang= 0)";
$result = mysqli_query($conn,$sql);

if (mysqli_num_rows($result) > 0){
    $row = mysqli_fetch_assoc($result);
    $stt = $row['stt'];
    $sql2 = "update muaban set dalayhang = 1 where malayhang = $malayhang";
    mysqli_query($conn,$sql2);
    echo "Xin quý khách nhận hàng #$stt!";
}
else {
    echo "Mã lấy hàng không khả dụng";
}
mysqli_close($conn);

?>
