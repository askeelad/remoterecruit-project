"use client";

import React from "react";
import qaData from "@/data/qa _data.json";
import Button from "../Button";

export default function FAQ_Section() {
    return (
        <div className="w-full bg-white py-[60px] lg:py-[100px]">
            <div className="responsive-box">
                <h2 className="heading-2 text-brand-black mb-[40px] lg:mb-[60px]">
                    Common Questions
                </h2>

                <div className="flex flex-col gap-[32px] lg:gap-[48px]">
                    {qaData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 lg:gap-4">
                            <h3 className="faq-question text-brand-black">
                                {item.question}
                            </h3>
                            <p className="faq-answer text-brand-gray-text">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-[40px] lg:mt-[60px]">
                    <Button variant="secondary" title="More Questions" className="!rounded-xl font-medium px-6 py-3" />
                </div>
            </div>
        </div>
    );
}
