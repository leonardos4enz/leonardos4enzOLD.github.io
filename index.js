

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

