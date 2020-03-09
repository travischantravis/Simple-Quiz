// File button display file name
document.getElementById("file-btn").onchange = function() {
  console.log(this.value);
  const fileBtn = document.getElementById("file-btn");
  document.getElementById("file-name").innerHTML = this.value;
};
