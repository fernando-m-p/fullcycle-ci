import Calculadora from "./calculadora"

describe("calculadora unit test", ()=>{
    it("Teste soma", ()=>{
        let calculadora = new Calculadora();
        calculadora.soma(1,5);
        expect(calculadora.getResultado()).toBe(6);
    })

    it("Teste subtracao", ()=>{
        let calculadora = new Calculadora();
        calculadora.subtracao(5,1);
        expect(calculadora.getResultado()).toBe(4);

    })
    it("Teste multiplicacao", ()=>{
        let calculadora = new Calculadora();
        calculadora.multiplicacao(5,4);
        expect(calculadora.getResultado()).toBe(20);

    })

    
    it("Teste divisao", ()=>{
        let calculadora = new Calculadora();
        calculadora.divisao(10,2);
        expect(calculadora.getResultado()).toBe(5);

        calculadora.divisao2(10,2);
        expect(calculadora.getResultado()).toBe(5);

        calculadora.divisao3(10,2);
        expect(calculadora.getResultado()).toBe(5);

    })

    
    it("Teste restoDiv", ()=>{
        let calculadora = new Calculadora();
        calculadora.restoDiv(11,2);
        expect(calculadora.getResultado()).toBe(1);
        calculadora.restoDiv2(11,2);
        expect(calculadora.getResultado()).toBe(1);
        calculadora.restoDiv3(11,2);
        expect(calculadora.getResultado()).toBe(1);

    })

    
    it("Teste exponeciacao", ()=>{
        let calculadora = new Calculadora();
        calculadora.exponeciacao(2,3);
        expect(calculadora.getResultado()).toBe(8);
        calculadora.exponeciacao2(2,3);
        expect(calculadora.getResultado()).toBe(8);
        calculadora.exponeciacao3(2,3);
        expect(calculadora.getResultado()).toBe(8);

    })



})

