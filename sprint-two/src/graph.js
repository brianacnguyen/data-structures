//Graph Solution
// Instantiate a new graph
var Graph = function(){
	this.nodeStorage = {};
};
/*
- consisted of nodes (or vertices) and edges(arcs) that connect the nodes
- not hierarchical
- can be undirected (relationship between 2 nodes = symmetrical) or directed
- we will be implemented undirected
- pseudoclassical style
- similar to how a web works
*/
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	this.nodeStorage[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
	var result = false; 
	for (var key in this.nodeStorage) {
		if (key === node) {
			result = true;
		}
	}
	return result; 
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	//takes node and removes from graph(if present)
	//all edges connected to node are removed too
	for (var key in this.nodeStorage){
		if (key === node){
			delete this.nodeStorage[node];
		}
	}
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
	for (var key in this.nodeStorage){
		if (key === fromNode){
			if (this.nodeStorage[fromNode].indexOf(toNode) >= 0) {
				return true; 
			}
			else {
				return false;
			} 
		}
	}
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){ //fromNode = penguins, toNode = puppies
	for (var key in this.nodeStorage){
		if (key === fromNode){
			this.nodeStorage[fromNode].push(toNode); //{penguins: ['puppies']}
		}
		else if (key === toNode){
			this.nodeStorage[toNode].push(fromNode); //{puppies: ['penguins']}
		}
	}
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var key in this.nodeStorage){
		if (key === fromNode){
			var index = this.nodeStorage[fromNode].indexOf(toNode); 
			this.nodeStorage[fromNode].splice(index,1); 
		}
		else if (key === toNode){
			var index = this.nodeStorage[toNode].indexOf(fromNode); 
			this.nodeStorage[toNode].splice(index, 1);
		}
	}

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
	for (var key in this.nodeStorage) {
		cb(key); 
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



