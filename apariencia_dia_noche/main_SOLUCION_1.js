         /*
            INTRO
            - Ubicacion del script. Abajo antes del cierre de la etiqueta del body

            OBJETIVO
           - Cambiar el css de body con una apariencia de noche/dia
            SCRIPTS
             Modelo A
            - Onclick en etiqueta
            - Funciones en el script
            - Acceso al CSS desde javascript
             MODELO B
            - Acceso al CSS con metodos de clases (add, toggle)
            - Objeto Event. Captura del ID
           
            AMBITOS IMPLICADOS
            -Eventos
            -DOM
            -Funciones
            -Metodos acceso CSS
           
           */
              //Modelo A
              /*
                
           function apariencia(){

                      // alert("Dia y noche");
              
              const botonApariencia=document.getElementById("btn1");
              const cuerpoPagina=document.querySelector("body");
              const contenedor=document.querySelector(".contenedor");
              
              cuerpoPagina.style.backgroundColor="black";
              contenedor.style.opacity="0.4";
              botonApariencia.style.color="white";
              
              botonApariencia.style.opacity="1";
              botonApariencia.innerText="Dia"

              }
                   */

              //Modelo B
              function apariencia(event){

                console.log(event);// El objeto event, recoge los datos del evento y los muestra en console.log
 
               let idBoton= event.target.id;
               let nombreBoton=event.target.nodeName;
 
              // alert(idBoton+"  "+nombreBoton);
 
 
               const botonApariencia=document.getElementById(idBoton);
               const cuerpoPagina=document.querySelector("body");
               const contenedor=document.querySelector(".contenedor");
 
 
               cuerpoPagina.classList.toggle("noche_body");
               contenedor.classList.toggle("noche_contenedor");
               botonApariencia.classList.toggle("noche_boton");
   
               
               let estadoBoton=botonApariencia.innerText;
               //alert(estadoBoton);
 
              //botonApariencia.innerText="Dia";
 
               if(estadoBoton=="Dia"){botonApariencia.innerText="Noche"};
               if(estadoBoton=="Noche"){botonApariencia.innerText="Dia"};
                
              
 
          
 
 
                }
 
 
 
 
 
 
 
 
 
 
 
 
 