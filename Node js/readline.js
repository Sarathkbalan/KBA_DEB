const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 rl.question('what is your Name',(name)=>{
    console.log(`your Name is ${name}.`);
    rl.close();
 })