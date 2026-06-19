"use client";
import Header from "./Header_Component";
import Hero_title from "./Hero_title";

export default function Hero_Section() {
    return (
        <div
            className="relative w-full bg-cover bg-center lg:bg-[100%_100%] bg-no-repeat overflow-hidden flex flex-col text-white select-none min-h-[600px] lg:min-h-0 lg:aspect-[4320/2112]"
            style={{
                backgroundImage: "url('/Background.svg')",
            }}
        >
            <Header />
            <Hero_title />


        </div>
    );
}