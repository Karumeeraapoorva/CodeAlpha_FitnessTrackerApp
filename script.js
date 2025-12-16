const stepsEl = document.getElementById("steps");
const caloriesEl = document.getElementById("calories");
const workoutEl = document.getElementById("workout");

const stepsInput = document.getElementById("stepsInput");
const caloriesInput = document.getElementById("caloriesInput");
const workoutInput = document.getElementById("workoutInput");
const addBtn = document.getElementById("addBtn");

const historyDiv = document.getElementById("history");

// Get today date
function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

// Load history
function loadHistory() {
  historyDiv.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("fitnessData")) || [];

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
      <strong>${item.date}</strong><br>
      Steps: ${item.steps},
      Calories: ${item.calories},
      Workout: ${item.workout} min
    `;
    historyDiv.prepend(div);
  });

  if (data.length > 0) {
    const latest = data[data.length - 1];
    stepsEl.textContent = latest.steps;
    caloriesEl.textContent = latest.calories;
    workoutEl.textContent = latest.workout;
  }
}

// Save today data
addBtn.addEventListener("click", () => {
  const steps = stepsInput.value || 0;
  const calories = caloriesInput.value || 0;
  const workout = workoutInput.value || 0;

  const today = getTodayDate();
  let data = JSON.parse(localStorage.getItem("fitnessData")) || [];

  // Remove today if already exists
  data = data.filter(item => item.date !== today);

  data.push({
    date: today,
    steps,
    calories,
    workout
  });

  localStorage.setItem("fitnessData", JSON.stringify(data));

  stepsInput.value = "";
  caloriesInput.value = "";
  workoutInput.value = "";

  loadHistory();
});

loadHistory();
