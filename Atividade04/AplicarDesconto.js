function calculoTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;

}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100 ){
        return valorTotal * 0.9;
    }
    return valorTotal;
}



let quantidade = parseInt(prompt("Digite quantidade"));
let precoUnitario = parseFloat(prompt("Digite preco"));
let total = calculoTotal(precoUnitario, quantidade);

let totalComDesconto = aplicarDesconto(total);

console.log("Total da compra: R$ " + total.toFixed(2));
console.log("Total com desconto: R$ " + totalComDesconto.toFixed(2));