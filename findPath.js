


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


// ------------------------------
// Find path function:
// recursive function to find the 
// path between two nodes
// ------------------------------

function findPath(graph,X,Y,T)
{

	if (X==Y)
	{
		alert(X);
		return;
	}
	else
	{
		var connections = graph.connections[X];
		for (var i=0;i<connections.length;i++){
			var next = connections[i].to;
			if (next == Y){

				alert(X+"-->");
			}
			else
			{
				// call back
				findPath(graph,next,Y,T);
				
			}
		}

	}

}
