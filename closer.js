function service(){
  let count = 0;
  return function(){
    count ++
    return count;
    }
}
const firstTime = service();
const secondTime = service();
console.log(firstTime());
console.log(firstTime());
console.log(firstTime());
console.log(firstTime());
console.log(firstTime());
console.log("now service 2");
console.log(secondTime());
console.log(secondTime());
console.log(secondTime());
console.log(secondTime());
console.log(secondTime());
console.log(secondTime());
console.log("again 1st time ");
console.log(firstTime());
console.log(firstTime());
console.log(firstTime());
console.log(firstTime());
console.log("again 2nd time");
console.log(secondTime());
console.log(secondTime());
console.log(secondTime());
console.log(secondTime());
console.log(secondTime());


