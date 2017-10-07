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
			var next = connections[X][i].to;
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
