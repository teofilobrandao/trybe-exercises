//verifica se os 3 ângulos formam um triângulo
let a=50;
let b=50;
let c=0;

if (a>0) {

  if (b>0) {

    if (c>0) {
          let soma = a+b+c;
          if (soma > 180) {
            console.log("soma dos ângulos inválida para um triângulo");
          }
            else {
              console.log(true);
            }
    }
    else{
      console.log("Erro: Algum ângulo menor ou igual a zero");
        }
   
  }
  else{
    console.log("Erro: Algum ângulo menor ou igual a zero");
      }

}
else{
  console.log("Erro: Algum ângulo menor ou igual a zero");
    }

