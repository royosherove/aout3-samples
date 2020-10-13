const fetch = require("node-fetch");

const throwOnInvalidResponse = (resp) => {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp;
};

const isWebsiteAliveWithCallback = (cb) => {
  fetch("http://example.com")
    .then(throwOnInvalidResponse)
    .then((resp) => resp.text())
    .then((text) => {
      onFetchSuccess(text, cb);
    })
    .catch((err) => {
      onFetchError(err);
      cb(err);
    });
};

//Entry Point
const onFetchSuccess = (text, cb) => {
  if (text.includes("illustrative")) {
    cb(true);
  } else {
    cb(false);
  }
};

//Entry Point
const onFetchError = (err) => {
  console.log(err);
  //more functionality goes here
};

module.exports = {
  isWebsiteAliveWithCallback,
  onFetchFinished: onFetchSuccess,
};
