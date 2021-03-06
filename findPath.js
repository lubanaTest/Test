// ----------------------------------
// class Node
// ----------------------------------
class Node 
{
	
	constructor(x,y,t){
		this.from = x;
		this.to = y;
		this.latency = parseInt(t);
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
		x=x.trim(); 
		this.devices.push(x);
		if (!this.connections[x])
		this.connections[x] = [];
	};

	Graph.prototype.addConnection = function(node) {
		this.connections[node.from].push(node);
		this.count++;
	};

	Graph.prototype.print = function() {
		var data = "Graph";
		 
		for (var i=0;i<this.devices.length;i++){
			
			data = data + " Device " + this.devices[i] + "-->";
			
			for (var j=0;j<this.connections[this.devices[i]].length;j++){
			data = data  + this.connections[this.devices[i]][j].to+ " , ";
			}
			data = data +"\n";
		}
		alert(data);
	};



// ----------------------------------

function readCSV(callback)
{
	
	var graph = new Graph();
	
	var fileUpload = document.getElementById("csv");
	var reader = new FileReader();
		
	reader.onload = function (e) {
						
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
			if(x) x= x.trim();
			if(y) y= y.trim();		
			
			
			if (x!="") {
				graph.addDevice(x);				 
				var node = new Node(x,y,t);
				graph.addConnection(node);
				
			}
			
			
			// -------------------------------
			
			
		}
		callback(graph); 
		 
	};
	
	reader.onerror = function (e){
		if(e.target.error.name == "NotReadableError") {
			alert("Canno't read file !");
		}
		
	};
	
	reader.readAsText(fileUpload.files[0]);
	
	return graph;
}
// ------------------------------


// ------------------------------
// Find path function:
// recursive function to find the 
// path between two nodes
// ------------------------------

function findPath(graph,X,Y,T,MAX)
{
	 
	var path = "";

	if (X==Y)
	{		 
		path = X;
		return path;
	}
	else
	{
		var connections = graph.connections[X];	
		 
		if (connections){
			 
		for (var i=0;i<connections.length;i++){
			var next = connections[i].to;
			 
			if (next == Y){
				T = T+connections[i].latency;
				// Check MAX
				if (T>MAX)
				{
					T = T-connections[i].latency;					
				}
				else
				{
					path = path+X+" --> "+Y+" * "+T+" *";
					return path ;
				}
			}
			else
			{
				// call back
				T = T+connections[i].latency;
				if (T>MAX)
				{
					T = T-connections[i].latency;					
				}
				else
				{
					path = path+X+" --> "+next+ " * "+T+" *"+" \n";
					path = path  + findPath(graph,next,Y,T);
					return path;
				}
				
			}
		}
		}
		else
		{
			// call back
			path = "Path not found";
			return path;
		}

	}
	path = "Path not found";
	return path;
}
