const stepsEl = document.getElementById("steps");
const caloriesEl = document.getElementById("calories");
const workoutEl = document.getElementById("workout");

const stepsInput = document.getElementById("stepsInput");
const caloriesInput = document.getElementById("caloriesInput");
const workoutInput = document.getElementById("workoutInput");
const addBtn = document.getElementById("addBtn");

/* LOAD DATA ON PAGE LOAD */
function loadData() {
  stepsEl.textContent = localStorage.getItem("steps") ?? 0;
  caloriesEl.textContent = localStorage.getItem("calories") ?? 0;
  workoutEl.textContent = localStorage.getItem("workout") ?? 0;
}

/* SAVE & UPDATE DATA */
addBtn.addEventListener("click", () => {
  if (stepsInput.value.trim() !== "") {
    localStorage.setItem("steps", stepsInput.value);
  }

  if (caloriesInput.value.trim() !== "") {
    localStorage.setItem("calories", caloriesInput.value);
  }

  if (workoutInput.value.trim() !== "") {
    localStorage.setItem("workout", workoutInput.value);
  }

  loadData();

  stepsInput.value = "";
  caloriesInput.value = "";
  workoutInput.value = "";
});

loadData();
