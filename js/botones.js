
    var boton = document.getElementById("boton1");
    boton.onclick = function(e) {
      if($("#tab-one").hasClass("active")){
        $("#tab-two").addClass("active").siblings().removeClass("active");    
        $("#tab-two-content-box").addClass("active").siblings().removeClass("active");
      }
      else{
      if($("#tab-two").hasClass("active")){
        $("#tab-three").addClass("active").siblings().removeClass("active");    
        $("#tab-three-content-box").addClass("active").siblings().removeClass("active");
        document.getElementById('boton1').style.display = 'none';
      }        
      }
    }