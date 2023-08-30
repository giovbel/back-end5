function calculadoraVenda (valorVenda, tipoPagamento){
        
    //recebendo os valores dos argumentos da função
    let valorCompra = valorVenda
    let calculo = tipoPagamento
    let resultado;

    //realizando os calculos

    switch (calculo){
        case '1':
            resultado = valorCompra / 8 * 100
            break
        case '2':
            resultado = valorCompra / 4 * 100
            break
        case '3':
            resultado = valorCompra / 2
            break
        case '4':
            resultado = valorCompra + (valorCompra * 0.08) / 4
            break
        default:
            console.log ('')
            console.log ('>.< Erro: Opção Inválida')
            break
    }

    if(resultado != undefined)
      return resultado.toFixed(2); //retorno dos resultados
    else
      return false;
}

//torna a função calculadora pública, ou seja, ficará visível para outros arquivos
module.exports = {
    calculadoraVenda
}