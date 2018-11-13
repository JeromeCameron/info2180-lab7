window.onload = function(){
            
        let lookup = document.getElementById("lookup");
        let httpRequest;
    
        lookup.addEventListener("click", makeRequest);
            
        function makeRequest(){
            let lookup = document.querySelector("input").value;
            httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = request;
            httpRequest.open('GET', "/world.php?country=" + lookup, true);
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