let student=[{sna:"Praveen",age:19,sma:90,fee:true},
             {sna:"Ajith",age:18,sma:98,fee:false},
             {sna:"Surya",age:17,sma:30,fee:true}
            ]

let newStu=student.map((stu)=>{
    return {na:stu.sna,ma:stu.sma+2}
})
console.log(newStu)