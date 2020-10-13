import { INetworkAdapter } from "./INetworkAdapter";

export const isWebsiteAlive = async (network: INetworkAdapter) => {
  const result = await network.fetchUrlText("http://example.com");
  if (result.ok) {
    const text = result.text;
    return onFetchSuccess(text);
  }
  onFetchError(result.text);
  return false;
};

//Entry Point
export const onFetchSuccess = (text) => {
  return text.includes("illustrative");
};

//Entry Point
export const onFetchError = (err) => {
  console.log(err);
  //more behaviors
};
