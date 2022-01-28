function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

document.querySelector('#lastmod').innerHTML = `${document.lastModified}`;
document.getElementById("year").innerHTML = new Date().getFullYear();

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
document.getElementById("header-footer-date").innerHTML = fulldate