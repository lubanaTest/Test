 
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
   
<script type="text/javascript" src="findPath.js"></script>

<script>
  
  function validateForm() {
  
  var csv = document.forms["myForm"]["csv"].value;
  
  var x = document.forms["myForm"]["from"].value;
  var y = document.forms["myForm"]["to"].value;
  var t = document.forms["myForm"]["time"].value;
  
  var graph = new Graph();
   
  graph = readCSV(); 
  alert(graph);
  if(graph){
     graph.print();
  }
  else
  {
  alert("no graph");
  }
  
  //findPath(graph,x,y,t);
  
   } 
</script>

 <body ng-app=""> 
 
 # Test
Developer Test


 <h3>Enter the following information please:</h3>
 
 <form name="myForm">
  <table >
  <tr>
   
   <td >CSV File:</td>
   <td ><input type="file" name="csv" id="csv" onchange="" ng-model="csv" required/>
   <div id="csvError" ng-show="myForm.csv.$untouched">required</div>
   </td>
   
  </tr>
  <tr>
   <td >Device from: </td>
   <td ><input type="text" name="from" ng-model="from" value="A" required>
    <div id="fromError" ng-show="myForm.from.$invalid">required</div></td>
  </tr>
   <tr><td >Device to: </td><td ><input type="text" name="to" value="B"></td></tr>
   <tr><td >Time: </td><td ><input type="text" name="time" value="10"></td></tr>
  
  <tr><td  colspan="2"><input type="button" onclick="validateForm()" value="ok" /></td></tr>
  
  </table>
  
 </form>
 </body>
