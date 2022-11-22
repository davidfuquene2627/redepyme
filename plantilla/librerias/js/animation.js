$(document).ready(function(){
    var contador = 0;
$(".label-nosotros-banner1 , .label-nosotros-banner2").hide();
setInterval(function(){

   animar_letras();
    
    
    
    }, 1500);

function animar_letras(){
var tiempo = 9;


setTimeout(function(){

    if(contador == 0){
        $(".label-nosotros-banner1").show();
        
        
    }
    if(contador == 2){
        $(".label-nosotros-banner2").show();
    }

    if(contador == 4){
        $(".label-nosotros-banner2").hide();
        $(".label-nosotros-banner1").text("Somos una Corporación que acompaña a la...");
        
    }
    if(contador == 6){
        $(".label-nosotros-banner2").text("Gente");
        $(".label-nosotros-banner2").show();
    }

    if(contador == 8){
        $(".label-nosotros-banner2").hide();
        $(".label-nosotros-banner1").text("Trabajamos por el progreso y el bienestar Socioeconomico del...");
    }
    if(contador == 10){
        $(".label-nosotros-banner2").text("Campesino");
        $(".label-nosotros-banner2").show();

    }
    
    if(contador == 12){
        var codigo = '<span style="color:  #ebc404; display: inline; ">R</span><span style="color:  #ebc404; display: inline; ">E</span><span style="color:  #ebc404; display: inline; ">D</span><span style="color:  #ebc404 ">E</span>        <span style="color:   #047cbb ">P</span><span style="color:   #047cbb ">Y</span><span style="color:   #c3141c  ">M</span> <span style="color:   #c3141c  ">E</span>';
        $(".label-nosotros-banner2").hide();
        $(".label-nosotros-banner1").text("Corporación Internacional");
        $(".label-nosotros-banner2").text("");
        
        setTimeout(function(){

            $(".label-nosotros-banner2").html(codigo);
            $(".label-nosotros-banner2").show();

   

    
    
    
    
    
        }, 2000);


contador = -1;
    }

    contador = contador + 1;

   

    
    
    
    
    
    }, 1500);
}















});