import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const actionSchema = z.object({
    chain: z.string(),
    uniswap_trade_fee_usd: z.number(),
    seaport_trade_fee_usd: z.number(),
    usdc_transfer_fee_usd: z.number(),
    eth_transfer_fee_usd: z.number(),
    category: z.string(),
})

export type Action = z.infer<typeof actionSchema>