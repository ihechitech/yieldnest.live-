"use client";

import { useState, ChangeEvent, FormEventHandler } from "react";
import CTAButton from "./CTAButton";

interface FormState {
    email: string;
}

export default function EmailForm() {
    const [form, setForm] = useState<FormState>({ email: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ email: e.target.value });
    };

    const submit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Something went wrong");
                return;
            }

            setSuccess(true);
            setForm({ email: "" });
        } catch {
            setError("Network error. Try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <p className="text-green-600 font-medium">
                Check your email — your YieldNest Blueprint is on the way.
            </p>
        );
    }

    return (
        <form onSubmit={submit} className="flex flex-col md:flex-row gap-3 justify-center">
            <input
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border p-3 rounded w-full md:w-80"
                required
            />

            <CTAButton type="submit" loading={loading}>
                Get Free Blueprint
            </CTAButton>

            {error && (
                <p className="text-red-500 text-sm mt-2 md:mt-0">
                    {error}
                </p>
            )}
        </form>
    );
}