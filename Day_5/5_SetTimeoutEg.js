// javascript is asyncorinization it will not wait for anyone 
/*console.log("one")
setTimeout(()=>
    {
        console.log("two")
    },2000)

console.log("three")*/

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("callback hell");
    }, 1000)
  }, 1000)
}, 1000)