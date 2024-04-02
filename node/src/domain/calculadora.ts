export default class Calculadora {
    private _resultado :number = 0;


    
    soma(x:number, y:number){
        this._resultado = x + y;
    }


    getResultado(){
        return this._resultado;
    }

}