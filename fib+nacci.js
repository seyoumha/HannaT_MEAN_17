function fib() {
  let num = [0]
  let n = 0
  function nacci() {
    let l = num.length   
    if(l < 2){
      n = 1
      num.push(n)
    }
    else{
      n = num[l-2]+num[l-1]
      num.push(n)
    }
    return console.log(n)
    
  }
  return nacci

}




var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
