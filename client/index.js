'use strict';

$(document).ready(init);
  function init(){
}

var inputKeys = [];

$(document).keypress(getKeyInput);

function getKeyInput(event){
  console.log('key in put ', event.which);
  var k = event.which;
  k = String.fromCharCode(k);

  if(k==="+"){
    addKeyNumbers();
  } else if (k === '*'){
    multKeyNumbers();
  }
  inputKeys.push(k);

  inputKeyVals();
}

function inputKeyVals(){
  //alert('inputkeyvales');
  $('#display').text('Numbers:');
  inputKeys.forEach(function(n){
    n = n*1;
    $('#display').append('<br/>'+n);
  });
}

function addKeyNumbers(){
  var tot=0;
  inputKeys.reduce(function(a,b){
    return tot = parseInt(a) + parseInt(b);
  });
  $('#total').append('<br />'+tot);
}

function multKeyNumbers(){
  var tot=0;
  inputKeys.reduce(function(a,b){
    return tot = parseInt(a) * parseInt(b);
  });
  $('#total').append('<br />'+tot);
}

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
