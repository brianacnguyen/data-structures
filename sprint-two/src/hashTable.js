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
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
