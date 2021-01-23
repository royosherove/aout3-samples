/**
 * @jest-environment jsdom
 */
//(the above is required for window events)
const fs = require("fs");
const path = require("path");
require("./index-helper.js");

const loadHtml = (fileRelativePath) => {
  const filePath = path.join(__dirname, "index.html");
  const innerHTML = fs.readFileSync(filePath);
  document.documentElement.innerHTML = innerHTML;
};

describe("index helper", () => {
  test("button click triggers changing the result on the page", () => {
    loadHtml("index.html");
    window.dispatchEvent(new Event("load"));

    const button = document.getElementById("myButton");
    const resultDiv = document.getElementById("result");

    button.click();

    expect(resultDiv.innerText).toBe("Clicked!");
  });
});
