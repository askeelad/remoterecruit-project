import React from "react";
import Icon from "./Icon_Component";
import Button from "./Button";
import { Feature, PackageCardProps } from "@/types";

export default function PackageCard_Mobile({
    price,
    badgeTitle,
    features,
    paidpackage,
}: PackageCardProps) {
    return (
        <div className="w-[85vw] max-w-[360px] h-auto bg-white rounded-3xl p-6 shadow-[0_12px_30px_-12px_rgba(20,20,20,0.2)] hover:shadow-[0_15px_35px_-10px_rgba(20,20,20,0.25)] transition-shadow duration-200 flex flex-col group">
            <div className="flex flex-col gap-6">
                {/* Price Box */}
                <div className={` ${paidpackage ? "relative" : ""} w-full py-6 bg-brand-blue-soft rounded-2xl flex flex-col items-center justify-center`}>
                    {paidpackage && <div className="absolute bg-brand-cyan-soft -top-[18px] w-[110px] h-[36px] rounded-full shadow-[0_4px_10px_-4px_rgba(20,20,20,0.2)] flex items-center justify-center p-1.5 gap-1">
                        <div className="flex items-center justify-center w-[24px] h-[24px] flex-shrink-0 bg-white rounded-full shadow-md">
                            <Icon name={"dime"} size={18} className="w-[12px] h-[12px]" />
                        </div>
                        <h3 className="card-title-mobile text-brand-blue">Premium</h3>
                    </div>}
                    <h1 className={`card-price-mobile ${paidpackage ? "text-transparent bg-clip-text bg-gradient-to-br from-brand-blue-gradient-start to-brand-blue-gradient-end" : "text-brand-cyan"}`} >{price}</h1>
                    <h2 className="card-badge-mobile text-brand-gray-text mt-1">{badgeTitle}</h2>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-3 px-2">
                    {features.map((feature: Feature, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                            <Icon name={feature.included ? "tick" : "cross"} size={16} className="w-[16px] h-[16px] flex-shrink-0" />
                            <span className={`card-feature-mobile ${feature.included ? "text-brand-black" : "text-brand-gray-feature  opacity-70"}`}>{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <Button title="Get Started" variant={paidpackage ? "primary" : "secondary"} className={`w-full h-[54px] rounded-2xl card-badge-mobile mt-8 ${paidpackage ? "bg-gradient-to-br from-brand-blue-gradient-start to-brand-blue-gradient-end" : ""}`} />
        </div>
    );
}