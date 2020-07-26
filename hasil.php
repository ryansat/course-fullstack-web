<?php
  require($_SERVER['DOCUMENT_ROOT']. '/latihan/connections/connect.php');
  $sql = "select * from biodata";
  $result = mysqli_query($link,$sql);

  echo "<html>
  <head>
  <style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  </style>
  </head>
  <body>
  
  <h2>HTML Table</h2>";

  echo "<table>";
  echo "<tr>";
  echo "<th> Nama </th>";
  echo "<th> Umur </th>";
  echo "</tr>";

  if (mysqli_num_rows($result) > 0 ){
    while($row = mysqli_fetch_assoc($result)){
      echo "<tr>";
      echo "<td>".$row["nama"]."</td>"."<td>".$row["umur"]."</td>";
      echo "</tr>";
    }
  }


  echo "</table>";

  echo "</body>
  </html>";
?>