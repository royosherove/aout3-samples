const fetch = require("node-fetch");

const throwOnInvalidResponse = (resp) => {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp;
};

const isWebsiteAliveWithCallback = (callback) => {
  fetch("http://example.com")
    .then(throwOnInvalidResponse)
    .then((resp) => resp.text())
    .then((text) => {
      onFetchSuccess(text, callback);
    })
    .catch((err) => {
      onFetchError(callback, err);
    });
};

//Entry Point
const onFetchSuccess = (text, callback) => {
  if (text.includes("illustrative")) {
    callback({ success: true, status: "ok" });
  } else {
    callback({ success: false, status: "missing text" });
  }
};

//Entry Point
const onFetchError = (err, callback) => {
  callback({ success: false, status: err });
};

module.exports = {
  isWebsiteAliveWithCallback,
  processFetchSuccess: onFetchSuccess,
  processFetchError: onFetchError,
};
