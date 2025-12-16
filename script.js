let activities = JSON.parse(localStorage.getItem("activities")) || [];

function addActivity() {
  let activity = document.getElementById("activity").value;
  let calories = document.getElementById("calories").value;

  if (activity === "" || calories === "") {
    alert("Please enter activity and calories");
    return;
  }

  activities.push({ activity, calories });
  localStorage.setItem("activities", JSON.stringify(activities));

  document.getElementById("activity").value = "";
  document.getElementById("calories").value = "";

  displayActivities();
}

function displayActivities() {
  let list = document.getElementById("activityList");
  list.innerHTML = "";

  activities.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.activity} - ${item.calories} kcal`;
    list.appendChild(li);
  });
}

displayActivities();
