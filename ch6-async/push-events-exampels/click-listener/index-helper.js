console.log("LOADEDDLDLDLDLDLDLDLDL");

window.addEventListener("load", () => {
  document
    .getElementById("myButton")
    .addEventListener("click", onMyButtonClick);
  console.log("yup");
});

function onMyButtonClick() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "Clicked!";
}
