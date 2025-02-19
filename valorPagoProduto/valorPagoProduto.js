/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Códigos da condição de pagamento:
- À vista Débito, receber 10% de desconto;
- À vista no Dinheiro ou PIX, receber 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

Imprimir o resultado no console!
*/

const prompt = require('prompt-sync')();

function valorEntrada() {
    
    let valorProduto, tipoPagamento

    valorProduto = prompt("Digite o valor do produto em reais: R$ ").replace("," , ".");
        if(parseFloat(valorProduto) <= 0 || isNaN(valorProduto)) {
            console.log("Insira uma entrada válida contendo apenas números e vírgula, ou ponto, quando necessário para o número decimal ");
            return valorEntrada();
        }
    
    tipoPagamento = prompt("Qual tipo de pagamento será feito (Débito, Dinheiro ou Pix, Crédito): ").toLowerCase().trim();
        if(tipoPagamento === "credito") {
            pagamentoParcelado = parseInt(prompt("Digite a quantidade de vezes será o parcelamento (colocar apenas o número): "));
        }
    
    
    const valorProdutoCorreto = parseFloat(valorProduto.replace("," , "."));

    if (tipoPagamento === "debito") {
        valorProdutoDesconto10 = valorProdutoCorreto - (valorProdutoCorreto * 0.1);
        console.log(`Com o desconto de 10%, o valor a ser pago do produto é de R$ ${valorProdutoDesconto10.toFixed(2)} reais.`);
    }else if (tipoPagamento === "dinheiro" || tipoPagamento === "pix") {
        valorProdutoDesconto15 = valorProdutoCorreto - (valorProdutoCorreto * 0.15);
        console.log(`Com o desconto de 15%, o valor a ser pago do produto é de R$ ${valorProdutoDesconto15.toFixed(2)} reais.`);
    }else if(tipoPagamento === "credito") {
        if (pagamentoParcelado === 1 || pagamentoParcelado === 2) {
            valorParcelado12 = valorProdutoCorreto / pagamentoParcelado
            console.log(`Compra parcelada em ${pagamentoParcelado} vez(es), valor a pagar por parcela R$ ${valorParcelado12.toFixed(2)} reais.`);
        }else if (pagamentoParcelado >= 3 && pagamentoParcelado < 11) {
            valorParcelado3a10 = (valorProdutoCorreto + (valorProdutoCorreto * 0.1)) / pagamentoParcelado
            console.log(`Compra parcelada em ${pagamentoParcelado} vezes acrescida de 10% de juros, \nvalor a pagar por parcela: R$ ${valorParcelado3a10.toFixed(2)}`)
        }else {
            console.log("Número de parcelamento não aceito!")
        }
    }else {
        console.log("Escolha entre Débito, Dinheiro ou Pix, Crédito.")
    }
}
valorEntrada();
