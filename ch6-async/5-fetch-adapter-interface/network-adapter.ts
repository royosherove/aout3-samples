import fetch from "node-fetch";
import { INetworkAdapter, NetworkAdapterFetchResults } from "./INetworkAdapter";

export class NetworkAdapter implements INetworkAdapter {
  async fetchUrlText(url: string): Promise<NetworkAdapterFetchResults> {
    const resp = await fetch(url);
    if (resp.ok) {
      const text = await resp.text();
      return { ok: true, text: text };
    }
    return { ok: false, text: resp.statusText };
  }
}
