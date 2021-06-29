// A set of services that communicate with an Eth1 RPC node
import { ethers } from 'ethers';
import { logger } from '../config/pino';

// Retrieves the code for an address to infer that it is a contract and that it exists (Code != '0x')
export async function contractExists(address: string): Promise<boolean> {
    const { ethereum } = typeof window !== `undefined` ? window as any : null
    const provider = ethers.getDefaultProvider("goerli")

    return provider.getCode(address).then((code) => {
        logger.info(`ens.ts(contractExists): ${address} exists on this network. ${(!!code && code !== '0x').toString()}. Code: ${code.toString()}`)
        return !!code && code !== '0x'
    }).catch((err: any) => {
        logger.warn(`ens.ts(contractExists): There was an error checking if ${address} exists on the network.`)
        console.error(err)
        return false
    })
}