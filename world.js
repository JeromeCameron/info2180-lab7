window.onload = function(){
            
        let button = document.getElementById("lookup");
        let lookup;
        let httpRequest;
        
        
        button.addEventListener("click", function(){
            
            let selectAll = document.getElementById("check").checked;
            
            if(selectAll == true){
                lookup ="country=" + document.querySelector("input").value + "&all=true";
                makeRequest();
            }else{
                lookup ="country=" + document.querySelector("input").value  + "&all=false";
                makeRequest();
            }
        })
            
        function makeRequest(){
            httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = request;
            httpRequest.open('GET', "/world.php?" + lookup, true);
            httpRequest.send();
        }
        
        function request(){
            if (httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200){
                    document.getElementById('result').innerHTML = httpRequest.responseText;
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }
            
};