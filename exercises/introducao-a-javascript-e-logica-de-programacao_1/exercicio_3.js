//calcula o maior entre 3 números
let a=17;
let b=13;
let c=20;

if (a > b) {
 
  if (a > c) {
   console.log("O maior número é",a);
  }
  else {
   console.log("O maior número é",c);
  }
}
else if (b > c) {
  console.log("O maior número é",b);
}
 else {
   console.log("O maior número é",c);
 }