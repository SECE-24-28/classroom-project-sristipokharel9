let student=[{sna:"Praveen",age:19,sma:90,fee:true},
             {sna:"Ajith",age:18,sma:98,fee:false},
             {sna:"Surya",age:17,sma:30,fee:true}
          ]
//console.log(student)
student.forEach((stu)=>{
    console.log("Name: "+stu.sna+" Age: "+stu.age+" Score: "+stu.sma+" Fee Paid: "+stu.fee);
})
