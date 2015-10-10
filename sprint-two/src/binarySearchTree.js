var BinarySearchTree = function(value){
	//creating tree object that stores value, left, and right tree
	var tree = {value: value, left: null, right: null};
	//adding searchTreeMethods to tree object
	_.extend(tree, searchTreeMethods);
	//return tree 
	return tree;
};

var searchTreeMethods = {}; 
//adding insert method to searchTreeMethods
searchTreeMethods.insert = function(val,branch){
	// if branch is not defined, use current branch (main branch)
	branch = (branch === undefined) ? this : branch;
	// if target value (val) is less than the value of the current branch, check left 
	if (val < branch.value) {
		// if there is no left tree, create left tree
		if (branch.left === null) {
			branch.left = BinarySearchTree(val,branch.left);
		}
		// if there is already a left tree, compare again and insert accordingly
		else {
			branch.insert(val,branch.left);
		}
	}
	// if target value (val) is greater than the value of the current branch, check right
	else if (val > branch.value) {
		// if there is no right tree, create right tree
		if (branch.right === null) { 
			branch.right = BinarySearchTree(val,branch.right);
		}
		// if there is already a right tree, compare again and insert accordingly
		else {
			branch.insert(val,branch.right);	
		}
	}
};
//adding contains method to searchTreeMethods
searchTreeMethods.contains = function(target, branch){
	// if branch is not defined, use current branch (main branch)
	branch = (branch === undefined) ? this : branch;
	// declaring result var to store result and return later
	var result = []
	// test if current branch has value and push to result
	var test = (branch.value === target)
	result.push (test); 
	// if target is less than branch value and there is a left branch, check left branch's children and push to result
	if (target < branch.value && branch.left !== null) {
		var leftResult = branch.contains(target, branch.left);
		result.push(leftResult);	
	}
	// if target is greater than branch value and there is a right branch, check right branch's children and push to result
	else if (target > branch.value && branch.right !== null) {
		var rightResult = branch.contains(target, branch.right);
		result.push(rightResult);
	}
	//check if there is a true in the result and return
	result = _.some(result); 
	return result;
};
//adding depthFirstLog method to searchTreeMethods
searchTreeMethods.depthFirstLog = function(func,branch){
	// if branch is not defined, use current branch (main branch)
	branch = (branch === undefined) ? this : branch;
	// declaring result var to store result and return later
	var result = []; 
	// use callback on value of first branch 
	result.push(func(branch.value));
	//if there is a left branch, use callback or left branch and its children 
	if (branch.left !== null) {
		var leftResult = branch.depthFirstLog(func, branch.left);
		result.push(leftResult);
	}
	//if there is a right branch, use callback or right branch and its children 
	else if (branch.right !== null) {
		var rightResult = branch.depthFirstLog(func, branch.right);
		result.push(rightResult);
	}
	//return result array with callbacks of all values
	return result; 

};



/*
 * Complexity: What is the time complexity of the above functions?
 	logarithmic
 */
