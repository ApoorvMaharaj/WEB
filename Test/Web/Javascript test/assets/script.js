const myBtn = document.getElementById("myBtn");
        console.log("This is a javascript function")
        myBtn.addEventListener("click", function(e) 
        {
            const name = prompt("I am Apoorv Maharaj. What's your name?");
            console.log(name);
            document.body.innerHTML = "<h2> Nice to meet you, <br><h1>" + name + "</h2><h1>";
        });