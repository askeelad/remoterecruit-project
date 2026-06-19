
"use client"



interface TextPanelProps {
    label: string;
    title: string;
    description: string;

}


export default function TextPanel({ label, title, description }: TextPanelProps) {
    return (
        <div className="flex flex-col gap-9 items-start pt-7">
            <div className="py-2 px-6 bg-brand-cyan-light text-brand-blue rounded-full w-fit font-semibold text-sm">
                <h3>{label}</h3>
            </div>
            <h1 className="heading-2 text-brand-black">{title}</h1>
            <p className="paragraph">
                {description}
            </p>
        </div>
    );
}