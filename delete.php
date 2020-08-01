<?php

  $nama = $_POST["nama"];
  $umur = $_POST["umur"];

  require($_SERVER['DOCUMENT_ROOT']. '/latihan/connections/connect.php');
  $query = "delete from biodata where nama = '".$nama."'";
  $result = mysqli_query($link,$query);
  if ($result === TRUE){
    echo "Success";
  }else{
    echo "Error Query ".$query;
  }
?>