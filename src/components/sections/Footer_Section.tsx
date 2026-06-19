'use client'
/* eslint-disable @next/next/no-img-element */

import Icon from "../Icon_Component";
import socials from "@/data/socials.json";
import PackageCard from "../PackageCard";
import packages from "@/data/service_packages.json";

export default function Footer_Section() {
    return (
        <div
            className="relative w-full bg-cover bg-center lg:bg-[100%_100%] bg-no-repeat flex flex-col justify-end mt-20 lg:mt-60 lg:aspect-[1440/569] min-h-[400px] lg:min-h-0"
            style={{
                backgroundImage: "url('/Footer_Background.svg')",
            }}
        >

            <div className="hidden lg:flex absolute w-[72.22vw] top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-between items-center z-10 mx-auto">
                <h1 className="heading-2 text-brand-black">Help Is One Click Away</h1>

                <div className="w-full flex justify-center items-center gap-[1.7vw] my-[1vw] mt-10">
                    {packages.map((pkg, idx) => (
                        <PackageCard
                            key={idx}
                            price={pkg.price}
                            badgeTitle={pkg.badgeTitle}
                            features={pkg.features}
                            paidpackage={pkg.paidPackage}
                        />
                    ))}
                </div>

            </div>

            <div className="responsive-box flex-1 lg:flex-none flex flex-col lg:flex-row gap-10 lg:gap-0 justify-center lg:justify-between items-center lg:items-start pt-12 lg:pt-0 mb-0 lg:mb-[6vw]"
            >
                <img src="/Logo.svg" alt="Remote Recruit Logo" className="w-[180px] lg:w-[12.8vw] lg:h-[5.139vw] max-w-[184.32px] max-h-[74px] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

                <div className="flex gap-4 lg:gap-[0.83vw]">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[40px] h-[40px] lg:w-[2.78vw] lg:h-[2.78vw] max-w-[32px] max-h-[32px] p-[8px] lg:p-[min(0.75vw,8px)] rounded-full border border-white/20 flex items-center justify-center bg-brand-footer-icon-bg hover:bg-white/10 text-white hover:border-white transition-all cursor-pointer"
                        >
                            <Icon name={social.name as keyof typeof import('@/assets/icons').default} size="100%" />
                        </a>
                    ))}
                </div>

            </div>

            <div className=" w-full flex justify-center items-center py-[20px] border-t-[1px] border-brand-white-translucent">
                <img src="/RR_logo.svg" alt="RR Logo mark" className="h-[32px] w-[40px] lg:h-[2.22vw] lg:w-[2.78vw] max-h-[32px] max-w-[40px]" />
            </div>
        </div>
    );
}