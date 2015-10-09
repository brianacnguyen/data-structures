//set contains values in no particular order
//eg: raffle and picking out a winner 
//prototypal style (Object.create)
//sets should not use up any more space than necessary
//once a value is added to a set, adding it a second time should not increase the size of the set
//sets should handle only string values.
var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	//takes any string and adds to the set
	this._storage[item] = item;
};

setPrototype.contains = function(item){
	//take string and returns a boolean if can be found
	return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
	//takes string and removes it from set(if present)
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
