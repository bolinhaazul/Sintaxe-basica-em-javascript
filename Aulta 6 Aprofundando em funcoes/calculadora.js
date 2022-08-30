function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n 1- soma(+) \n 2 - subtracao(-) \n 3 multiplicacao (*)\n 4 - divisao real(/)\n 5 - divisao inteira(%)\n 6 - potenciacao(**)'));

    if (!operacao || operacao >= 7) {
        alert(`Erro - operacao invalida!`);
        calculadora();
    } else {

        let n1 = Number(prompt('insira o primeiro valor: '));
        let n2 = Number(prompt('insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2) {
            alert(`Erro - parametros invalidos!`);
            calculadora();
        }

        function soma() {
            resultado = n1 + n2;
            alert(`${n1}+${n2}=${resultado}`);
            novaOperacao();
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1}-${n2}=${resultado}`)
            novaOperacao();
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1}*${n2}=${resultado}`);
            novaOperacao();
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1}/${n2}=${resultado}`);
            novaOperacao();
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisao entre ${n1} e ${n2} igual a ${resultado}`);
            novaOperacao();
        }

        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} e igual a ${resultado}`);
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt(`Deseja fazer outra operacao?\n 1- Sim\n 2 - Nao`);
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert(`Ate mais`);
            } else {
                alert(`Digite uma opcao valida`);
                novaOperacao();
            }
        }

        // utilizando if e else
        // if (operacao == 1) {
        //     soma();
        // } else if (operacao == 2) {
        //     subtracao();
        // } else if (operacao == 3) {
        //     multiplicacao();
        // } else if (operacao == 4) {
        //     divisaoReal();
        // } else if (operacao == 5) {
        //     divisaoInteira();
        // } else if (operacao == 6) {
        //     potenciacao();
        // }

        // usando switch case
        switch (operacao) {
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
