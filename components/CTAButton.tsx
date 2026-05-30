"use client";

import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export default function CTAButton({
    loading,
    children,
    ...props
}: CTAButtonProps) {
    return (
        <button
            {...props}
            disabled={loading || props.disabled}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 disabled:opacity-60"
        >
            {loading ? "Loading..." : children}
        </button>
    );
}