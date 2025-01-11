
const l=require('lodash')
const add1=require('./addition')

console.log("Hello world");
let a="Node .js"
console.log("Hello",`${a}`);
if (a==='Node .js'){
    console.log("Js file running on Node Js Enivorment ");
    
}
for(i=0;i<5;i++)
{
    b=i+1;
    console.log(b);
    
}
let Array=[1,2,3,4,5]
console.log(l.reverse(Array));
console.log(l.capitalize("hello world"));
console.log(add1.add(3,5));


