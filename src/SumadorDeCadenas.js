export function sumadorCadenas(cadenaASumar){
    if(cadenaASumar.length==0) return cadenaASumar.length;
    if(cadenaASumar.length==1) return parseInt(cadenaASumar);
    cadenaASumar=cadenaASumar.replaceAll("-",",");
    let ArrayNumerosDeLaCadena=cadenaASumar.split(",");
    let suma=0;
    for(let i=0;i<ArrayNumerosDeLaCadena.length;i++){
        suma=suma+parseInt(ArrayNumerosDeLaCadena[i]);}
    return suma;
}