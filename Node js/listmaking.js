

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [];

function displayMenu() {
  
    console.log(" 1. Add ","\n 2. View \n","3. Exit \n");
    rl.question("Enter your choice: ", handle);
};

function handle(option){
    switch (option.trim()){
        case '1':
        rl.question('Enter an item list',(item) =>{
           if (item!==""){
            list.push(item)
            console.log("item added=",item);
            
           }
           else{
            console.log('item must be added');
            
           }

           displayMenu();

            });
           break;
            case '2':
                if(list.length>0){
                    console.log('item must be in the list');
                    console.log(list.join(","));
                    
                    
                }else{
                    console.log("no item in the list");
                    
                }
                displayMenu();
                break;

             case '3':
                console.log("exit");
                rl.close()
                 break;  

                

        
    }
}


console.log("Welcome to the List Manager!");
displayMenu();