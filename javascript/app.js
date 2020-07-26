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