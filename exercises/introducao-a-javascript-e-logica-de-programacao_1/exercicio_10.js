// Calcular lucro sobre venda



let valorCusto = -10;
let valorVenda = 180;
let itensVenda = 1000;
let impostoSobreOCusto = 20;

if ((valorCusto < 0)||(valorVenda < 0)) {
  console.log("Valores Inválidos");
}
let valorCustoTotal = valorCusto + (valorCusto * (impostoSobreOCusto/100));
let lucro = (valorVenda - valorCustoTotal)*itensVenda;
console.log ("O lucro será de R$ "+lucro);

