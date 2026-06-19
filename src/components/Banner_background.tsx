"use client"

export default function Banner_background({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="absolute inset-[-50%] md:inset-0 bg-cover bg-center bg-no-repeat rotate-90 md:rotate-0 transition-transform"
                style={{ backgroundImage: 'url("/banner-bg.png")' }}
            />
            {children}

        </div>
    );
}