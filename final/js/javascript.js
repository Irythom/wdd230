function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

document.querySelector('#lastmod').innerHTML = `${document.lastModified}`;
document.getElementById("year").innerHTML = new Date().getFullYear();