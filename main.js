
window.addEventListener('load', function () {

   /* document.getElementById("testBtn").onclick = function () {
        alert('hello!');
    };*/

    var modal = document.getElementById("addModal");
    var btn = document.getElementById("add-person");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
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

});