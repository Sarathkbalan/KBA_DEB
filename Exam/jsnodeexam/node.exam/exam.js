     

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const expenses = [];


function addExpense() {
    rl.question('Enter expense type (e.g., home rent, car loan): ', (type) => {
        rl.question('Enter amount: ', (amount) => {
            rl.question('Enter date (YYYY-MM-DD): ', (date) => {
    
                  
            
    
   
    
       
    

