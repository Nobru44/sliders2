'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var listPhotos = [
	{url : "images/1.jpg",
		titre : 'Bel endroit 1'
	},
	{url : "images/2.jpg",
	titre : 'Bel endroit 1'
	},
	{url : "images/3.jpg",
	titre : 'Bel endroit 2'
	},
	{url : "images/4.jpg",
	titre : 'Bel endroit 3'
	},
	{url : "images/5.jpg",
	titre : 'Bel endroit 4'
	},
	{url : "images/6.jpg",
	titre : 'Bel endroit 5'
	},
];


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function displayImg (indexImage) {
	var image = listPhotos[indexImage];
	$('#slider img').attr('src', image.url);
	$('#slider figcaption').html(image.titre);
}	

function carroussel () {
	$('#slider-toggle i').removeClass("fas fa-play");
	$('#slider-toggle i').addClass("fas fa-pause");
	var mafunction = setInterval(run, 2000);
	return mafunction;
}


function run () {
		displayImg(counter);
		counter++;
		if(counter === listPhotos.length) {
			counter = 0;	
		} 
		
	}

function finish(mafunction) {
clearInterval(mafunction);
$('#slider-toggle i').removeClass("fas fa-pause");
$('#slider-toggle i').addClass("fas fa-play");
}




/*<button onclick="start()">Lancer le décompte</button>
<div id="bip" class="display"></div>

<script>
var counter = 10;
var intervalId = null;
function finish() {
 
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }	
}
function start(){
  intervalId = setInterval(bip, 1000);
}	
</script>*/

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

var counter = 0;
var intervalId = listPhotos.length;
console.log(intervalId);

$('#toolbar-toggle').on('click', function(counter){
	$('.hide').toggle();
	 if ($('#toolbar-toggle i').hasClass('fas fa-arrow-right')) {
	 	$('#toolbar-toggle i').removeClass('fas fa-arrow-right');
	 	$('#toolbar-toggle i').addClass('fas fa-arrow-down');
	 } else {
	 	$('#toolbar-toggle i').removeClass('fas fa-arrow-down');
	 	$('#toolbar-toggle i').addClass('fas fa-arrow-right');
	 };
});


$('#slider-next').on('click', function() {
	displayImg(counter);
	counter++;
	if (counter === listPhotos.length) {
		counter = 0;
	}	

});



displayImg(counter);






$('#slider-previous').on('click', function() {
	displayImg(counter);
	counter--;
	if (counter < 0) {
	counter = 5;
	}
});


$('#slider-toggle').on('click', function(){
		var node = $('#slider-toggle i');
		if (node.hasClass('fas fa-play') === true) {
			carroussel();
		} else if (node.hasClass('fas fa-pause') === true) {
			var variable = carroussel();
			console.log(variable);
			finish(variable);			
		}	
	});