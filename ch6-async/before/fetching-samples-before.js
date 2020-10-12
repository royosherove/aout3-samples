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
      if (text.includes("illustrative")) {
        cb(true);
      } else {
        cb(false);
      }
    });
};
const isWebsiteAliveWithAsyncAwait = async () => {
  const resp = await fetch("http://example.com");
  const text = await resp.text();
  return text.includes("illustrative");
};

module.exports = {
  isWebsiteAliveWithCallback,
  isWebsiteAliveWithAsyncAwait,
};
