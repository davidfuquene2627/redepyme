$(document).ready(function(){

$("#btn-wasap").click(function(){

	$(".formulario-wasap").toggle();

if ($('.formulario-wasap').is(':hidden'))
{
	  $(".logo").css("position","absolute");
	
}
  
else
{
 $(".logo").css("position","relative");	 
}

	

});


$("#btn-cerrar-wasap").click(function(){
$("#btn-wasap").click();
});


$("#basic-url").keyup(function(){

	var nombre = $(this).val();
	var contacto = "573177440082";

if($(this).val().length > 0){

var url = "https://api.whatsapp.com/send?phone="+contacto+"&text=!!!Hola buenos dias Redepyme, %20 soy "+nombre+" Por favor requiero informacion de parte de ustedes!!!";

$("#enlace-wasap").attr("href",url);
	$("#enlace-wasap").css("display","block");

} else{
$("#enlace-wasap").css("display","none");	
}

});

});