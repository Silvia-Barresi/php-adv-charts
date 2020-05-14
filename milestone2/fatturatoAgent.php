<?php

include "data.php";

header("Content-Type: application/json");

$fatturatoAgent = ['type' => $graphs['fatturato_by_agent']['type']];
$access = $graphs['fatturato_by_agent']['access'];
$labels = [];
$data = [];

foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {
  $labels[] = $name;
  $data[] = $value;
}

$fatturatoAgent['labels'] = $labels;
$fatturatoAgent['data'] = $data;
$fatturatoAgent['access'] = $access;
echo json_encode($fatturatoAgent);

 ?>
