


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
function Graph(){
		this.count = 0;
		this.connections = [];
	}
	
	Graph.prototype.addConnection = function(node) {
		this.connection[node.from].push(node);
		this.count++;
	};

	Graph.prototype.print = function() {
		var data = "Graph";
		alert(this.connection.length);
		for (var i=0;i<this.connection.length;i++){
			//data = data + "  " + this.connection[i].from;
		}
		alert(data);
	};
	

// ----------------------------------

