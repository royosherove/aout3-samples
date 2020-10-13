const fetch = require("node-fetch");

const isWebsiteAliveWithAsyncAwait = async () => {
  const resp = await fetch("http://example.com");
  if (resp.ok) {
    const text = await resp.text();
    return onFetchSuccess(text);
  }
  onFetchError(resp.statusText);
  return false;
};

//Entry Point
const onFetchSuccess = (text) => {
  return text.includes("illustrative");
};

//Entry Point
const onFetchError = (err) => {
  console.log(err);
  //more behaviors
};

module.exports = {
  isWebsiteAliveWithAsyncAwait,
  onFetchSuccess,
  onFetchError,
};
