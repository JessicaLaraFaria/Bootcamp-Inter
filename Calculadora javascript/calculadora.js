function calculadora(){
    var operacao = Number(prompt("Escolha uma operação: \n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real(/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)"));
    if (!operacao || operacao >= 7){
        alert("Erro - Digite uma opção válida!")
        calculadora();
    }else {
        let n1 = Number(prompt("Digite o primeiro numero: "));
        let n2 = Number(prompt("Digite o segundo valor: "));
        let resultado;

        if (!n1 || !n2){
            alert("Erro - Parâmetros inválidos!")
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaopcao()
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaopcao()
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaopcao()
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} % ${n2} = ${resultado}`)
                novaopcao()
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} é ${resultado}`)
                novaopcao()
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} = ${resultado}`)
                novaopcao()
            }
            function novaopcao(){
                let opcao = prompt("Deseja continuar? \n1 - sim\n2 - não")
        
                if (opcao == 1){
                    calculadora();
                }else if (opcao == 2){
                    alert("Até mais!")
                }else {
                    alert("Digite uma opção válida")
                    novaopcao();
                }
            }

        } 
        switch (operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
calculadora();
