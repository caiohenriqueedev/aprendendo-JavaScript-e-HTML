class Operacoes {
    constructor(){

        somar(ValorA,ValorB){
            console.log("resultado:" + (valorA + ValorB));
        }

        Somar(ValorA,ValorB, ValorC){
            console.log("resultado:" +(ValorA+ValorB+ValorC));

        }
    }
}

var objeto = new Operacoes ();
objeto.Somar(10,20,30);