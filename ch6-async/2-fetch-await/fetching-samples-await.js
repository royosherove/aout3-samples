const fetch = require("node-fetch");

const isWebsiteAlive = async () => {
  try {
    const resp = await fetch("http://example.com");
    if (!resp.ok) {
      throw resp.statusText;
    } else {
      const text = await resp.text();
      return processFetchContent(text);
    }
  } catch (err) {
    throw processFetchError(err);
  }
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
  isWebsiteAlive,
  processFetchContent,
  processFetchError,
};
