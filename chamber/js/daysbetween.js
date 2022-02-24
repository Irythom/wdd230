const lastVisitDisplay = document.querySelector("#visits");

const lastvisit = localStorage.getItem("lastvisit");

const factor = 1000 * 60 * 60 * 24;

const daysbetween = Date.now() - lastvisit;

const numberOfDays = daysbetween / factor;
const wholeDays = Math.round(numberOfDays)

if (!lastvisit) lastVisitDisplay.textContent = `This is your first visit!`;
if (lastvisit && wholeDays === 0) {
	lastVisitDisplay.textContent = 'You have already visited today';
} else {
	lastVisitDisplay.textContent = wholeDays;
}

localStorage.setItem("lastvisit", Date.now());