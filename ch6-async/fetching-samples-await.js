const fetch = require("node-fetch");

const isWebsiteAliveWithAsyncAwait = async () => {
  const resp = await fetch("http://example.com");
  const text = await resp.text();
  return onFetchFinishedWithoutCallback(text);
};

const onFetchFinishedWithoutCallback = (text) => {
  return text.includes("illustrative");
};

const onFetchErrorWithoutCallback = (err) => {
  console.log(err);
};

module.exports = {
  isWebsiteAliveWithAsyncAwait,
  onFetchFinishedWithoutCallback,
};
