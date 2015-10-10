var Set = function(){
	// create an object name set and delegating it to setPrototype
	var set = Object.create(setPrototype);
	// create key of 'storage' with a value of an empty object in set 
	set._storage = {};
	//return set
	return set;
};
//create setPrototype to hold methods
var setPrototype = {};

//storing add method to setPrototype
setPrototype.add = function(item){
	//takes any string and adds to the set
	this._storage[item] = item;
};

//storing contains methodto setPrototype
setPrototype.contains = function(item){
	//take string and returns a boolean if can be found
	return _.contains(this._storage, item);
};

//storing remove method to setPrototype
setPrototype.remove = function(item){
	//takes string and removes it from set(if present)
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 	constant time
 */
