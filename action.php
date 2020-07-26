<?php

  $nama = $_POST["nama"];
  $umur = $_POST["umur"];

  require($_SERVER['DOCUMENT_ROOT']. '/latihan/connections/connect.php');
  $query = "insert into biodata (nama,umur) values ('".$nama."',".$umur.")";
  $result = mysqli_query($link,$query);
  if ($result === TRUE){
    echo "Success";
  }else{
    echo "Error Query ".$query;
  }
?>