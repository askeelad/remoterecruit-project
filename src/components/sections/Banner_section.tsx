"use client"

import Banner_background from "../Banner_background";
import Icon from "../Icon_Component";

export default function Banner_section() {
    return (
        <Banner_background>
            <div className="w-full lg:aspect-[1440/610] relative " >
                <div className="w-full h-full flex flex-col gap-6 lg:flex-row py-8 lg:py-0 lg:gap-0">
                    <div className="flex-1 w-full lg:w-1/2 lg:pt-[100px] self-start">
                        <img src="/signup.png" alt="Signup Illustration" className="w-full h-full object-contain object-left-top rounded-tr-[40px] overflow-hidden" />
                    </div>
                    <div className="flex flex-1 w-full lg:w-1/2 items-center justify-center px-[5vw] lg:px-0">
                        <div className="flex flex-col gap-[clamp(24px,2.5vw,36px)]">
                            <div className="flex flex-col gap-[clamp(6px,0.69vw,10px)]">
                                <p className="text-brand-blue-accent banner-label">Are you ready ?</p>
                                <h1 className="text-brand-black banner-heading">Help is only a few clicks away!</h1>
                                <p className="w-[clamp(250px,24.3vw,350px)] text-brand-gray-muted banner-paragraph">Click Below to get set up super quickly and find help now!</p>
                            </div>
                            <button className="h-[clamp(48px,4.24vw,61px)] w-[clamp(140px,12.5vw,180px)] bg-brand-cyan-medium/10 rounded-full mt-3 flex justify-items-start items-center gap-[clamp(4px,0.55vw,8px)] pl-[clamp(6px,0.69vw,10px)] hover:-translate-y-[2px] transition-all hover:shadow-[0_8px_20px_-6px_rgba(45,191,223,0.5)]">
                                <div className="w-[clamp(32px,3.19vw,46px)] h-[clamp(32px,3.19vw,46px)] bg-brand-cyan rounded-full flex justify-center items-center">
                                    <Icon name="arrow" />
                                </div>
                                <p className="text-brand-blue banner-btn-text">Get Started</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Banner_background>

    );
}