declare module "tronweb" {
  export default class TronWeb {
    constructor(options: {
      fullHost: string;
      headers?: Record<string, string>;
    });
    static toSun(amount: string): string;
    transactionBuilder: {
      sendTrx(to: string, amount: number, from: string): Promise<any>;
      triggerSmartContract(
        contractAddress: string,
        functionSelector: string,
        options: any,
        parameters: any[]
      ): Promise<any>;
    };
    trx: {
      sendRawTransaction(signedTransaction: any): Promise<any>;
    };
    contract(abi: any[], address: string): Promise<any>;
    setAddress(address: string): void;
    // Add other methods and properties as needed
  }
}
