


// ----------------------------------
// class Node
// ----------------------------------
class Node
{
	
	constructor(x,y,t){
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
	
	constructor(){
		this.count = 0;
		this.connections = [];
	}
	
	addConnection(node){
		this.connection[node.from].push(node);
		this.count++;
	}

	print(){
		var data = "Graph";
		for (var i=0;i<this.connection.length;i++){
			data = data + "  " + this.connection[].from;
		}
		alert(data);
	}
	
}
// ----------------------------------

