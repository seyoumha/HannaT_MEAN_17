module.exports = function (){
  return {
    add: function(num1, num2) { 
         let a = num1+num2
         return a
    },
    multiply: function(num1, num2) {
         let b = num1*num2
         return b
    },
    square: function(num) {
         let c = num*num 
         console.log(c) 
    },
    random: function(num1, num2) {
        let d =  Math.floor(Math.random() * (num2 - num1-1))+ num1+1
        return d
      }
  }
};