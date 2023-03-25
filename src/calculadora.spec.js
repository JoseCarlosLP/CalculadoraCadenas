import { sumadorCadenas } from "./SumadorDeCadenas";

describe("Sumador de cadenas",()=>{
    it("Sumar una cadena vacia ",()=>{
        expect(sumadorCadenas("")).toEqual(0);
    })
    it("Sumar una cadena de un caracter ",()=>{
        expect(sumadorCadenas("1")).toEqual(1);
    })
})

