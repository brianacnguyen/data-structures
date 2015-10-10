var Graph = function(){
	this.nodeStorage = {};
};
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	//sets key node to a new empty array
	this.nodeStorage[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
	//result begins a with a value until the node is found
	var result = false; 
	//iterate through the graph's nodeStorage
	for (var key in this.nodeStorage) {
		//if there is a key that matches node, return true
		if (key === node) {
			result = true;
		}
	}
	//returns the value of result, which gets re-assigned to true when a match is found otherwise returns false
	return result; 
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	//takes node and removes from graph(if present)
	//all edges connected to node are removed too
	//iterate over nodeStorage to see if there is a key that matches node
	for (var key in this.nodeStorage){
		//check to see if a key matches node, if true delete the value stored at node
		if (key === node){
			delete this.nodeStorage[node];
		}
	}
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	//iterate through nodeStorage
	for (var key in this.nodeStorage){
		//check to see if any keys match fromNode
		if (key === fromNode){
			//if a match is found, check to see if the stored value(s) at fromNode equal to toNode and return true
			if (this.nodeStorage[fromNode].indexOf(toNode) >= 0) {
				return true; 
			}
			//if there are no matches found return false
			else {
				return false;
			} 
		}
	}
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){ //fromNode = penguins, toNode = puppies
	//iterate through nodeStorage
	for (var key in this.nodeStorage){
		//check to see if there are any keys that match fromNode
		if (key === fromNode){
			//if a match is found, push toNode into the empty array stored in fromNode
			this.nodeStorage[fromNode].push(toNode); //{penguins: ['puppies']}
		}
		//if a key does not match fromNode, check to see if any keys match toNode
		else if (key === toNode){
			//if a match is found, push fromNode into the empty array stored in toNode
			this.nodeStorage[toNode].push(fromNode); //{puppies: ['penguins']}
		}
	}
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
   //iterate over nodeStorage
   	for (var key in this.nodeStorage){
   		//check to see if there are any keys that match fromNode
		if (key === fromNode){
			//get the index of toNode in fromNode and remove it using splice
			var index = this.nodeStorage[fromNode].indexOf(toNode); 
			this.nodeStorage[fromNode].splice(index,1); 
		}
		//if a key does not match fromNode, check to see if any keys match toNode
		else if (key === toNode){
			//get the index of fromNode in toNode and remove it using splice
			var index = this.nodeStorage[toNode].indexOf(fromNode); 
			this.nodeStorage[toNode].splice(index, 1);
		}
	}
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
	//iterates over nodeStorage
	for (var key in this.nodeStorage) {
		//invokes the callback on the key
		cb(key); 
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 	linear
 */



