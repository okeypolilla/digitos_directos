function aleatorio()
  {
   var largo = Math.floor(Math.random() * (10 - 3 + 1) + 3); //largo que va a tener el numero a memorizar
   const secuencia = [largo];
while(secuencia.length < largo ){
   var numero= Math.floor(Math.random() * (10 - 1 + 1) + 1);
   var existe = false;
  for(var i=0;i<secuencia.length;i++){
	if(secuencia[i] == numero){
        existe = true;
        break;
    }
  }
 if(!existe){
    secuencia[secuencia.length] = numero;
  }

}


iniciar(secuencia,largo);
  }


  function iniciar(secuencia,largo){
     document.getElementById("jugando").style.display = "block";
    document.getElementById("inicio").style.display = "none";
    let i=0
 var id = window.setInterval(function(){
        document.getElementById("muestra").innerText = secuencia[i];
        i++;
        if(i == secuencia.length+1) {
                  clearInterval(id);
                  document.getElementById("jugando").style.display = "none";
                  document.getElementById("M").style.display = "block";
                  document.getElementById("numeros").style.display = "block";
                  document.getElementById("seleccion").style.display = "block";
               }
      },1000);
      console.log(secuencia);
      
      var boton1 = document.getElementById('boton1');
      var boton2 = document.getElementById('boton2');
      var boton3 = document.getElementById('boton3');
      var boton4 = document.getElementById('boton4');
      var boton5 = document.getElementById('boton5');
      var boton6 = document.getElementById('boton6');
      var boton7 = document.getElementById('boton7');
      var boton8 = document.getElementById('boton8');
      var boton9 = document.getElementById('boton9');
      var boton10 = document.getElementById('boton10');

      var seleccion = document.getElementById('seleccion');
      let eleccion=[];

        boton1.onclick = function(a){
            document.getElementById("boton1").style.display = "none";
           // eleccion += boton1.value
           eleccion.push(boton1.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)
       }
       boton2.onclick = function(b){
        document.getElementById("boton2").style.display = "none";
        //eleccion += boton2.value
        eleccion.push(boton2.value)
        document.getElementById("seleccion").innerText =eleccion;
        ocultar(eleccion,secuencia)
        }
         boton3.onclick = function(c){
        document.getElementById("boton3").style.display = "none";
        ocultar(eleccion,secuencia)
        //eleccion += boton3.value
        eleccion.push(boton3.value)
        document.getElementById("seleccion").innerText =eleccion;
        ocultar(eleccion,secuencia)
         }
         boton4.onclick = function(d){
            document.getElementById("boton4").style.display = "none";
            //eleccion += boton4.value
            eleccion.push(boton4.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)
        }
        boton5.onclick = function(e){
            document.getElementById("boton5").style.display = "none";
            //eleccion += boton5.value
            eleccion.push(boton5.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)
        }
        boton6.onclick = function(f){
            document.getElementById("boton6").style.display = "none";
            //eleccion += boton6.value
            eleccion.push(boton6.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)
        }
        boton7.onclick = function(e){
            document.getElementById("boton7").style.display = "none";
            //eleccion += boton7.value
            eleccion.push(boton7.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)
        }
        boton8.onclick = function(g){
            document.getElementById("boton8").style.display = "none";
            //eleccion += boton8.value
            eleccion.push(boton8.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)
        }
        boton9.onclick = function(h){
            document.getElementById("boton9").style.display = "none";
            //eleccion += boton9.value
            eleccion.push(boton9.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)
        }
        boton10.onclick = function(i){
            document.getElementById("boton10").style.display = "none";
            //eleccion += boton10.value
            eleccion.push(boton10.value)
            document.getElementById("seleccion").innerText =eleccion;
            ocultar(eleccion,secuencia)

      
        } 

        var v = document.getElementById('v');  
        v.onclick = function(j){
            validar(secuencia,eleccion)
        } 

  }
  function ocultar(eleccion,secuencia){
    if(eleccion.length==secuencia.length){
        document.getElementById("numeros").style.display = "none";
        document.getElementById("salir").style.display = "block";
    }

  }

  function validar(secuencia,eleccion){
    var igual= true;
    for (let j=0; j<secuencia.length;j++) {
        if (eleccion[j]!=secuencia[j]){
            igual=false
        }
        
    }
if ( igual==false) {
    window.alert("no son iguales")
    
}
if ( igual==true) {
    window.alert("son iguales")
    
}

  }