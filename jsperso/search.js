window.onload = function() {
    document.getElementById('search').addEventListener('keyup', function(e) {
        var recherche = this.value.toLowerCase();
        console.log(" recherce :" + recherche )
        var planetes = document.querySelectorAll('#listPlanete ul li a ');
        console.log(planetes)
        var pla = document.querySelectorAll('#listPlanete ul li');
        Array.prototype.forEach.call(pla, function(document) {
            // On a bien trouvé les termes de recherche.
            console.log( document.innerHTML.toLowerCase().indexOf(recherche) )
            if (document.innerHTML.toLowerCase().indexOf(recherche) > -1) {
                document.classList.add("visible");
                document.classList.remove("novisible");
            } else {
                document.classList.add("novisible");
                document.classList.remove("visible");
            }
        });
        var length = document.getElementsByClassName("visible").length;
        //document.getElementById("error").innerHTML = length;
       /* if (length === 0) {
            document.getElementById("error").style.display = "block";
        } else {
            document.getElementById("error").style.display = "none";
        }*/
    });
};
