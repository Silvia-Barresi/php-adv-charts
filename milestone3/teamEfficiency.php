<?php

include "data.php";

header("Content-Type: application/json");

$teamEfficiency = ['type' => $graphs['team_efficiency']['type']];

$labels = [];
$data = [];

foreach ($graphs['team_efficiency']['data'] as $team => $value) {
  $labels[] = $team;
  $data[] = $value;
}

$teamEfficiency['labels'] = $labels;
$teamEfficiency['data'] = $data;

echo json_encode($teamEfficiency);

 ?>
