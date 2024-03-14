import {
    StackIcon,
    StopIcon,
    Cross1Icon,
    ShadowOuterIcon,
    ComponentInstanceIcon
} from "@radix-ui/react-icons"

export const categories = [
    {
        value: "l1",
        label: "L1",
        icon: ComponentInstanceIcon,
    },
    {
        value: "l2 with blobs",
        label: "L2 with blobs",
        icon: ShadowOuterIcon,
    },
    {
        value: "l2 without blobs",
        label: "L2 without blobs",
        icon: Cross1Icon,
    },
]