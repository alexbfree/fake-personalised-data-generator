
window.addEventListener('load', function () {
    console.log('binding');
    document.getElementById("testBtn").onclick = function () {
        alert('hello!');
    };
});