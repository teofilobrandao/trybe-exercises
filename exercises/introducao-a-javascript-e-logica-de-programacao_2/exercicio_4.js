let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let calc = 0;
let base = (numbers.length);
for (i = 0; i < numbers.length; i +=1) {
  calc = (calc + numbers[i]);
}
let media = calc/base
if (media > 20) {
  console.log('valor maior que 20');
} else {
console.log('valor menor ou igual a 20');
}
console.log (media);