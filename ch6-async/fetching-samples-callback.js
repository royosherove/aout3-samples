const fetch = require("node-fetch");

const isWebsiteAliveWithCallback = (cb) => {
  fetch("http://example.com")
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp;
    })
    .then((resp) => resp.text())
    .then((text) => {
      onFetchFinished(text, cb);
    })
    .catch((err) => {
      onFetchError(err);
      cb(err);
    });
};

const onFetchFinished = (text, cb) => {
  if (text.includes("illustrative")) {
    cb(true);
  } else {
    cb(false);
  }
};

const onFetchError = (err) => {
  console.log(err);
};

module.exports = {
  isWebsiteAliveWithCallback,
  onFetchFinished,
};
