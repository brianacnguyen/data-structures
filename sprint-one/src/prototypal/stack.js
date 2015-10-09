var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	var someInstance = Object.create(stackMethods);
  	someInstance.count = 0;
  	return someInstance; 
};
var stackMethods = {}; 
stackMethods.push = function(value){
  	this[this.count] = value;
  	this.count++;
};

stackMethods.pop = function(){
  	if (this.count > 0) {
  		this.count --; 
  	}
  	var result = this[this.count];
  	delete this[this.count];
  	return result;
};

stackMethods.size = function(){
	return this.count;
};




