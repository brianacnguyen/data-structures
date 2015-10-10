//stores key value pairs using hashing function
//hashing function translates keys into numerical indices located within a fixed block of memory
//only increase size in memory when necessary
//reduce size in memory when possible
//great for contact list you add/remove over time
//pseudoclassical style
//1st play with helper functions to get sense
//use the provided hash function to convert key to array index. try interact with it from console first
//limitedarray helper is provided. use it to store all inserted values. try interact with it from console first
//using hashtable, refactor set implementation from above to run in constant time
//hash helper
//get = get storage using numeric value
var HashTable = function(){
	//new object with limit property of 8
	//same object with storage property consisting of array with 8 indices
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i,[]);
  };
};
//[4,56,[7,43],8,98,[8,3],4,3]
//k = key/ the string value that we want to insert into the hash table
//v = value
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //returns the numeric value of the key(string)
  var currentArray = this._storage.get(i);
  var test = _.some(_.map(currentArray, function(array) {
    return k === array[0];
  }));
  if (!(currentArray.length) || !test){
    currentArray.push([k,v]);
  }
  else {
    if (test) {
      for(var z = 0; z < currentArray.length; z++){
        if(k === currentArray[z][0]){
          currentArray[z][1] = v;
        } 
      }
    } 
  }
/*  if (this._keyStorage.indexOf(k) < 0) {
    this._keyStorage.push(k);
    this._storage.get(i).push(v);
  }
  else if (this._keyStorage.indexOf(k) >= 0) {
    this._storage.get(i)[0] = v; 
  }*/
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentArray = this._storage.get(i);
  for(var z = 0; z < currentArray.length; z++){
    if(k === currentArray[z][0]){
      return currentArray[z][1];
    } 
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentArray = this._storage.get(i);
  for(var z = 0; z < currentArray.length; z++){
    if(k === currentArray[z][0]){
      currentArray[z][1] = null;
    } 
  }
};
 
//if each index in the array is empty, then we will insert a new array instantly
//when we insert something, we would set/push into the created array at the index
//when we retrieve we will get the first value
//if...

/*
 * Complexity: What is the time complexity of the above functions?
 */
