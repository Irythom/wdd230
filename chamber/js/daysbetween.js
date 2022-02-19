const lastVisitDisplay = document.querySelector("#visits");

const lastvisit = localStorage.getItem("lastvisit");

if (lastvisit !== 0) {
	lastVisitDisplay.textContent = daysbetween;
} else {
	lastVisitDisplay.textContent = `This is your first visit!`;
}

const factor = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;

let numberOfDays = daysbetween / factor;

localStorage.setItem("lastvisit", Date.now());