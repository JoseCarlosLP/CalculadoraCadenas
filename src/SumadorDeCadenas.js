export function sumadorCadenas(cadenaASumar){
    if(cadenaASumar.length==0) return cadenaASumar.length;
    if(cadenaASumar.length==1) return parseInt(cadenaASumar);
    if(cadenaASumar[0]=="/") { 
        var delimitador=cadenaASumar[3];
        cadenaASumar=cadenaASumar.replaceAll(delimitador,",");
        var indicePrimerNumero=cadenaASumar.indexOf(" ")+1;
        cadenaASumar=cadenaASumar.substring(indicePrimerNumero,cadenaASumar.length);
    }    
    cadenaASumar=cadenaASumar.replaceAll("-",",");
    let ArrayNumerosDeLaCadena=cadenaASumar.split(",");
    let suma=0;
    for(let i=0;i<ArrayNumerosDeLaCadena.length;i++){
        suma=suma+parseInt(ArrayNumerosDeLaCadena[i]);}
    return suma;
}