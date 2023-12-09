<?php
include("config.php");

$comtam = $_POST['comtam'];
$comga = $_POST['comga'];
$phobo = $_POST['phobo'];
$bunbohue = $_POST['bunbohue'];
$banhmi = $_POST['banhmi'];
$goicuon = $_POST['goicuon'];


$sql = "update gia set comtam = $comtam, comga = $comga, phobo = $phobo, bunbohue = $bunbohue,
banhmi = $banhmi, goicuon = $goicuon";
mysqli_query($conn,$sql);
mysqli_close($conn);

?>
