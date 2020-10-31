const fetch = require("node-fetch");

const isWebsiteAlive = (callback) => {
  fetch("http://example.com")
    .then(throwOnInvalidResponse)
    .then((resp) => resp.text())
    .then((text) => {
      processFetchSuccess(text, callback);
    })
    .catch((err) => {
      processFetchError(err, callback);
    });
};

const throwOnInvalidResponse = (resp) => {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp;
};

//Entry Point
const processFetchSuccess = (text, callback) => {
  if (text.includes("illustrative")) {
    callback(null, { success: true, status: "ok" });
  } else {
    callback(new Error("missing text"));
  }
};

//Entry Point
const processFetchError = (err, callback) => {
  callback(err);
};

module.exports = {
  isWebsiteAlive,
  processFetchSuccess,
  processFetchError,
};
