var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.dqCount = 0;
  this.qCount = 0;
  this.sizeCount = 0; 
};


Queue.prototype.enqueue = function(value){
	this[this.qCount] = value;
	this.sizeCount++;
	this.qCount++;
};

Queue.prototype.dequeue = function(){
	var result = this[this.dqCount];
	delete this[this.dqCount];
	if (this.sizeCount > 0) {
		this.sizeCount --;
	}
	this.dqCount ++;
	return result; 
};

Queue.prototype.size =function(){
	return this.sizeCount;
};