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

var arrHead = new Array();
arrHead = ['','Nama','Umur'];
function addRow(){
  // var myTable = document.getElementById('biotable');
  // var rowCount = myTable.rows.length;
  // var tr = myTable.insertRow(rowCount);
  // tr = myTable.insertRow(rowCount);

  for (var c = 0; c < arrHead.length; c++){
    // var td = document.createElement('td');
    // td = tr.insertCell(c);
    var nama = document.getElementById('namaValue').value;
    var umur = document.getElementById('umurValue').value;
   
    if (c == 2){
      insertToDb(nama,umur);
      showData();
    }
  }
}

function removeRow(oButton){
  var myTable =  document.getElementById('biotable');
  var row = oButton.parentNode.parentNode;
  //var cell = oButton.parentNode;;
  var name = row.getElementsByTagName("input")[0].value;
  myTable.deleteRow(oButton.parentNode.parentNode.rowIndex);
  removeFromDb(name);
}

function insertToDb(name,age){
  var ajx = new XMLHttpRequest();
  var data = "nama="+name+"&umur="+age;
  ajx.onreadystatechange = function(){
    if (ajx.status == 200){
      console.log(data);
    }
  }
  ajx.open("POST","action.php",true)
  ajx.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  ajx.send(data);
}

function removeFromDb(name,age){
  var ajx = new XMLHttpRequest();
  var nama = document.getElementById('namaValue').value;
  var umur = document.getElementById('umurValue').value;
  var data = "nama="+name+"&umur="+age;
  ajx.onreadystatechange = function(){
    if (ajx.status == 200){
      console.log(data);
    }
  }
  ajx.open("POST","delete.php",true)
  ajx.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  ajx.send(data);
}

function showData(){
  var ajx = new XMLHttpRequest();
  ajx.onreadystatechange = function(){
    if (ajx.status == 200){
      document.getElementById('data').innerHTML = this.responseText;
    }
  }
  ajx.open("GET","getdata.php",true)
  ajx.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  ajx.send();
}