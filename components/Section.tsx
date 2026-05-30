import { ReactNode } from "react";

interface SectionProps {
    title?: string;
    children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="max-w-4xl mx-auto px-6 mt-24">
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            <div className="mt-6">{children}</div>
        </section>
    );
}