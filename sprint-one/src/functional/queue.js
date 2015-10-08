var Queue = function(){
  var count = 0; 
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count ++; 
  };

  someInstance.dequeue = function(){
    if (count > 0) {
      count --; 
    }
    var result = storage[0];
    delete storage[0];
    return result; 
  };

  someInstance.size = function(){
    return count; 
  };

  return someInstance;
};
