num = [2, 3, 4, 7, 5, 3, 563, 735];
const results = [];
for ( let i = 0; i < num.length ; i++){
  const element = num[i];
  const result = element * element;
  results.push(result);
}
console.log(results);