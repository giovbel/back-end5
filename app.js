/************************************************************************
 * Objetivo: Criar um programa de auxílio no processo de vendas
 * Data: 30/08/2023
 * Autor: Giovanna
 * Versão: 1.0
 ************************************************************************/

//import da biblioteca de calculos
var calculoVenda = require('./modulo/calculoVenda.js');


//import da biblioteca virtual
var readline = require('readline');

//criação do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')
console.log('------------------')

//entrada de dados do valor da venda
entradaDados.question('Valor da venda: ', function(valorCompra){

    let vendaValor = valorCompra.replace(',','.');

    //tratamento de erro se o campo estiver vazio
    if(valorCompra == ''){
        console.log(' ');
        console.log('>.< ERRO: O valor deve estar preenchido!');
        entradaDados.close();

   //tratamento de erro se o campo tiver uma letra ou caractér inválido
    }else if (isNaN(valorCompra.replace(',','.'))){
        console.log(' ');
        console.log('>.< ERRO: Não é permitido letras ou caracteres, somente números !');
        entradaDados.close();
    } else{

    console.log('------------------')

    console.log('')

    console.log('')
    console.log('+--------------------------------------+')
    console.log('| 1 - Á vista com 8% de desconto       |')
    console.log('| 2 - Á vista no cartão, 4% de desconto|')
    console.log('| 3 - Em 2x, preço normal sem juros    |')
    console.log('| 4 - Em 4x, preço acrescido de 8%     |')
    console.log('+--------------------------------------+')

    console.log('')

//entrada de dados do tipo de pagamento
entradaDados.question('Tipo de pagamento: ', function(tipoPagamento){

    let pagamento = tipoPagamento.replace(',','.');

    //chama a função
    resultado = calculoVenda.calculadoraVenda(valorCompra, tipoPagamento);

    //tratamento para exibir o resultado somente se houver conteúdo na variável
    if(resultado)
      console.log('')
      console.log('Valor atualizado: '+ resultado +' R$');
      console.log('')
      entradaDados.close();
     })
    

}



})
