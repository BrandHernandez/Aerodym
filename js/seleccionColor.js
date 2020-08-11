/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var forma = document.getElementById("forma"),
    mostrarImagen = document.getElementById("mostrarImagen"),
    mostrarImagen2 = document.getElementById("mostrarImagen2"),
    imagenFinal = document.getElementById("imagenFinal"),
    nombreColor = document.getElementById("nombreColor"),
    colextF = document.getElementById("colextF"),
    aspersores = document.getElementById("aspersores"),
    color = document.getElementsByName("color"),
    precioExterior = document.getElementsByName("precioExterior"),
    opcionDesplegable = document.getElementById("selectAsper"),
    infoPago =document.getElementById("infoPago");
    
    forma.addEventListener("change", desplegable, false);
    opcionDesplegable.addEventListener("change", desplegable, false);

function revisa(){
  $(window).load(function() {
    $('img').magnify();
    });
}

function desplegable(evento){
  seleccion = document.getElementById("selectAsper").value;
    var precio=15000;
    var moneda="$";
    if (evento.target.value) {
      if(forma3["camara"].value==="camara_1"){
          nombreCamara.innerHTML = "<p class='p d-inline ml-5'>Camara Tipo 1</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
        camaraFinal.innerHTML = "<p class='p d-inline'> Tipo 1 </p> ";
          if(seleccion=="4Aspersores"){
            aspersores.innerHTML = "<p class='p d-inline'> 4 </p> ";
            if(forma["color"].value==="blanco"){   
              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Blanco</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Blanco/blanco.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Blanco/blanco_largo.jpg'>";
              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_aspersores/Blanco/blanco.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Blanco/blanco_largo.jpg'>";
              imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Blanco/blanco.jpg' class='img-fluid mx-auto d-block'>";                        
              colextF.innerHTML = "<p class='p d-inline'> Blanco</p> ";
              $('img').magnify();
              if(!isNaN(precio)){
                precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
              }
              infoPago.innerHTML = moneda + precio; 
            }
            else{
                if(forma["color"].value==="amarillo"){
              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Amarillo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Amarillo/amarillo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Amarillo/amarillo_largo.jpg'>";
              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_aspersores/Amarillo/amarillo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Amarillo/amarillo_largo.jpg'>";
              imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Amarillo/amarillo.jpg' class='img-fluid mx-auto d-block'>";                        
              colextF.innerHTML = "<p class='p d-inline'> Amarillo</p> ";
              $('img').magnify();
              if(!isNaN(precio)){
                  precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                  precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
              }
              infoPago.innerHTML = moneda + precio;
                }
                else{
                  if(forma["color"].value==="azul"){
                  nombreColor.innerHTML = "<p class='p d-inline ml-5'>Azul</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                  mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Azul/azul.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Azul/azul_largo.jpg'>";
                  mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_aspersores/Azul/azul.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Azul/azul_largo.jpg'>";
                  imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Azul/azul.jpg' class='img-fluid mx-auto d-block'>";                        
                  colextF.innerHTML = "<p class='p d-inline'> Azul</p> ";
                  $('img').magnify();
                  if(!isNaN(precio)){
                    precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                    precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                  }
                  infoPago.innerHTML = moneda + precio;
                  }
                  else{
                      if(forma["color"].value==="gris"){
                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Gris</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Gris/gris.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Gris/gris_largo.jpg'>";
                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_aspersores/Gris/gris.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Gris/gris_largo.jpg'>";
                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Gris/gris.jpg' class='img-fluid mx-auto d-block'>";                        
                    colextF.innerHTML = "<p class='p d-inline'> Gris</p> ";
                    $('img').magnify();
                    if(!isNaN(precio)){
                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                    }
                    infoPago.innerHTML = moneda + precio;
                      }
                      else{
                        if(forma["color"].value==="negro"){
                        nombreColor.innerHTML = "<p class='p d-inline ml-5'>Negro</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                        mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Negro/negro.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Negro/negro_largo.jpg'>";
                        mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_aspersores/Negro/negro.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Negro/negro_largo.jpg'>";
                        imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Negro/negro.jpg' class='img-fluid mx-auto d-block'>";                        
                        colextF.innerHTML = "<p class='p d-inline'> Negro</p> ";
                        $('img').magnify();
                        if(!isNaN(precio)){
                          precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                          precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                        }
                        infoPago.innerHTML = moneda + precio;
                        }
                        else{
                            if(forma["color"].value==="rojo"){
                          nombreColor.innerHTML = "<p class='p d-inline ml-5'>Rojo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                          mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Rojo/rojo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Rojo/rojo_largo.jpg'>";
                          mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_aspersores/Rojo/rojo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Rojo/rojo_largo.jpg'>";
                          imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Rojo/rojo.jpg' class='img-fluid mx-auto d-block'>";                        
                          colextF.innerHTML = "<p class='p d-inline'> Rojo</p> ";
                          $('img').magnify();
                          if(!isNaN(precio)){
                              precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                              precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                          }
                          infoPago.innerHTML = moneda + precio;
                            }
                            else{
                              if(forma["color"].value==="verde"){
                              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Verde</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Verde/verde.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Verde/verde_largo.jpg'>";
                              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_aspersores/Verde/verde.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_aspersores/Verde/verde_largo.jpg'>";
                              imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_aspersores/Verde/verde.jpg' class='img-fluid mx-auto d-block'>";                        
                              colextF.innerHTML = "<p class='p d-inline'> Verde</p> ";
                              $('img').magnify();
                              if(!isNaN(precio)){
                                precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                              }
                              infoPago.innerHTML = moneda + precio;
                              }
                            }
                        }
                      }
                  }
                }
            }
          }
          else{
            if(seleccion=="8Aspersores"){
                aspersores.innerHTML = "<p class='p d-inline'> 8 </p> ";
                if(forma["color"].value==="blanco"){  
                  nombreColor.innerHTML = "<p class='p d-inline ml-5'>Blanco</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                  mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Blanco/blanco.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Blanco/blanco_largo.jpg'>";
                  mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_8_aspersores/Blanco/blanco.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Blanco/blanco_largo.jpg'>";
                  imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Blanco/blanco.jpg' class='img-fluid mx-auto d-block'>";                        
                  colextF.innerHTML = "<p class='p d-inline'> Blanco</p> ";
                  $('img').magnify();
                  if(!isNaN(precio)){
                      precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                      precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                  }
                  infoPago.innerHTML = moneda + precio; 
                }
                else{
                  if(forma["color"].value==="amarillo"){
                      nombreColor.innerHTML = "<p class='p d-inline ml-5'>Amarillo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                      mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Amarillo/amarillo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Amarillo/amarillo_largo.jpg'>";
                      mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_8_aspersores/Amarillo/amarillo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Amarillo/amarillo_largo.jpg'>";
                      imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Amarillo/amarillo.jpg' class='img-fluid mx-auto d-block'>";                        
                      colextF.innerHTML = "<p class='p d-inline'> Amarillo</p> ";
                      $('img').magnify();
                      if(!isNaN(precio)){
                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                      }
                      infoPago.innerHTML = moneda + precio;   
                  }
                  else{
                      if(forma["color"].value==="azul"){
                        nombreColor.innerHTML = "<p class='p d-inline ml-5'>Azul</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                        mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Azul/azul.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Azul/azul_largo.jpg'>";
                        mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_8_aspersores/Azul/azul.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Azul/azul_largo.jpg'>";
                        imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Azul/azul.jpg' class='img-fluid mx-auto d-block'>";                        
                        colextF.innerHTML = "<p class='p d-inline'> Azul</p> ";
                        $('img').magnify();
                        if(!isNaN(precio)){
                            precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                            precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                        }
                        infoPago.innerHTML = moneda + precio;
                      }
                      else{
                        if(forma["color"].value==="gris"){
                            nombreColor.innerHTML = "<p class='p d-inline ml-5'>Gris</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                            mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Gris/gris.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Gris/gris_largo.jpg'>";
                            mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_8_aspersores/Gris/gris.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Gris/gris_largo.jpg'>";
                            imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Gris/gris.jpg' class='img-fluid mx-auto d-block'>";                        
                            colextF.innerHTML = "<p class='p d-inline'> Gris</p> ";
                            $('img').magnify();
                            if(!isNaN(precio)){
                              precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                              precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                            }
                            infoPago.innerHTML = moneda + precio;
                        }
                        else{
                            if(forma["color"].value==="negro"){
                              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Negro</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Negro/negro.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Negro/negro_largo.jpg'>";
                              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_8_aspersores/Negro/negro.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Negro/negro_largo.jpg'>";
                              imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Negro/negro.jpg' class='img-fluid mx-auto d-block'>";                        
                              colextF.innerHTML = "<p class='p d-inline'> Negro</p> ";
                              $('img').magnify();
                              if(!isNaN(precio)){
                                  precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                  precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                              }
                              infoPago.innerHTML = moneda + precio;
                            }
                            else{
                              if(forma["color"].value==="rojo"){
                                  nombreColor.innerHTML = "<p class='p d-inline ml-5'>Rojo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                  mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Rojo/rojo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Rojo/rojo_largo.jpg'>";
                                  mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_8_aspersores/Rojo/rojo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Rojo/rojo_largo.jpg'>";
                                  imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Rojo/rojo.jpg' class='img-fluid mx-auto d-block'>";                        
                                  colextF.innerHTML = "<p class='p d-inline'> Rojo</p> ";
                                  $('img').magnify();
                                  if(!isNaN(precio)){
                                    precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                    precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                  }
                                  infoPago.innerHTML = moneda + precio;
                              }
                              else{
                                  if(forma["color"].value==="verde"){
                                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Verde</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Verde/verde.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Verde/verde_largo.jpg'>";
                                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_8_aspersores/Verde/verde.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_8_aspersores/Verde/verde_largo.jpg'>";
                                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_8_aspersores/Verde/verde.jpg' class='img-fluid mx-auto d-block'>";                        
                                    colextF.innerHTML = "<p class='p d-inline'> Verde</p> ";
                                    $('img').magnify();
                                    if(!isNaN(precio)){
                                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                    }
                                    infoPago.innerHTML = moneda + precio;
                                  } 
                              }
                            }
                        }
                      }
                  }
                }
            }
            else{
                aspersores.innerHTML = "<p class='p d-inline'> 0</p> ";
                if(forma["color"].value==="blanco"){  
                  nombreColor.innerHTML = "<p class='p d-inline ml-5'>Blanco</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                  mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Blanco/blanco.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Blanco/blanco_largo.jpg'>";
                  mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Blanco/blanco.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Blanco/blanco_largo.jpg'>";
                  imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Blanco/blanco.jpg' class='img-fluid mx-auto d-block'>";                        
                  colextF.innerHTML = "<p class='p d-inline'> Blanco</p> ";
                  $('img').magnify();
                  if(!isNaN(precio)){
                      precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                      precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                  }
                  infoPago.innerHTML = moneda + precio; 
                }
                else{
                  if(forma["color"].value==="amarillo"){
                      nombreColor.innerHTML = "<p class='p d-inline ml-5'>Amarillo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                      mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Amarillo/amarillo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Amarillo/amarillo_largo.jpg'>";
                      mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Amarillo/amarillo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Amarillo/amarillo_largo.jpg'>";
                      imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Amarillo/amarillo.jpg' class='img-fluid mx-auto d-block'>";                        
                      colextF.innerHTML = "<p class='p d-inline'> Amarillo</p> ";
                      $('img').magnify();
                      if(!isNaN(precio)){
                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                      }
                      infoPago.innerHTML = moneda + precio;   
                  }
                  else{
                      if(forma["color"].value==="azul"){
                        nombreColor.innerHTML = "<p class='p d-inline ml-5'>Azul</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                        mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Azul/azul.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Azul/azul_largo.jpg'>";
                        mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Azul/azul.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Azul/azul_largo.jpg'>";
                        imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Azul/azul.jpg' class='img-fluid mx-auto d-block'>";                        
                        colextF.innerHTML = "<p class='p d-inline'> Azul</p> ";
                        $('img').magnify();
                        if(!isNaN(precio)){
                            precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                            precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                        }
                        infoPago.innerHTML = moneda + precio;
                      }
                      else{
                        if(forma["color"].value==="gris"){
                            nombreColor.innerHTML = "<p class='p d-inline ml-5'>Gris</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                            mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Gris/gris.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Gris/gris_largo.jpg'>";
                            mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Gris/gris.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Gris/gris_largo.jpg'>";
                            imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Gris/gris.jpg' class='img-fluid mx-auto d-block'>";                        
                            colextF.innerHTML = "<p class='p d-inline'> Gris</p> ";
                            $('img').magnify();
                            if(!isNaN(precio)){
                              precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                              precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                            }
                            infoPago.innerHTML = moneda + precio;
                        }
                        else{
                            if(forma["color"].value==="negro"){
                              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Negro</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Negro/negro.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Negro/negro_largo.jpg'>";
                              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Negro/negro.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Negro/negro_largo.jpg'>";
                              imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Negro/negro.jpg' class='img-fluid mx-auto d-block'>";                        
                              colextF.innerHTML = "<p class='p d-inline'> Negro</p> ";
                              $('img').magnify();
                              if(!isNaN(precio)){
                                  precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                  precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                              }
                              infoPago.innerHTML = moneda + precio;
                            }
                            else{
                              if(forma["color"].value==="rojo"){
                                  nombreColor.innerHTML = "<p class='p d-inline ml-5'>Rojo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                  mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Rojo/rojo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Rojo/rojo_largo.jpg'>";
                                  mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Rojo/rojo.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Rojo/rojo_largo.jpg'>";
                                  imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Rojo/rojo.jpg' class='img-fluid mx-auto d-block'>";                        
                                  colextF.innerHTML = "<p class='p d-inline'> Rojo</p> ";
                                  $('img').magnify();
                                  if(!isNaN(precio)){
                                    precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                    precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                  }
                                  infoPago.innerHTML = moneda + precio;
                              }
                              else{
                                  if(forma["color"].value==="verde"){
                                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Verde</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Verde/verde.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Verde/verde_largo.jpg'>";
                                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Verde/verde.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Verde/verde_largo.jpg'>";
                                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara1/Ceres_4_sin_aspersores/Verde/verde.jpg' class='img-fluid mx-auto d-block'>";                        
                                    colextF.innerHTML = "<p class='p d-inline'> Verde</p> ";
                                    $('img').magnify();
                                    if(!isNaN(precio)){
                                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                    }
                                    infoPago.innerHTML = moneda + precio;
                                  }
                              }
                            }
                        }
                      }
                  }
                }
            }
          }
      }
      else{
        if(forma3["camara"].value==="camara_2"){
            nombreCamara.innerHTML = "<p class='p d-inline ml-5'>Camara Tipo 2</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
          camaraFinal.innerHTML = "<p class='p d-inline'> Tipo 2 </p> ";
            if(seleccion=="4Aspersores"){
              aspersores.innerHTML = "<p class='p d-inline'> 4 </p> ";
              if(forma["color"].value==="blanco"){   
                  nombreColor.innerHTML = "<p class='p d-inline ml-5'>Blanco</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                  mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Blanco/blanco_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Blanco/blanco_cam2_largo.jpg'>";
                  mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_aspersores/Blanco/blanco_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Blanco/blanco_cam2_largo.jpg'>";
                  imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Blanco/blanco_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                  colextF.innerHTML = "<p class='p d-inline'> Blanco</p> ";
                  $('img').magnify();
                  if(!isNaN(precio)){
                    precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                    precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                  }
                  infoPago.innerHTML = moneda + precio; 
              }
              else{
                  if(forma["color"].value==="amarillo"){
                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Amarillo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Amarillo/amarillo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Amarillo/amarillo_cam2_largo.jpg'>";
                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_aspersores/Amarillo/amarillo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Amarillo/amarillo_cam2_largo.jpg'>";
                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Amarillo/amarillo_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                    colextF.innerHTML = "<p class='p d-inline'> Amarillo</p> ";
                    $('img').magnify();
                    if(!isNaN(precio)){
                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                    }
                    infoPago.innerHTML = moneda + precio;
                  }
                  else{
                    if(forma["color"].value==="azul"){
                        nombreColor.innerHTML = "<p class='p d-inline ml-5'>Azul</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                        mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Azul/azul_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Azul/azul_cam2_largo.jpg'>";
                        mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_aspersores/Azul/azul_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Azul/azul_cam2_largo.jpg'>";
                        imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Azul/azul_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                        colextF.innerHTML = "<p class='p d-inline'> Azul</p> ";
                        $('img').magnify();
                        if(!isNaN(precio)){
                          precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                          precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                        }
                        infoPago.innerHTML = moneda + precio;
                    }
                    else{
                        if(forma["color"].value==="gris"){
                          nombreColor.innerHTML = "<p class='p d-inline ml-5'>Gris</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                          mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Gris/gris_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Gris/gris_cam2_largo.jpg'>";
                          mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_aspersores/Gris/gris_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Gris/gris_cam2_largo.jpg'>";
                          imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Gris/gris_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                          colextF.innerHTML = "<p class='p d-inline'> Gris</p> ";
                          $('img').magnify();
                          if(!isNaN(precio)){
                              precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                              precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                          }
                          infoPago.innerHTML = moneda + precio;
                        }
                        else{
                          if(forma["color"].value==="negro"){
                              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Negro</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Negro/negro_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Negro/negro_cam2_largo.jpg'>";
                              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_aspersores/Negro/negro_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Negro/negro_cam2_largo.jpg'>";
                              imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Negro/negro_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                              colextF.innerHTML = "<p class='p d-inline'> Negro</p> ";
                              $('img').magnify();
                              if(!isNaN(precio)){
                                precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                              }
                              infoPago.innerHTML = moneda + precio;
                          }
                          else{
                              if(forma["color"].value==="rojo"){
                                nombreColor.innerHTML = "<p class='p d-inline ml-5'>Rojo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Rojo/rojo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Rojo/rojo_cam2_largo.jpg'>";
                                mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_aspersores/Rojo/rojo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Rojo/rojo_cam2_largo.jpg'>";
                                imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Rojo/rojo_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                colextF.innerHTML = "<p class='p d-inline'> Rojo</p> ";
                                $('img').magnify();
                                if(!isNaN(precio)){
                                    precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                    precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                }
                                infoPago.innerHTML = moneda + precio;
                              }
                              else{
                                if(forma["color"].value==="verde"){
                                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Verde</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Verde/verde_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Verde/verde_cam2_largo.jpg'>";
                                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_aspersores/Verde/verde_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_aspersores/Verde/verde_cam2_largo.jpg'>";
                                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_aspersores/Verde/verde_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                    colextF.innerHTML = "<p class='p d-inline'> Verde</p> ";
                                    $('img').magnify();
                                    if(!isNaN(precio)){
                                      precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                      precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                    }
                                    infoPago.innerHTML = moneda + precio;
                                }
                              }
                          }
                        }
                    }
                  }
              }
            }
            else{
              if(seleccion=="8Aspersores"){
                  aspersores.innerHTML = "<p class='p d-inline'> 8 </p> ";
                  if(forma["color"].value==="blanco"){  
                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Blanco</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Blanco/blanco_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Blanco/blanco_cam2_largo.jpg'>";
                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_8_aspersores/Blanco/blanco_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Blanco/blanco_cam2_largo.jpg'>";
                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Blanco/blanco_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                    colextF.innerHTML = "<p class='p d-inline'> Blanco</p> ";
                    $('img').magnify();
                    if(!isNaN(precio)){
                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                    }
                    infoPago.innerHTML = moneda + precio; 
                  }
                  else{
                    if(forma["color"].value==="amarillo"){
                        nombreColor.innerHTML = "<p class='p d-inline ml-5'>Amarillo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                        mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Amarillo/amarillo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Amarillo/amarillo_cam2_largo.jpg'>";
                        mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_8_aspersores/Amarillo/amarillo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Amarillo/amarillo_cam2_largo.jpg'>";
                        imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Amarillo/amarillo_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                        colextF.innerHTML = "<p class='p d-inline'> Amarillo</p> ";
                        $('img').magnify();
                        if(!isNaN(precio)){
                          precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                          precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                        }
                        infoPago.innerHTML = moneda + precio;   
                    }
                    else{
                        if(forma["color"].value==="azul"){
                          nombreColor.innerHTML = "<p class='p d-inline ml-5'>Azul</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                          mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Azul/azul_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Azul/azul_cam2_largo.jpg'>";
                          mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_8_aspersores/Azul/azul_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Azul/azul_cam2_largo.jpg'>";
                          imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Azul/azul_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                          colextF.innerHTML = "<p class='p d-inline'> Azul</p> ";
                          $('img').magnify();
                          if(!isNaN(precio)){
                              precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                              precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                          }
                          infoPago.innerHTML = moneda + precio;
                        }
                        else{
                          if(forma["color"].value==="gris"){
                              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Gris</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Gris/gris_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Gris/gris_cam2_largo.jpg'>";
                              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_8_aspersores/Gris/gris_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Gris/gris_cam2_largo.jpg'>";
                              imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Gris/gris_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                              colextF.innerHTML = "<p class='p d-inline'> Gris</p> ";
                              $('img').magnify();
                              if(!isNaN(precio)){
                                precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                              }
                              infoPago.innerHTML = moneda + precio;
                          }
                          else{
                              if(forma["color"].value==="negro"){
                                nombreColor.innerHTML = "<p class='p d-inline ml-5'>Negro</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Negro/negro_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Negro/negro_cam2_largo.jpg'>";
                                mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_8_aspersores/Negro/negro_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Negro/negro_cam2_largo.jpg'>";
                                imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Negro/negro_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                colextF.innerHTML = "<p class='p d-inline'> Negro</p> ";
                                $('img').magnify();
                                if(!isNaN(precio)){
                                    precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                    precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                }
                                infoPago.innerHTML = moneda + precio;
                              }
                              else{
                                if(forma["color"].value==="rojo"){
                                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Rojo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Rojo/rojo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Rojo/rojo_cam2_largo.jpg'>";
                                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_8_aspersores/Rojo/rojo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Rojo/rojo_cam2_largo.jpg'>";
                                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Rojo/rojo_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                    colextF.innerHTML = "<p class='p d-inline'> Rojo</p> ";
                                    $('img').magnify();
                                    if(!isNaN(precio)){
                                      precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                      precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                    }
                                    infoPago.innerHTML = moneda + precio;
                                }
                                else{
                                    if(forma["color"].value==="verde"){
                                      nombreColor.innerHTML = "<p class='p d-inline ml-5'>Verde</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                      mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Verde/verde_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Verde/verde_cam2_largo.jpg'>";
                                      mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_8_aspersores/Verde/verde_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_8_aspersores/Verde/verde_cam2_largo.jpg'>";
                                      imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_8_aspersores/Verde/verde_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                      colextF.innerHTML = "<p class='p d-inline'> Verde</p> ";
                                      $('img').magnify();
                                      if(!isNaN(precio)){
                                          precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                          precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                      }
                                      infoPago.innerHTML = moneda + precio;
                                    } 
                                }
                              }
                          }
                        }
                    }
                  }
              }
              else{
                  aspersores.innerHTML = "<p class='p d-inline'> 0</p> ";
                  if(forma["color"].value==="blanco"){  
                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Blanco</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Blanco/blanco_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Blanco/blanco_cam2_largo.jpg'>";
                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Blanco/blanco_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Blanco/blanco_cam2_largo.jpg'>";
                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Blanco/blanco_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                    colextF.innerHTML = "<p class='p d-inline'> Blanco</p> ";
                    $('img').magnify();
                    if(!isNaN(precio)){
                        precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                        precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                    }
                    infoPago.innerHTML = moneda + precio; 
                  }
                  else{
                    if(forma["color"].value==="amarillo"){
                        nombreColor.innerHTML = "<p class='p d-inline ml-5'>Amarillo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                        mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Amarillo/amarillo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Amarillo/amarillo_cam2_largo.jpg'>";
                        mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Amarillo/amarillo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Amarillo/amarillo_cam2_largo.jpg'>";
                        imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Amarillo/amarillo_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                        colextF.innerHTML = "<p class='p d-inline'> Amarillo</p> ";
                        $('img').magnify();
                        if(!isNaN(precio)){
                          precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                          precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                        }
                        infoPago.innerHTML = moneda + precio;   
                    }
                    else{
                        if(forma["color"].value==="azul"){
                          nombreColor.innerHTML = "<p class='p d-inline ml-5'>Azul</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                          mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Azul/azul_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Azul/azul_cam2_largo.jpg'>";
                          mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Azul/azul_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Azul/azul_cam2_largo.jpg'>";
                          imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Azul/azul_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                          colextF.innerHTML = "<p class='p d-inline'> Azul</p> ";
                          $('img').magnify();
                          if(!isNaN(precio)){
                              precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                              precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                          }
                          infoPago.innerHTML = moneda + precio;
                        }
                        else{
                          if(forma["color"].value==="gris"){
                              nombreColor.innerHTML = "<p class='p d-inline ml-5'>Gris</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                              mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Gris/gris_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Gris/gris_cam2_largo.jpg'>";
                              mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Gris/gris_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Gris/gris_cam2_largo.jpg'>";
                              imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Gris/gris_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                              colextF.innerHTML = "<p class='p d-inline'> Gris</p> ";
                              $('img').magnify();
                              if(!isNaN(precio)){
                                precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                              }
                              infoPago.innerHTML = moneda + precio;
                          }
                          else{
                              if(forma["color"].value==="negro"){
                                nombreColor.innerHTML = "<p class='p d-inline ml-5'>Negro</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Negro/negro_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Negro/negro_cam2_largo.jpg'>";
                                mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Negro/negro_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara3/Ceres_4_sin_aspersores/Negro/negro_cam2_largo.jpg'>";
                                imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Negro/negro_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                colextF.innerHTML = "<p class='p d-inline'> Negro</p> ";
                                $('img').magnify();
                                if(!isNaN(precio)){
                                    precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                    precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                }
                                infoPago.innerHTML = moneda + precio;
                              }
                              else{
                                if(forma["color"].value==="rojo"){
                                    nombreColor.innerHTML = "<p class='p d-inline ml-5'>Rojo</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                    mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Rojo/rojo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Rojo/rojo_cam2_largo.jpg'>";
                                    mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Rojo/rojo_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Rojo/rojo_cam2_largo.jpg'>";
                                    imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Rojo/rojo_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                    colextF.innerHTML = "<p class='p d-inline'> Rojo</p> ";
                                    $('img').magnify();
                                    if(!isNaN(precio)){
                                      precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                      precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                    }
                                    infoPago.innerHTML = moneda + precio;
                                }
                                else{
                                    if(forma["color"].value==="verde"){
                                      nombreColor.innerHTML = "<p class='p d-inline ml-5'>Verde</p><p class='p pcole d-inline ml-5'>Incluido</p> ";
                                      mostrarImagen.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Verde/verde_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Verde/verde_cam2_largo.jpg'>";
                                      mostrarImagen2.innerHTML ="<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Verde/verde_cam2.jpg' class='magnify-image img-fluid mx-auto d-block' data-magnify-src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Verde/verde_cam2_largo.jpg'>";
                                      imagenFinal.innerHTML = "<img src='img/Ceres/Camara2/Ceres_4_sin_aspersores/Verde/verde_cam2.jpg' class='img-fluid mx-auto d-block'>";                        
                                      colextF.innerHTML = "<p class='p d-inline'> Verde</p> ";
                                      $('img').magnify();
                                      if(!isNaN(precio)){
                                          precio = precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
                                          precio = precio.split('').reverse().join('').replace(/^[\.]/,'');
                                      }
                                      infoPago.innerHTML = moneda + precio;
                                    }
                                }
                              }
                          }
                        }
                    }
                  }
              }
            }
        }
      }
    }
}