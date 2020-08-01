function validateForm() {
  var x = document.forms["inputForm"]["umur"].value;
  if (x == "") {
    alert("Umur must be filled out");
    return false;
  }
  var y = document.forms["inputForm"]["umur"].value;
  if (y < 17) {
    alert("Anda Masih Dibawah Umur");
    return false;
  }
}

function insertData(){
  
  // var xhttp;
  // if (str.length == 0) { 
  //   document.getElementById("txtHint").innerHTML = "";
  //   return;
  // }
  // xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     document.getElementById("txtHint").innerHTML = this.responseText;
  //   }
  // };
  // xhttp.open("GET", "gethint.php?q="+str, true);
  // xhttp.send();   
}