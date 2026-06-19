"use client"

import Image from "next/image";

export default function Banner_background({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <Image
                src="/banner-bg.png"
                alt="Banner Background"
                fill
                sizes="100vw"
                className="absolute inset-[-50%] md:inset-0 object-cover object-center select-none rotate-90 md:rotate-0 transition-transform"
                loading="lazy"
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}