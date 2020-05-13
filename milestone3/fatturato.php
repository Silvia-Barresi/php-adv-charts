<?php

include "data.php";

header("Content-Type: application/json");

$fatturato = $graphs ['fatturato'];
echo json_encode($fatturato);

 ?>
