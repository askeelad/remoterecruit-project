/* eslint-disable @next/next/no-img-element */
import React from "react";
import icons from "@/assets/icons";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: keyof typeof icons;
    size?: number | string;
    color?: string;
}

const Icon: React.FC<IconProps> = ({
    name,
    size = 24,
    color,
    className,
    style,
    ...props
}) => {
    const iconData = icons[name];

    if (!iconData) return null;

    const src =
        typeof iconData === "string"
            ? iconData
            : iconData?.src;

    if (!src) return null;

    // Preserve original SVG colors when no color is provided
    if (!color) {
        return (
            <img
                src={src}
                alt={String(name)}
                className={className}
                style={{
                    width: size,
                    height: size,
                    objectFit: "contain",
                    display: "block",
                    ...style,
                }}
                {...props}
            />
        );
    }

    // Recolor icon using CSS mask
    return (
        <span
            className={className}
            style={{
                display: "block",
                width: size,
                height: size,
                backgroundColor: color,

                maskImage: `url(${src})`,
                WebkitMaskImage: `url(${src})`,

                maskSize: "contain",
                WebkitMaskSize: "contain",

                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",

                maskPosition: "center",
                WebkitMaskPosition: "center",

                ...style,
            }}
            {...props}
        />
    );
};

export default Icon;