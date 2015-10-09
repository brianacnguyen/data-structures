var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods); 
  queueMethods.dqCount = 0;
  queueMethods.qCount = 0;
  queueMethods.sizeCount = 0; 
  return someInstance; 
};

var queueMethods = {};
queueMethods.enqueue = function(value){
	this[this.qCount] = value;
	this.sizeCount++;
	this.qCount++;
};
queueMethods.dequeue = function(){
	var result = this[this.dqCount];
	delete this[this.dqCount];
	if (this.sizeCount > 0) {
		this.sizeCount --;
	}
	this.dqCount ++;
	return result; 
};
queueMethods.size = function(){
	return this.sizeCount;
}; 



