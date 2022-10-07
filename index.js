  var num1 = 0;
  var operation = '';
  function one(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "1";
        }else{
          document.getElementById('num').innerHTML = '' + num + 1;
        }
  }
  function two(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "2";
        }else{
          document.getElementById('num').innerHTML = '' + num + 2;
        }
  }
  function three(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "3";
        }else{
          document.getElementById('num').innerHTML = '' + num + 3;
        }
  }
  function four(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "4";
        }else{
          document.getElementById('num').innerHTML = '' + num + 4;
        }
  }
  function five(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "5";
        }else{
          document.getElementById('num').innerHTML = '' + num + 5;
        }
  }
  function six(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "6";
        }else{
          document.getElementById('num').innerHTML = '' + num + 6;
        }
  }
  function seven(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "7";
        }else{
          document.getElementById('num').innerHTML = '' + num + 7;
        }
  }
  function eight(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "8";
        }else{
          document.getElementById('num').innerHTML = '' + num + 8;
        }
  }
  function nine(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "9";
        }else{
          document.getElementById('num').innerHTML = '' + num + 9;
        }
  }
  function zero(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {
          document.getElementById('num').innerHTML = "0";
        }else{
          document.getElementById('num').innerHTML = '' + num + 0;
        }
  }
  function back(){
    var num = document.getElementById('num').innerHTML;
   if (document.getElementById('num').innerHTML == "0") {    
        }else{
          document.getElementById('num').innerHTML = Math.floor(num/10);
        }
  }
  function multiply(){
    num1 = document.getElementById('num').innerHTML;
    operation = '*';
    document.getElementById('num').innerHTML = "0";
  }
  function add(){
    num1 = document.getElementById('num').innerHTML;
    operation = '+';
    document.getElementById('num').innerHTML = "0";
  }
  function subtract(){
    num1 = document.getElementById('num').innerHTML;
    operation = '-';
    document.getElementById('num').innerHTML = "0";
  }
  function divide(){
    num1 = document.getElementById('num').innerHTML;
    operation = '/';
    document.getElementById('num').innerHTML = "0";
  }
  function equal(){
    num2 = document.getElementById('num').innerHTML;
    if (operation == "*") {
      document.getElementById('num').innerHTML = parseFloat(num1) * parseFloat(num2);
    }else if (operation == "+") {
      document.getElementById('num').innerHTML = parseFloat(num1) + parseFloat(num2);
    }else if (operation == "-") {
      document.getElementById('num').innerHTML = parseFloat(num1) - parseFloat(num2);
    }else if (operation == "/") {
      document.getElementById('num').innerHTML = parseFloat(num1) / parseFloat(num2);
    }
  }
