



function readCSV()
{
	
	var graph = new Graph();
	
	var fileUpload = document.getElementById("csv");
	var reader = new FileReader();
	reader.readAsText(fileUpload.files[0]);
	
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
			
			if (x!=""){
				//var node = new Node(x,y,t);
				//graph.addConnection(node);
				 
			}
			
			
			// -------------------------------
			
			
		}
		return graph;
	}
	
	reader.onerror = function (e){
		if(e.target.error.name == "NotReadableError") {
			alert("Canno't read file !");
		}
		
	}
	
	
}
