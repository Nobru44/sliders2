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
	titre : 'Bel endroit 1'
	},
	{url : "images/4.jpg",
	titre : 'Bel endroit 1'
	},
	{url : "images/5.jpg",
	titre : 'Bel endroit 1'
	},
	{url : "images/6.jpg",
	titre : 'Bel endroit 1'
	},
	/*{url : "images/1.jpg",
	titre : 'Bel endroit 1'
	}*/
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
	setInterval(function() {
		displayImg(counter);
		counter++;
		if(counter === listPhotos.length) {
			counter = 0;	
		}
		}, 2000);
	$('#slider-toggle i').removeClass("fas fa-play");
	$('#slider-toggle i').addClass("fas fa-pause");
}


/*function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
}*/

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

var counter = 0;

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
		console.log(node);
		if (node.hasClass('fas fa-play') === true) {
			carroussel();
		} else if (node.hasClass('fas fa-pause') === true) {
			var move = carroussel();
			clearInterval(move);		
			$('#slider-toggle i').removeClass("fas fa-pause");
			$('#slider-toggle i').addClass("fas fa-pause");
		}	
	});