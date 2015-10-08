var Stack = function(){
  //store a count variable for size
  var count = 0; 
  var someInstance = {};
  // use numeric value for key in push/pop for storage
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    // needs to add keys and values to storage
    storage[count] = value; 
    //whenever push, count increments
    count ++; 
  };

  someInstance.pop = function(){
    //check size to see if it's greater 0
    if (count > 0) {  
      count --;
    }
    var result = storage[count];
    delete storage[count];
    return result; 
  };

  someInstance.size = function(){
    return count; 
  };

  return someInstance;
};
