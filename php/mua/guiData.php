<?php
include("config.php");

$date = Date('Y:m:d H:i:s');
$malayhang = $_POST['malayhang'];
$sotien = $_POST['sotien'];
$comtam = $_POST['comtam'];
$comga = $_POST['comga'];
$phobo = $_POST['phobo'];
$bunbohue = $_POST['bunbohue'];
$banhmi = $_POST['banhmi'];
$goicuon = $_POST['goicuon'];


$sql = "insert into muaban(danauxong, dalayhang, malayhang, sotien, comtam, comga, phobo,
bunbohue, banhmi, goicuon, ngaymua) value (0, 0, $malayhang, $sotien,
$comtam, $comga, $phobo, $bunbohue, $banhmi, $goicuon,'$date');";
mysqli_query($conn,$sql);
mysqli_close($conn);
?>
