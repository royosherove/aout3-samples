import { INetworkAdapter, NetworkAdapterFetchResults } from "./INetworkAdapter";
export interface WebsiteAliveResult {
  success: boolean;
  status: string;
}

export class WebsiteVerifier {
  constructor(private network: INetworkAdapter) {}

  isWebsiteAlive = async (): Promise<WebsiteAliveResult> => {
    let netResult: NetworkAdapterFetchResults;
    try {
      netResult = await this.network.fetchUrlText("http://example.com");
      if (!netResult.ok) {
        throw netResult.text;
      }
      const text = netResult.text;
      return this.processNetSuccess(text);
    } catch (err) {
      throw this.processNetFail(err);
    }
  };

  processNetSuccess = (text): WebsiteAliveResult => {
    const included = text.includes("illustrative");
    if (included) {
      return { success: true, status: "ok" };
    }
    return { success: false, status: "missing text" };
  };

  processNetFail = (err): WebsiteAliveResult => {
    return { success: false, status: err };
  };
}
