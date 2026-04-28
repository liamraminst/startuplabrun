function scrollToChecklist() {
  document.getElementById("checklist").scrollIntoView({
    behavior: "smooth"
  });
}

function checkProgress() {
  const checkboxes = document.querySelectorAll(".checklist input");
  let checked = 0;

  checkboxes.forEach(box => {
    if (box.checked) {
      checked++;
    }
  });

  const result = document.getElementById("result");

  if (checked === 5) {
    result.textContent = "You are ready to run smart today.";
    result.style.color = "green";
  } else if (checked >= 3) {
    result.textContent = "Almost ready. Check the missing safety steps first.";
    result.style.color = "orange";
  } else {
    result.textContent = "Slow down. Complete more safety steps before running.";
    result.style.color = "red";
  }
}
