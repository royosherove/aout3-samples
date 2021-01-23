window.addEventListener("load", () => {
  document
    .getElementById("myButton")
    .addEventListener("click", onMyButtonClick);
});

function onMyButtonClick() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = "Clicked!";
}
