


// ----------------------------------
// class Node
// ----------------------------------
class Node
{
	var from = "";
	var to = "";
	var latency = 0;

	function Node(x,y,t){
		this.from = x;
		this.to = y;
		this.latency = t;
	}
}
// ----------------------------------
// class Graph
// ----------------------------------
class Graph
{
	var connections = [];
	var count = 0;

	function Graph(){
		this.count = 0;
		this.connections = [];
	}
	
	function addConnection(node){
		this.connection[node.from].push(node);
		this.count++;
	}

	function print(){
		var data = "Graph";
		for (var i=0;i<this.connection.length;i++){
			data = data + "  " + this.connection[].from;
		}
		alert(data);
	}
	
}
// ----------------------------------

