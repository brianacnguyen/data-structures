//databases 
//algorithm 
//d3js
//Graph Solution
//angular = required
// Instantiate a new graph
var Graph = function(){
};
/*
- consisted of nodes (or vertices) and edges(arcs) that connect the nodes
- not hierarchical
- can be undirected (relationship between 2 nodes = symmetrical) or directed
- we will be implemented undirected
- pseudoclassical style
- need graph class
- similar to how a web works
*/
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){

};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
	//takes node and removes from graph(if present)
	//all edges connected to node are removed too
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



