var modal = document.getElementById("modal");
        var btn1 = document.getElementsByClassName("btn1")[0];
        var btn2 = document.getElementsByClassName("btn2")[0];
        var span = document.getElementsByClassName("close")[0];

        btn1.onclick = function() {
            modal.style.display = "block";
        }

        btn2.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
