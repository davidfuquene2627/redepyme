$(document).ready(function(){

var total_banners = 0;
var contador = -1;


play();

function play (){
$(".img-banner").each(function(){
total_banners = total_banners + 1;


});

iniciar_slider()
};

function iniciar_slider(){

setInterval(function(){

$(".img-banner").each(function(index){



	if(index == contador ){
		var ruta = $(this).attr("src");

$("#foco-slider").attr("src",ruta);

		$(this).attr("src",ruta);

	}

});

contador = contador + 1;


if(contador == total_banners){

	contador = -1;

}




}, 3000);

};

});