class funcionario{
    constructor(pNome, pSalario){
        this.Nome = pNome;
        this.Salario = pSalario
    }
        get Nome (){return this.Nome;}
        set Nome (pNome){this.nome = pNome;}
        get Salario(){return this.Salario;}
        set Salario (pSalario){this.Salario = pSalario;}

        calcularSalario(){


        }
}
class Vendedor extends funcionario{
        constructor(pNome, pSalario, pBonus){
            super(pNome, pSalario);
            this.pBonus = pBonus;
        }
        get Bonus (){return this.Bonus;}
        set Bonus (pBonus){this.Bonus = pBonus;}

        caluclarSalario(){
            return this.salario + this.Bonus;
        }
}

var Vendedor = new Vendedor ("Luiz",1100, 150);
console.log(Vendedor.calcularSalario());

var Vendedor = new Vendedor ("Luiz",1400, 100);
console.log(Vendedor.calcularSalario());