console.log("Process 1")
setTimeout(()=>{
    console.log("Process 2")

    setTimeout(()=>{
        console.log("Process 3")
    },3000)
},2000);  //here we contro; asyncronixation 