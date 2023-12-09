<?php
include("config.php");

$stt = $_POST['stt'];

$sql = "update muaban set danauxong = 1 where stt = $stt";

mysqli_query($conn,$sql);
mysqli_close($conn);
?>
