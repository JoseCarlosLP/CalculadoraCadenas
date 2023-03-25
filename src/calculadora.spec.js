import { sumadorCadenas } from "./SumadorDeCadenas";

describe("Sumador de cadenas",()=>{
    it("Sumar una cadena vacia ",()=>{
        expect(sumadorCadenas("")).toEqual(0);
    })
    it("Sumar una cadena de un caracter ",()=>{
        expect(sumadorCadenas("1")).toEqual(1);
    })
    it("Sumar una cadena de dos caracteres separados por coma",()=>{
        expect(sumadorCadenas("1,2")).toEqual(3);
    })
    it("Sumar una cadena de mas dos caracteres separados por coma",()=>{
        expect(sumadorCadenas("1,2,3")).toEqual(6);
    })
})

