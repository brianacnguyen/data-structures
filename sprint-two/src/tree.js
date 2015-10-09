var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // needs to be an array containing a number of subtrees 
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	// takes value and sets that as target of node and adds node as a child of the tree 
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){
	// takes value and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
	// applies contains to every node
	// check if node has children
	// if it does, do each function and 
	// newtree = {value: null, children: [{value: 5, children:[]}]}
	// this.contains(target, this.children[i])


	if (this.value !== target) {
		if (this.children.length > 0) {
			var mapped = _.map(this.children, function(val){
				return val.contains(target);  
			})
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
