//Cálculo salário líquido

let vlrInss;
let vlrIr;
let salBase;
let salLiq;

let salBruto = 3000.00;

if (salBruto <= 1556.94) {
  vlrInss = salBruto * 0.08;
} else if (salBruto <= 2594.92) {
  vlrInss = salBruto * 0.09;
} else if (salBruto <= 5189.82) {
  vlrInss = salBruto * 0.11;
} else if (salBruto > 5189.82) {
  vlrInss = 570.88
}

salBase = salBruto - vlrInss;

if (salBase <= 1903.98) {
  vlrIr = 0;
} else if (salBase <= 2826.65) {
  vlrIr = ((salBase * 0.075) - 142.80);
} else if (salBase <= 3751.05) {
  vlrIr = ((salBase * 0.15) - 354.80);
} else if (salBase <= 4664.68) {
  vlrIr = ((salBase * 0.225) - 636.13);
} else if (salBase > 4664.68) {
  vlrIr = ((salBase * 0.275) - 869.36);
}

salLiq = salBase - vlrIr;

console.log(salLiq);