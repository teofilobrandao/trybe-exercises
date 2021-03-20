let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let calc = 0;
for (i = 0; i < numbers.length; i +=1) {
  calc = (calc + numbers[i]);
}
console.log (calc);