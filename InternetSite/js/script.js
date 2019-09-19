

window.onload = function() {
    
var b = document.getElementById('button');
var t = document.getElementById("text");



    b.onclick = function() {
        
        if(t == "text"){
            var div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = t;
            document.body.append(div);
        }

    }; 
};