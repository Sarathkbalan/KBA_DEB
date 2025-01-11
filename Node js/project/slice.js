const tasks=[];
const args=process.argv.slice(2);
const command=agrs[0];
const task=args[1]
if (command==='add'){
    if(task){
        tasks.push(task);
        console.log(`Task added:${task}`);
        console.log(tasks);
        
        
    }
    else{
        console.log('please specfy a task to add.');
        
    }
}
else{
    console.log("invalid function")
}

// console.log('command line argument',args);