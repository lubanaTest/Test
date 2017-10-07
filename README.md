# Test
Developer Test

<script>
  
  function validateForm() {
  }
  
  // ---------------------
  
  
  function submitForm() {
     var csv = document.forms["myForm"]["csv"].value;
     // read CSV file content and save it to Graph
-    
+    var graph = readCSV(); 
   
   // Get entered data
   var x = document.forms["myForm"]["from"].value;
   var y = document.forms["myForm"]["to"].value;
   var t = document.forms["myForm"]["time"].value;
   
-  
+  findPath(graph,x,y,t);
   
      
   } 
</script>
