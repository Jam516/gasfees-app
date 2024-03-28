import { Metadata } from "next";
import { getChainData } from "@/app/actions/getChainData";
import { FeeLineChart } from "@/components/line-fees"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
    title: "GasFees.io",
    description: "Gas cost data",
};

export const maxDuration = 60;

function AboutBlock() {
    return (
        <div className="grid pt-5 gap-4 grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-left">
                <h2 className="font-bold text-sm">What is GasFees.io?</h2>
                <p className="text-sm">Gasfees.io tracks the gas cost of performing common actions on different L1s and L2s.</p>
            </div>
            <div className="flex flex-col items-left">
                <h2 className="font-bold text-sm">How are these fees calculated?</h2>
                <p className="pb-4 text-sm">The median cost of performing an ETH transfer is calculated for the past 30 days.</p>
                <p className="pb-4 text-sm">A dynamic filter is used to exclude transactions that have anomalously high priority fees so that bots do not skew the results.</p>
            </div>
        </div>
    )
}

export default async function ChainPage({ params }: { params: { slug: string[] } }) {

    let chain = params.slug[0];
    const chain_data = await getChainData({ chain });

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 pt-6">
                    <h2 className="text-2xl font-bold tracking-tight">{capitalizeFirstLetter(chain)}</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>{"Daily Cost of ETH Transfer (USD)"}</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <FeeLineChart data={chain_data} xaxis={"day"} yaxis={"gas_cost_usd"} usd={true} />
                        </CardContent>
                    </Card>
                    <AboutBlock />
                </div>
            </div>
        </>
    );
};