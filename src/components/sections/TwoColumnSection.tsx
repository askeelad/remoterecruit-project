"use client";

/* eslint-disable @next/next/no-img-element */
import TextPanel from "../Textpanel";

interface TwoColumnSectionProps {
  imageSrc: string;
  imageAlt?: string;
  label: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export default function TwoColumnSection({
  imageSrc,
  imageAlt = "",
  label,
  title,
  description,
  reverse = false,
}: TwoColumnSectionProps) {
  return (
    <div
      className={`w-full pt-16 lg:pt-30 mb-16 lg:mb-30 responsive-box flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 ${reverse ? "lg:flex-row-reverse" : ""
        }`}
    >
      <TextPanel label={label} title={title} description={description} />
      <img src={imageSrc} className="w-full h-auto max-w-[454px] lg:w-[clamp(250px,31.53vw,454px)] lg:h-[clamp(248px,31.32vw,451px)] object-contain" alt={imageAlt} />
    </div>
  );
}
