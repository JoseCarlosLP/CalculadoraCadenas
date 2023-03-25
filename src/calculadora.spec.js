import { sumadorCadenas } from "./SumadorDeCadenas";

describe("Sumador de cadenas",()=>{
    it("Sumar una cadena vacia ",()=>{
        expect(sumadorCadenas("")).toEqual(0);
    })
})

