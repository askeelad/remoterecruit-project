'use client'

import PackageCard from "../PackageCard_mobile";
import packages from "@/data/service_packages.json";

export default function Pricing_Section_Mobile() {
    return (
        <div className="w-full flex flex-col justify-center items-center lg:hidden px-[5vw] mb-10 gap-10 mt-10">
            <h1 className="heading-2 text-brand-black text-center mb-4">Help Is One Click Away</h1>
            <div className="w-full flex flex-col justify-center items-center gap-12">
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
    );
}
