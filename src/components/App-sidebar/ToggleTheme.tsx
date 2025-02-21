'use client'
import { MoonStar, SunIcon } from "lucide-react"

import { useTheme } from "next-themes"
import { Switch } from "../ui/switch"
import { useEffect, useState } from "react";
export function ToggleSidebarTheme() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleTheme = () => {
        if (theme !== "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <div className="flex items-center justify-between space-x-3 mb-10 mx-6 p-2 h-12 bg-neutral-300">
            <SunIcon stroke="var(--icon-color)" />
            <Switch className="w-10 h-5" id="airplane-mode" onCheckedChange={handleTheme} />
            <span className="sr-only">Toggle theme</span>
            <MoonStar stroke="var(--icon-color)" />
        </div>
    )
}