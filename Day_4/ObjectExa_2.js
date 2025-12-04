let student={sna:"Praveen",age:19,demo:function()
    {
        console.log("Hi I am "+this.sna) //Praveen
    }
}
student.demo()
//---------------------------
let student2={sna:"Prabhu",age:19,samp:()=>
    {
        console.log("Hi I am "+this.sna) //undefind
    }
}
student2.samp()