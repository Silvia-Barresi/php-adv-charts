<?php

header("Content-Type: application/json");
include "data.php";


function fatturatoByAgent($graphs){
  $fatturatoAgent = [
    'type' => $graphs['fatturato_by_agent']['type']
  ];

    $labels = [];
    $data = [];

    foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {
      $labels[] = $name;
      $data[] = $value;
    }

    $fatturatoAgent['labels'] = $labels;
    $fatturatoAgent['data'] = $data;

    return $fatturatoAgent;
}

  $level = $_GET['level'] ?? 'guest';
  $data = [
    'fatturato' => $graphs['fatturato']
  ];

  if ($level === 'employee'|| $level === 'clevel'){
    $data ['fatturato_by_agent'] = fatturatoByAgent($graphs);
  }

  if ($level === 'clevel'){
    $data['team_efficiency'] = $graphs['team_efficiency'];
  }

echo json_encode($data);

 ?>
