<?php

include "data.php";

header("Content-Type: application/json");

$fatturatoAgent = ['type' => $graphs['fatturato_by_agent']['type']];

$labels = [];
$data = [];

foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {
  $labels[] = $name;
  $data[] = $value;
}

$fatturatoAgent['labels'] = $labels;
$fatturatoAgent['data'] = $data;

echo json_encode($fatturatoAgent);

 ?>
