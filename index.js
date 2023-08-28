document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
    loadComponent('components/navbar.html', 'navbar-placeholder');
    loadComponent('components/starsbg.html', 'starsbg-placeholder');
});

function loadComponent(url, placeholderId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(placeholderId).innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}


//Handwritting
var vara = new Vara(
    "#welcome", "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Pacifico/PacificoSLO.json", [
    {
        text: "Bienvenido/a",
        fontSize: 48,
        strokeWidth: 0.5,
        color: "white",
        id: "",
        duration: 3000,
        textAlign: "center",
        autoAnimation: true,
        queued: true,
        delay: 0,
        letterSpacing: 0
    }
    ], {
    fontSize: 24,
    strokeWidth: 0.5,
    duration: 2000,
    textAlign: "left",
    autoAnimation: true,
    queued: true,
    letterSpacing: 0
    }
);


vara.ready(function() {});