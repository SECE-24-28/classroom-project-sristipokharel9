let res=fetch("https://jsonplaceholder.typicode.com/users")
console.log(res)

let resp=fetch("https://jsonplaceholder.typicode.com/users")
         .then((data)=>{
            console.log(data)
         })

console.log(resp)

let respo=fetch("https://jsonplaceholder.typicode.com/users")
            .then(respo=>
            {
                return respo.json()
            })
                .then(user=>
            {
            console.log(user)
            })

console.log(respo)