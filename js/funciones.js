/*funcion fecha actua*/
function fecha(){
    var fecha=Date();
    document.write("La fecha actual es: "+fecha);
}

function menu(){
    document.write("1.-SUMA <br> 2.-FACTORIAL <br> 3.-FECHA ACTUAL <br> 4.-GENERAR NUMEROS")
}

function casos(){
    var op= parseInt(document.getElementById("txtOp").value);
    alert("selecciono la opcion: "+op);
    switch (op) {
        case 1:
            suma();
            break;
    
        case 2:
            factorial();
            break;

        case 3:
            fecha();
            break; 
        
        case 4:
            generarNumeros();
            break;

        default:
            alert("La opción ingresada no existe \nIngrese una opción del menú por favor");
            break;  
    }

}
function factorial(){
    var n=parseInt(prompt("ingrese un numero"));
    var f=1;
    for(var i=1;i<=n;i++){
        f*=i;
    }
    document.write("El factorial es: "+f);
}

function suma(){
    var num1=parseInt(prompt("ingrese primer numero"));
    var num2=parseInt(prompt("ingrese segundo numero"));
    var res=num1+num2;
    document.write("la suma es: "+res); 
   }

   function cargar(array){
       for(var i=0;i<array.length;i++){
           array[i]=parseInt(prompt("ingrese sueldo"));
       }
       
   }

   function calcularGastos(pagos){
       var acu=0;
       for(var i=0;i<pagos.length;i++){
           acu+=pago[i];
       }
       return acu;
   }

   function generarNumeros(){
    var dim= parseInt(prompt("ingresa la dimension"));   
    var listaNum= new Array(dim);
    for(var i=0; i<listaNum.length;i++){
        listaNum[i]= Math.random();
    }
    document.write("Los numeros que se generaron son: "+listaNum.toString());
   }