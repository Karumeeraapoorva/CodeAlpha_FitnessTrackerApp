const stepsEl = document.getElementById("steps");
const caloriesEl = document.getElementById("calories");
const workoutEl = document.getElementById("workout");

const stepsInput = document.getElementById("stepsInput");
const caloriesInput = document.getElementById("caloriesInput");
const workoutInput = document.getElementById("workoutInput");

const addBtn = document.getElementById("addBtn");

function loadData() {
  stepsEl.textContent = localStorage.getItem("steps") || 0;
  caloriesEl.textContent = localStorage.getItem("calories") || 0;
  workoutEl.textContent = localStorage.getItem("workout") || 0;
}

addBtn.addEventListener("click", () => {
  if (stepsInput.value !== "") {
    localStorage.setItem("steps", stepsInput.value);
  }

  if (caloriesInput.value !== "") {
    localStorage.setItem("calories", caloriesInput.value);
  }

  if (workoutInput.value !== "") {
    localStorage.setItem("workout", workoutInput.value);
  }

  loadData();

  stepsInput.value = "";
  caloriesInput.value = "";
  workoutInput.value = "";
});

loadData();
