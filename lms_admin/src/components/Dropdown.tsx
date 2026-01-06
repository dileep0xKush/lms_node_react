import { useState, useRef, useEffect, type ReactNode } from "react";

type Props = {
    trigger: ReactNode;
    children: ReactNode;
    align?: "left" | "right";
};

export default function Dropdown({
    trigger,
    children,
    align = "right",
}: Props) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
                {trigger}
            </div>

            {open && (
                <div
                    className={`absolute mt-2 min-w-[140px] bg-white border rounded-xl shadow-lg z-20
            ${align === "right" ? "right-0" : "left-0"}`}
                >
                    {children}
                </div>
            )}
        </div>
    );
}
