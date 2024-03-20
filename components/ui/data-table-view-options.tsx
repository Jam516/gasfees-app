"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import { useState, useEffect } from 'react';

interface WindowSize {
    width: number | undefined;
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({ width: undefined });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}


interface DataTableViewOptionsProps<TData> {
    table: Table<TData>
}

export function DataTableViewOptions<TData>({
    table,
}: DataTableViewOptionsProps<TData>) {
    const { width } = useWindowSize();
    const isMediumScreenOrLarger = (width ?? 0) >= 768;

    const columnsToHideOnSmallScreens = ['category', 'seaport_trade_fee_usd', 'uniswap_trade_fee_usd'];

    useEffect(() => {
        table.getAllColumns().forEach(column => {
            if (columnsToHideOnSmallScreens.includes(column.id)) {
                column.toggleVisibility(isMediumScreenOrLarger);
            }
        });
    }, [isMediumScreenOrLarger, table]);

    // useEffect(() => {
    //     // Find the 'category' column and update its visibility
    //     const categoryColumn = table.getAllColumns().find(column => column.id === 'category');
    //     if (categoryColumn) {
    //         categoryColumn.toggleVisibility(isMediumScreenOrLarger);
    //     }
    // }, [isMediumScreenOrLarger, table]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                >
                    <MixerHorizontalIcon className="mr-2 h-4 w-4" />
                    View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}