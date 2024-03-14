import { Metadata } from "next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getActionsData } from "@/app/actions/getActionsData";
import { ChevronUp, ChevronsUp, ChevronDown, ChevronsDown } from 'lucide-react';
import { DataTable } from "@/components/data-table";
import { actionSchema } from "@/components/schema";
import { columns } from "@/components/columns";
import { z } from "zod";

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
                <p className="pb-4 text-sm">The median gas price (past 24h) is combined with the median gas used to perform different transaction types.</p>
                <p className="pb-4 text-sm">If EIP1559 transactions are supported, a consumer-level gas setting is assumed .i.e priority fees are set to almost 0 and the median base fee per gas is combined with median gas used.</p>
            </div>
        </div>
    )
}

export default async function UsersPage() {

    const data = await getActionsData();
    const actions = z.array(actionSchema).parse(data)

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 pt-6">
                    <DataTable data={actions} columns={columns} />
                    {/* <Separator className="bg-black" /> */}
                    <AboutBlock />
                </div>
            </div>
        </>
    );
};