const isWebsiteAlive = async (network) => {
  const result = await network.fetchUrlText("http://example.com");
  if (result.ok) {
    const text = result.text;
    return onFetchSuccess(text);
  }
  return Promise.reject(onFetchError(result.text));
};

const onFetchSuccess = (text) => {
  const included = text.includes("illustrative");
  if (included) {
    return { success: true, status: "ok" };
  }
  return { success: false, status: "missing text" };
};

const onFetchError = (err) => {
  return { success: false, status: err };
};

module.exports = {
  isWebsiteAlive,
};
