const my = what => what * 2;
const result = my(45);
console.log(result);
const your = (x, y) => {
  const add = x + y;
  return add;
}
const yourResult = your(100, 14);
console.log(yourResult);

const meAndYour = result + yourResult;
console.log(meAndYour);

const fullLine = (x, y, z) =>{
  const add = x + y;
  const minus = y - z;
  const divison = z / x;
  const multipy = y * x + z;
  const result = add + minus - divison / multipy;
  return result; 
} 


const type = (x, y) =>{
    const num = x + y;
    return num;
}
const add = type(24, 234);
console.log(add);