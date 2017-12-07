var _ = {
  map: function(array, callback) {
    const results = [];
  
    for (let i = 0; i < array.length; i++){
      results.push(callback(array[i]))
    }
  
    return results;
  },
  reduce: function reduce(array, callback, memo){
    const results = [].concat(array);
    if (memo === undefined){
      memo = results.pop();
    }
    for (let i = 0; i < results.length; i++){
      
      memo = callback(memo, results[i])
    }
    return memo
  },
  find: function find(array, callback){
    for(let i = 0; i < array.length; i++) {
      if(callback(array[i])){
      return array[i]
      }
    }
  },
  filter: function filter(array, callback){
    const results = [];
    for (let i = 0; i < array.length; i++){
      if (callback(array[i], i)){
        results.push(array[i]);
      }
    }
  
    return results; 
  },
  reject: function reject(array, callback){
    const results = [];
    for (let i = 0; i < array.length; i++){
     if(!callback(array[i], i)){
       results.push(array[i])
     } 
     
    }
  
    return results;
  }
}

const array = [1,2,3,4,5,6,7,8, 'dog'];

let results = _.map(array, function(element){
  return element
});
r = reduce(array, function(num1,num2){
  return num1+num2
  
})
console.log(r)
// results1 = reject(results, function(element){
//   return isNaN(element)
// })
// results2 = filter(results, function(element){
//   return !isNaN(element)
// })
// console.log(results1)
// console.log(results2)
console.log(find(array, function(element){
  return element === 8;
}))
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); 