export function sumadorCadenas(cadenaASumar){
    if(cadenaASumar.length==0) return cadenaASumar.length;
    if(cadenaASumar.length==1) return parseInt(cadenaASumar);
    let numero1=parseInt(cadenaASumar[0]);
    let numero2=parseInt(cadenaASumar[2]);
    return numero1+numero2;
}