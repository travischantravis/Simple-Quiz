const radioInputs = document.querySelectorAll('input[type = "radio"]');
const multipleChoiceBtns = document.querySelectorAll(
  ".multiple-choice-btn div"
);

function radioChange(e) {
  console.log(e);
}

for (let i = 0; i < radioInputs.length; i++) {
  radioInputs[i].addEventListener("change", radioChange);
}
