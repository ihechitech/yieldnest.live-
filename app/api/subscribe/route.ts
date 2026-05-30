import { NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/validators";
import { subscribeEmail } from "@/lib/mailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const parsed = subscribeSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { success: false, message: "Invalid email" },
                { status: 400 }
            );
        }

        await subscribeEmail(parsed.data);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}