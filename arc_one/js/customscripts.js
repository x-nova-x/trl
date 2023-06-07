
$(document).ready (function()
{
  var text = ["252","283","294", "298", "305", "297", "314", "259", "276", "301", "279", "299", "267", "243", "274", "308", "303", "285", "297", "286", "275", "312", "325", "358", "320", "361", "338", "310", "337", "343"];
  var x = Math.floor((Math.random()*30));
  $('#useronline').html(text[x]);

});

$(document).ready (function()
{
  var text = ["27","28","29","30","31","32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84"];
  var x = Math.floor((Math.random()*58));
  $('#orderonline').html(text[x]);

});





$(document).ready (function()
{
  var text = ["India","Nigeria","United States", "Philippines", "Italy", "South Africa", "Brazil", "Canada", "Uganda", "Pakistan", "Thailand", "Mexico", "Netherlands", "Sri Lanka", "Czech Republic", "China", "Germany", "Ireland", "Russian Federation", "Dominican Republic", "France", "Spain", "Turkey"];
  var x = Math.floor((Math.random()*23));
  $('#country1').html(text[x]);

});


  
$(document).ready(function ()
{
  var text = ["India","Nigeria","United States", "Philippines", "Italy", "South Africa", "Brazil", "Canada", "Uganda", "Pakistan", "Thailand", "Mexico", "Netherlands", "Sri Lanka", "Czech Republic", "China", "Germany", "Ireland", "Russian Federation", "Dominican Republic", "France", "Spain", "Turkey", "Japan", "Norway"];
  var x = Math.floor((Math.random()*25));
  $('#country2').html(text[x]);

});

   
$(document).ready(function ()
{
  var text = ["India","Nigeria","United States", "Philippines", "Italy", "South Africa", "Brazil", "Canada", "Uganda", "Pakistan", "Thailand", "Mexico", "Netherlands", "Sri Lanka", "Czech Republic", "China", "Germany", "Ireland", "Russian Federation", "Dominican Republic", "France", "Spain", "Turkey", "Argentine", "Belgium", "Norway"];
  var x = Math.floor((Math.random()*26));
  $('#country3').html(text[x]);

});

     
$(document).ready(function ()
{
  var text = ["India","Nigeria","United States", "Philippines", "Italy", "South Africa", "Brazil", "Canada", "Uganda", "Pakistan", "Thailand", "Mexico", "Netherlands", "Sri Lanka", "Czech Republic", "China", "Germany", "Ireland", "Russian Federation", "Dominican Republic", "France", "Spain", "Turkey", "Colombia", "Chile"];
  var x = Math.floor((Math.random()*25));
  $('#country4').html(text[x]);

});

function DecimalGenerate1() {
    var min = 10000000
        max = 100000000
        NumberResult = Math.random() * (min - max) + max;

    $('#text1').val(parseFloat(NumberResult).toFixed( 0 ));
};

$( document ).ready(function() {
DecimalGenerate1();
});

function DecimalGenerate2() {
    var min = 10000000
        max = 100000000
        NumberResult = Math.random() * (min - max) + max;

    $('#text2').val(parseFloat(NumberResult).toFixed( 0 ));
};

$( document ).ready(function() {
DecimalGenerate2();
});

function DecimalGenerate3() {
    var min = 10000000
        max = 100000000
        NumberResult = Math.random() * (min - max) + max;

    $('#text3').val(parseFloat(NumberResult).toFixed( 0 ));
};

$( document ).ready(function() {
DecimalGenerate3();
});


function DecimalGenerate4() {
    var min = 10000000
        max = 100000000
        NumberResult = Math.random() * (min - max) + max;

    $('#text4').val(parseFloat(NumberResult).toFixed( 0 ));
};

$( document ).ready(function() {
DecimalGenerate4();
});


function Btc1() {
    var min = 0.1
        max = 4
        NumberResult = Math.random() * (min - max) + max;

    $('#btc1').val(parseFloat(NumberResult).toFixed( 1 ));
};

$( document ).ready(function() {
Btc1();
});

function Btc2() {
    var min = 0.1
        max = 4
        NumberResult = Math.random() * (max - min) + min;

    $('#btc2').val(parseFloat(NumberResult).toFixed( 1 ));
};

$( document ).ready(function() {
Btc2();
});

function Btc3() {
    var min = 0.1
        max = 4
        NumberResult = Math.random() * (min - max) + max;

    $('#btc3').val(parseFloat(NumberResult).toFixed( 1 ));
};

$( document ).ready(function() {
Btc3();
});

function Btc4() {
    var min = 0.1
        max = 4
        NumberResult = Math.random() * (min - max) + max;

    $('#btc4').val(parseFloat(NumberResult).toFixed( 1 ));
};

$( document ).ready(function() {
Btc4();
});


(function newFact() {
  var facts = ['Fact 1', 'Fact 2', 'Fact 183'];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
});



