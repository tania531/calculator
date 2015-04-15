'use strict';


$(document).ready(init);

function init(){
  $('#enterNumber').click(inputNumbers);
//  $('#enterNumber').keypress(inputNumbers);
  $('#getNumbers').keypress(function(){
    //alert('keys');
  });
}

var input;
var nums = [];

function inputNumbers(){
  input = $('#getNumbers').val();
  if(input === '+'){
    addNumbers();
  } else if (input === '*'){
    multNumbers();
  }
  nums.push(input);
  $('#display').text('Numbers:');
  nums.forEach(function(n){
    $('#display').append('<br/>'+n);
  });
}

function addNumbers(){
  var tot=0;
  nums.reduce(function(a,b){
    return tot = parseInt(a) + parseInt(b);
  });
  $('#total').append('<br />'+tot);
}

function multNumbers(){
  var tot=0;
  nums.reduce(function(a,b){
    return tot = parseInt(a) * parseInt(b);
  });
  $('#total').append('<br />'+tot);
}
