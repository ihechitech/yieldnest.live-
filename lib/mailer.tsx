import { SubscribePayload } from "./types";

export async function subscribeEmail(data: SubscribePayload) {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
            email: data.email,
            groups: ["yieldnest-leads"],
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to subscribe user");
    }

    return res.json();
}