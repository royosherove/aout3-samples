const fetch = require("node-fetch");

const isWebsiteAliveWithAsyncAwait = async () => {
  const resp = await fetch("http://example.com");
  if (resp.ok) {
    const text = await resp.text();
    return processFetchContent(text);
  }
  return processFetchError(resp.statusText);
};

//Entry Point
const processFetchContent = (text) => {
  const included = text.includes("illustrative");
  if (included) {
    return { success: true, status: "ok" };
  }
  return { success: false, status: "missing text" };
};

//Entry Point
const processFetchError = (err) => {
  return { success: false, status: err };
};

module.exports = {
  isWebsiteAliveWithAsyncAwait,
  processFetchContent,
  processFetchError,
};
