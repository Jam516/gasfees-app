import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator";

export default function Loading() {

    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="flex-1 space-y-4 pt-6">
                    <Skeleton className="h-[500px]" />
                </div>
            </div>
            <div className="flex flex-col md:hidden">
                <div className="flex-1 space-y-4 pt-6">
                    <Skeleton className="h-[500px]" />
                </div>
            </div>
        </>

    );
}