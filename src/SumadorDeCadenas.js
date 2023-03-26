export function sumadorCadenas(cadenaASumar){
    if(cadenaASumar.length==0) return cadenaASumar.length;
    if(cadenaASumar.length==1) return parseInt(cadenaASumar);
    if(cadenaASumar[0]=="/") { 
        do{
        var indexInicioDelimitador=cadenaASumar.indexOf("[");
        var indexfinDelimitador=cadenaASumar.indexOf("]");
        var indexUltimoDelimitador=cadenaASumar.lastIndexOf("]");
        var delimitador=cadenaASumar.substring(indexInicioDelimitador+1,indexfinDelimitador);
        console.log("DELIMITADOR: "+delimitador);
        if(indexfinDelimitador==indexUltimoDelimitador) {
            var indicePrimerNumero=cadenaASumar.indexOf(" ")+1;
            cadenaASumar=cadenaASumar.substring(indicePrimerNumero,cadenaASumar.length);}
        else {
            cadenaASumar=cadenaASumar.substring(indexfinDelimitador+1,cadenaASumar.length);}
        cadenaASumar=cadenaASumar.replaceAll(delimitador,",");
        console.log("HOLAAA   " + cadenaASumar);    
        }while(indexfinDelimitador!=indexUltimoDelimitador)
    }    
    cadenaASumar=cadenaASumar.replaceAll("-",",");
    let ArrayNumerosDeLaCadena=cadenaASumar.split(",");
    let suma=0;
    for(let i=0;i<ArrayNumerosDeLaCadena.length;i++){
        if(parseInt(ArrayNumerosDeLaCadena[i])<=1000)
            suma=suma+parseInt(ArrayNumerosDeLaCadena[i]);}
    return suma;
}