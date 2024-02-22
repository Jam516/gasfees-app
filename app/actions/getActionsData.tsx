import { unstable_noStore as noStore } from "next/cache";

interface ActionData {
    time: string,
}

export async function getActionsData(): Promise<ActionData> {
    noStore();
    const response = await fetch(`https://gasfees-api.onrender.com/actions`);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const actionData: ActionData = await response.json();

    return actionData;
}