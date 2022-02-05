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

let banner;
const currentDay = new Date().getDay();

switch(currentDay) {
  case 0:
    banner = ".bannertext {display: none;}";
    break;
 case 1:
    banner = ".bannertext {display: block;}";
    break;
 case 2:
    banner = ".bannertext {display: block;}";
    break;
 case 3:
    banner = ".bannertext {display: none;}";
    break;
 case 4:
   banner = ".bannertext {display: none;}";
    break;
 case 5:
    banner = ".bannertext {display: none;}";
    break;
 case 6:
    banner = ".bannertext {display: none;}";
    break;
}

document.getElementById("bannertextstyle").innerHTML = banner;