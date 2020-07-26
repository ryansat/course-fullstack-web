<?php
  $link = mysqli_connect('localhost','root','root') or die('Cannot Connect To mysql');
  mysqli_select_db($link, 'latihan') or die('Cannot Connect to db');
?>