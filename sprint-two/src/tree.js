var Tree = function(value){
	// creates newTree object
	var newTree = {};
	// assigning key value value to newTree
	newTree.value = value;
	// assign children key an empty array to newTree
	newTree.children = []; 
	// gives newTree methods stored in treeMethods
	_.extend(newTree, treeMethods);
	// return newTree
	return newTree;
};

//creating object of treeMethods to store methods 
var treeMethods = {};

// storing addChild method to treeMethods 
treeMethods.addChild = function(value){
	// creates a new tree using Tree function and push it to children array
	this.children.push(Tree(value));
};

// storing contains method to treeMethods 
treeMethods.contains = function(target){
	// check if main tree has target value
	// if main tree does not have target, check children (if any)
	if (this.value !== target) {
		//check if main tree has children
		if (this.children.length > 0) {
			// if main tree has children, check children for target value with child's value
			// also check child for children
			// mapped returns an array of booleans indicating if any children has target value
			var mapped = _.map(this.children, function(val){
				return val.contains(target);  
			});
			// check mapped for true and return it
			return _.some(mapped);
		}
		else {
			return false;
		}
	}
	else {
		return true;
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 	- addChild = constant time
 	- contains = geometric/polynomial
 */
