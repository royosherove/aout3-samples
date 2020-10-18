const fetch = require("node-fetch");

const isWebsiteAliveWithCallback = (callback) => {
  const website = "http://example.com";
  fetch(website)
    .then((response) => {
      if (!response.ok) {
        //how can we simulate this network issue?
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.text())
    .then((text) => {
      if (text.includes("illustrative")) {
        callback({ success: true, status: "ok" });
      } else {
        //how can we test this path?
        callback({ success: false, status: "text missing" });
      }
    })
    .catch((err) => {
      //how can we test this exit point?
      callback({ success: false, status: err });
    });
};
const isWebsiteAliveWithAsyncAwait = async () => {
  try {
    const resp = await fetch("http://example.com");
    if (!resp.ok) {
      throw resp.statusText;
    }
    const text = await resp.text();
    const included = text.includes("illustrative");
    if (included) {
      return { success: true, status: "ok" };
    }
    throw "text missing";
  } catch (err) {
    throw { success: false, status: err };
  }
};

module.exports = {
  isWebsiteAliveWithCallback,
  isWebsiteAliveWithAsyncAwait,
};
