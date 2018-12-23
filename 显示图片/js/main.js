window.onload = function () {
    var img = document.getElementById("img");
    var btn_show = document.getElementById("btn_show");
    var btn_hidden = document.getElementById("btn_hidden");
    btn_show.onclick = function () {
        img.style.display = "block";
    }
    btn_hidden.onclick = function () {
        img.style.display = "none";
    }
}