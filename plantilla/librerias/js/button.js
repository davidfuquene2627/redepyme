$(document).ready(function(){

   
$("#btn-contactate").mouseover(function(){
$(this).css("background","#c3141c");
$(this).css("color","white");
});
$("#btn-contactate").mouseout(function(){
$(this).css("background","#242c5c");
$(this).css("color","white");
});


$("#btn-nosotros").mouseover(function(){
    $(this).css("background","#2ea3f2");
    $(this).css("color","white");
    $(this).css("opacity","0.8");
    $(this).css("border","solid 3px #242c5c");
    });


    $("#btn-nosotros").mouseout(function(){
    $(this).css("background","#242c5c");
    $(this).css("color","white");
    $(this).css("opacity","1");
    $(this).css("border","solid 3px #2ea3f2");
    });


    $(".wrapper").mouseover(function(){
        $(".fs-2").css("font-weight","500");
        $(".fs-2").css("color","#242c5c");
        $(this).prev().prev().prev().css("color","#c3141c");
        
        $(this).prev().prev().prev().css("-webkit-text-stroke"," 1.5px #242c5c");
        $(this).prev().prev().prev().css("text-decoration","none");
       
        

    });

    $(".wrapper").mouseout(function(){
        $(".fs-2").css("-webkit-text-stroke"," 0px #242c5c");
        $(".fs-2").css("font-weight","500");
        $(".fs-2").css("color","#242c5c");
        $(".fs-2").css("text-decoration","none");
        
       
        

    });


   

  



    
});