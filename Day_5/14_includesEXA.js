let employee=[{ena:"Arun",mob:111},
               {ena:"Ajay",mob:112},
               {ena:"Murun",mob:113},
               {ena:"Bala",mob:114},
               {ena:"Bharath",mob:115},
               {ena:"Chandru",mob:116},
               {ena:"Dinesh",mob:117},
]
let newEmp=employee.filter((emp)=>{
    return emp.ena.includes("A")
})
console.log(newEmp)