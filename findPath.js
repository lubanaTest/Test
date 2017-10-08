


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
		this.devices = [];
		this.connections = [];
	}
	
	
	Graph.prototype.addDevice = function(x) {
		this.devices.push(x);
		this.connections[x] = [];
	};

	Graph.prototype.addConnection = function(node) {
		this.connections[node.from].push(node);
		this.count++;
	};

	Graph.prototype.print = function() {
		var data = "Graph";
		alert(this.devices.length);
		for (var i=0;i<this.devices.length;i++){
			
			data = data + " d " + this.devices[i];
			for (var j=0;j<this.connections[this.devices[i]].length;j++){
			data = data + " --> " + this.connections[this.devices[i]][j].from;
			}
		}
		alert(data);
	};

/*Graph.prototype.print = function() {
	
  alert(this.devices.map(function(x) {
    return (x + ' -> ' + this.connections[x].from.join(', ')).trim();
  }, this).join(' | '));
};*/

	

// ----------------------------------

function readCSV()
{
	
	var graph = new Graph();
	
	var fileUpload = document.getElementById("csv");
	var reader = new FileReader();
	reader.readAsText(fileUpload.files[0]);
	
	reader.onload = function (e) {
		
		var graph = new Graph();
		
		var text = e.target.result;  
		var rows = text.split("\n");
		

		for (var i = 0; i < rows.length; i++) {
			
			// For each line in the CSV File:
			// insert data into Tree
			// -------------------------------
			
			
			var devices = rows[i].split(",");
			var x = devices[0];
			var y = devices[1];
			var t = devices[2];
			
			graph.addDevice(x);
			
			if (x!=""){
				var node = new Node(x,y,t);
				graph.addConnection(node);
				
			}
			
			
			// -------------------------------
			
			
		}
		graph.print();
		return graph;
	}
	
	reader.onerror = function (e){
		if(e.target.error.name == "NotReadableError") {
			alert("Canno't read file !");
		}
		
	}
	
	return graph;
}


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
