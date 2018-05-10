function loadRepo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            results = JSON.parse(this.responseText);
            for(var i = 0; i < results.length; i++){
                console.log(results[i].name);

                var ul = document.getElementById("Repositories");
                var li = document.createElement("LI");
                var a = document.createElement("a");

                li.appendChild(document.createTextNode(results[i].name));

                a.appendChild(li);
                a.setAttribute("href", results[i].html_url);
                ul.appendChild(a);

            }
        }
    }
    xhttp.open("GET", "https://api.github.com/users/robertlopez/repos", true)
    xhttp.send();
}