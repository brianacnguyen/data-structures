//trees that can only have 0,1,or 2 children
//recursive
//1 child will always have value less than parent value and 1 will always have greater than
//great for dictionary of all english words
//need a left property, a binary search tree where all values are lower than current value
//need right = higher
//need insert() accepts value and places in the tree in the correction position
//need contains()
//need depthFirstLog() accepts callback and executes it on every value contained in the tree
//Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST 
//Profile this against the same operation using an array.
var BinarySearchTree = function(value){
	var tree = {value: value, left: null, right: null};
	_.extend(tree, searchTreeMethods);
	return tree;
};

var searchTreeMethods = {}; 
searchTreeMethods.insert = function(val,branch){
	branch = (branch === undefined) ? this : branch;
	if (val < branch.value) {
		if (branch.left === null) {
			branch.left = BinarySearchTree(val,branch.left);
		}
		else {
			branch.insert(val,branch.left);
		}
	}
	else if (val > branch.value) {
		if (branch.right === null) { 
			branch.right = BinarySearchTree(val,branch.right);
		}
		else {
			branch.insert(val,branch.right);	
		}
	}
};
searchTreeMethods.contains = function(target, branch){
	branch = (branch === undefined) ? this : branch;
	var result = []
	var test = (branch.value === target)
	result.push (test); 
	if (target < branch.value && branch.left !== null) {
		var leftResult = branch.contains(target, branch.left);
		result.push(leftResult);	
	}
	else if (target > branch.value && branch.right !== null) {
		var rightResult = branch.contains(target, branch.right);
		result.push(rightResult);
	}
	result = _.some(result); 
	return result;
};
searchTreeMethods.depthFirstLog = function(func,branch){
	branch = (branch === undefined) ? this : branch;
	var result = []; 
	result.push(func(branch.value));
	if (branch.left !== null) {
		var leftResult = branch.depthFirstLog(func, branch.left);
		result.push(leftResult);
	}
	else if (branch.right !== null) {
		var rightResult = branch.depthFirstLog(func, branch.right);
		result.push(rightResult);
	}
	return result; 

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
