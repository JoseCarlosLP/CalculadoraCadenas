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
    it("Sumar una cadena de 2 caracteres separados por guion",()=>{
        expect(sumadorCadenas("1-2")).toEqual(3);
    })
    it("Sumar una cadena de mas de 2 caracteres separados por guion",()=>{
        expect(sumadorCadenas("1-2-5-1")).toEqual(9);
    })
    it("Sumar una cadena de mas de 2 caracteres separados por guiones y comas",()=>{
        expect(sumadorCadenas("1,2-5,8")).toEqual(16);
    })
    it("Sumar una cadena de 2 caracteres separados por un delimitador",()=>{
        expect(sumadorCadenas("//[;] 1;2")).toEqual(3);
    })
    it("Sumar una cadena de mas de 2 caracteres separados por un delimitador",()=>{
        expect(sumadorCadenas("//[;] 1;2;3")).toEqual(6);
    })
    it("Numeros mayores a 1000 son ignorados",()=>{
        expect(sumadorCadenas("1-2-1001")).toEqual(3);
    })
})

