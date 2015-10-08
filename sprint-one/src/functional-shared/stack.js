var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // need push, pop, size 
  var someInstance = {count: 0};
  _.extend(someInstance, stackMethods);
  return someInstance; 
};

var stackMethods = {
  push: function(value){
  	this[this.count] = value;
  	this.count++;
  },

  pop: function(){
  	if (this.count > 0) {
  		this.count--; 
  	}
  	var result = this[this.count];
  	delete this[this.count];
  	return result;
  },

  size: function(){
  	return this.count;  
  }

};


