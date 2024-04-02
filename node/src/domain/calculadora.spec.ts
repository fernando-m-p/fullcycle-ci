import Calculadora from "./calculadora"

describe("calculadora unit test", ()=>{
    it("Teste soma", ()=>{
        let calculadora = new Calculadora();
        calculadora.soma(1,5);
        expect(calculadora.getResultado()).toBe(6);
    })

})