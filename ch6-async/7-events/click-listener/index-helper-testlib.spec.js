/**
 * @jest-environment jest-environment-jsdom-sixteen
 */
//(the above is required for window events)
const fs = require("fs");
const path = require("path");
const { fireEvent } = require("@testing-library/dom");
require("./index-helper.js");
const { findByText } = require("@testing-library/dom");
const { queryByText } = require("@testing-library/dom");
const { getByText } = require("@testing-library/dom");
const { getByTestId } = require("@testing-library/dom");

const loadHtml = (fileRelativePath) => {
  const filePath = path.join(__dirname, "index.html");
  const innerHTML = fs.readFileSync(filePath);
  document.documentElement.innerHTML = innerHTML;
  return document.documentElement;
};

describe("index helper", () => {
  test("vanilla button click triggers changing the result on the page", () => {
    const docElem = loadHtml("index.html");
    const button = getByText(docElem, "click me", { exact: false });
    const resultDiv = getByText(docElem, "waiting", { exact: false });
    fireEvent.load(window);

    fireEvent.click(button);

    //wait until true ot timeout in 1 sec
    expect(findByText(docElem, "clicked", { exact: false })).toBeTruthy();
  });
});
