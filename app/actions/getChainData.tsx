import { unstable_noStore as noStore } from "next/cache";

interface ChainDataParams {
    chain: string;
}

export async function getChainData({ chain }: ChainDataParams) {
    noStore();
    const lowercaseChain = chain.toLowerCase();
    const response = await fetch(`https://gasfees-api.onrender.com/chain?chain_name=${lowercaseChain}`);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const chainData: any[] = await response.json();

    return chainData;
}