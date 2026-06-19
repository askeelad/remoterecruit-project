'use client'
/* eslint-disable @next/next/no-img-element */

import { useState } from "react"
import Button from "../Button"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="lg:h-[108px] py-4 lg:py-[29px] px-4 lg:px-[58px] max-w-[1440px] w-full mx-auto flex justify-between items-center relative z-50">
            <div className="flex gap-[121px]">
                <img src="/Logo.svg" alt="Logo" className="hidden lg:block" />
                <img src="/RR_logo.svg" alt="Logo" className="block lg:hidden h-[32px]" />
            </div>

            <div className="hidden lg:flex gap-[38px]">
                <Button variant="none" title="Sign in" className="" />
                <Button
                    title="sign up"
                    className="!h-[44px] !w-[92px] !rounded-[16px]"
                />
            </div>

            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-t border-white/10 flex flex-col items-center py-6 gap-4 lg:hidden">
                    <Button variant="none" title="Sign in" className="text-white" />
                    <Button
                        title="sign up"
                        className="!h-[44px] !w-[92px] !rounded-[16px]"
                    />
                </div>
            )}
        </div>
    )
}
