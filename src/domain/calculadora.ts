export default class Calculadora {
    private _resultado :number = 0;


    
    soma(x:number, y:number){
        this._resultado = x + y;
    }
    subtracao(x:number, y:number){
        this._resultado = x - y;
    }

    multiplicacao(x:number, y:number){
        this._resultado = x * y;
    }

    
    divisao(x:number, y:number){
        this._resultado = x / y;
    }

    restoDiv(x:number, y:number){
        this._resultado = x % y;
    }
    
    exponeciacao(x:number, y:number){
        this._resultado = x ** y;
    }

    
    divisao2(x:number, y:number){
        this._resultado = x / y;
    }

    restoDiv2(x:number, y:number){
        this._resultado = x % y;
    }
    
    exponeciacao2(x:number, y:number){
        this._resultado = x ** y;
    }

    
    divisao3(x:number, y:number){
        this._resultado = x / y;
    }

    restoDiv3(x:number, y:number){
        this._resultado = x % y;
    }
    
    exponeciacao3(x:number, y:number){
        this._resultado = x ** y;
    }


    getResultado(){
        return this._resultado;
    }

}