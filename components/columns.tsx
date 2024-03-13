"use client"

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/date-table-column-header"
import { categories } from "@/components/categories"
import { Action } from "@/components/schema"
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import numeral from 'numeral';

export const columns: ColumnDef<Action>[] = [
    {
        accessorKey: "chain",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Chain" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("chain")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "uniswap_trade_fee_usd",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Uniswap Swap" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("uniswap_trade_fee_usd"));
            const displayValue = amount === 0 ? '-' : amount.toFixed(4);
            return (
                <div className="max-w-[500px] truncate font-medium">
                    ${displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "seaport_trade_fee_usd",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Seaport Trade" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("seaport_trade_fee_usd"));
            const displayValue = amount === 0 ? '-' : amount.toFixed(4);
            return (
                <div className="max-w-[500px] truncate font-medium">
                    ${displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "usdc_transfer_fee_usd",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="USDC Transfer" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("usdc_transfer_fee_usd"));
            const displayValue = amount === 0 ? '-' : amount.toFixed(4);
            return (
                <div className="max-w-[500px] truncate font-medium">
                    ${displayValue}
                </div>
            )
        },
    },
    {
        accessorKey: "eth_transfer_fee_usd",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ETH Transfer" />
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("eth_transfer_fee_usd"));
            const displayValue = amount === 0 ? '-' : amount.toFixed(4);
            return (
                <div className="max-w-[500px] truncate font-medium">
                    ${displayValue}
                </div>
            )
        },
    },

    {
        accessorKey: "category",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => {
            const status = categories.find(
                (status) => status.value === row.getValue("category")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center hidden md:block">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
]