var HashTable = function(){
  // sets limit to 8
  this._limit = 8;
  //calls the LimitArray function using 8 as the limit 
  this._storage = LimitedArray(this._limit);
  //iterates over the limited array and created a new empty array(bucket) at each index
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i,[]);
  };
};
HashTable.prototype.insert = function(k, v){
  //turn the key (k) into a numeric value and storing it into i
  var i = getIndexBelowMaxForKey(k, this._limit);
  //gets the current bucket and stores the value into currentBucket
  var currentBucket = this._storage.get(i);
  //checks to see if the current bucket has key(k) to be inserted and store it into test
  var test = _.some(_.map(currentBucket, function(array) {
    return k === array[0];
  }));
  //check to see if bucket is empty
  if (!(currentBucket.length) || !test){
    //if currentBucket is empty push a tuple[k,v] into the currentBucket
    currentBucket.push([k,v]);
  }
  //if currentBucket already has tuples(s)
  else {
    //check currentBucket for key
    if (test) {
      //if test returns true, iterate over currentBucket to find the tuple with similar key and assign new value
      for(var z = 0; z < currentBucket.length; z++){
        if(k === currentBucket[z][0]){
          currentBucket[z][1] = v;
        } 
      }
    } 
  }
};

HashTable.prototype.retrieve = function(k){
  //turn the key (k) into a numeric value and storing it into i
  var i = getIndexBelowMaxForKey(k, this._limit);
  //gets the current bucket and stores the value into currentBucket
  var currentBucket = this._storage.get(i);
  //iterating over currentBucket to find tuple with key(k) and return value
  for(var z = 0; z < currentBucket.length; z++){
    if(k === currentBucket[z][0]){
      return currentBucket[z][1];
    } 
  }
};

HashTable.prototype.remove = function(k){
  //turn the key (k) into a numeric value and storing it into i
  var i = getIndexBelowMaxForKey(k, this._limit);
  //gets the current bucket and stores the value into currentBucket
  var currentBucket = this._storage.get(i);
  //iterating over currentBucket to find tuple with key(k) and change value to null
  for(var z = 0; z < currentBucket.length; z++){
    if(k === currentBucket[z][0]){
      currentBucket[z][1] = null;
    } 
  }
};
 

/*
 * Complexity: What is the time complexity of the above functions?
  linear
 */
