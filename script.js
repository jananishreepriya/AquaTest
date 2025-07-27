function analyzePH() {
  const value = parseFloat(document.getElementById("phValue").value);
  let score = "Unknown", treatment = "", reuse = "";

  if (isNaN(value) || value < 0 || value > 14) {
    alert("Please enter a valid pH between 1 and 14");
    return;
  }

  if (value >= 6.5 && value <= 8.5) {
    score = "High (Safe)";
    treatment = "Minimal treatment needed. You can filter through sand or use sunlight.";
    reuse = "Great for gardening, cleaning, or toilet flushing.";
  } else if (value >= 5 && value <= 9) {
    score = "Moderate";
    treatment = "Use charcoal/sand filtration before reuse.";
    reuse = "Suitable for floor washing and plant irrigation.";
  } else {
    score = "Low";
    treatment = "Needs natural disinfection and filtration.";
    reuse = "Reuse only after proper treatment. Avoid direct human contact.";
  }

  document.getElementById("scoreText").textContent = score;
  document.getElementById("treatmentText").textContent = treatment;
  document.getElementById("reuseText").textContent = reuse;
  document.getElementById("resultSection").style.display = "block";
}
