


// ----------------------------------
// class Node
// ----------------------------------
class Node
{
	var from = "";
	var to = "";
	var latency = 0;
}
// ----------------------------------
// class Graph
// ----------------------------------
class Graph
{
	var connections = [];
	const var count = 0;

	function Graph(){
	}
	
	function addConnection(node){
		this.connection[node.from].push(node);
		this.count++;
	}
	
}
// ----------------------------------

