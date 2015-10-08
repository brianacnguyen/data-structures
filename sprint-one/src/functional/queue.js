var Queue = function(){
  var someInstance = {};
  var sizeCount = 0;
  var qCount = 0; 
  var dqCount = 0;
  //second count variable that starts at 0
  // every time an item is dequeued second count gets incremented
  //second count is used to get the index

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[qCount] = value; 
    sizeCount ++;
    qCount ++; 
  };

  someInstance.dequeue = function(){
    var result = storage[dqCount];
    delete storage[dqCount];
    if(sizeCount > 0){
      sizeCount --;
    }
    dqCount ++; 
    return result; 
  };

  someInstance.size = function(){
    return sizeCount;
  };

  return someInstance;
};
