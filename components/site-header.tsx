import { MainNav } from "@/components/main-nav";
// import { MobileNav } from "@/components/mobile-nav";
// import { TimeSelect } from "@/components/time-select";

export function SiteHeader() {
    return (
        <div>
            <div className="flex h-12 items-center justify-between md:py-9">
                <MainNav />
            </div>
            {/* <div className="flex md:hidden h-16 items-center px-4">
                <MainNav />
            </div> */}
        </div>
    );
}