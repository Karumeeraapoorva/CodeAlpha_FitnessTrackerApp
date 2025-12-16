let steps = localStorage.getItem("steps") || 0;
let calories = localStorage.getItem("calories") || 0;
let workout = localStorage.getItem("workout") || 0;

const stepsEl = document.getElementById("steps");
const caloriesEl = document.getElementById("calories");
const workoutEl = document.getElementById("workout");

function updateUI() {
  stepsEl.textContent = steps;
  caloriesEl.textContent = calories;
  workoutEl.textContent = workout;
}

function addData() {
  const s = Number(document.getElementById("stepsInput").value);
  const c = Number(document.getElementById("caloriesInput").value);
  const w = Number(document.getElementById("workoutInput").value);

  steps += s;
  calories += c;
  workout += w;

  localStorage.setItem("steps", steps);
  localStorage.setItem("calories", calories);
  localStorage.setItem("workout", workout);

  document.getElementById("stepsInput").value = "";
  document.getElementById("caloriesInput").value = "";
  document.getElementById("workoutInput").value = "";

  updateUI();
}

updateUI();
