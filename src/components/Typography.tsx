import clsx from 'clsx';
import React, { JSX } from 'react'



interface TypographyProps {
    variant: "xl" | "l" | "m" | "s" | "body-l" | "body-m";
    as?: keyof JSX.IntrinsicElements
    children: React.ReactNode
    className?: string
}
const Typography = ({ variant, as: Tag = "p", children, className }: TypographyProps) => {
    const baseStyle = "font-plus-jakarta-sans"
    const variants = {
        xl: "font-bold text-2xl leading-[30px]",
        l: "font-bold text-lg leading-[23px]",
        m: "font-bold text-[15px] leading-[19px]",
        s: "font-bold text-xs",
        "body-l": "text-base font-medium leading-[23px]", // Maps to paragraph
        "body-m": "text-sm font-bold leading-[15px]",
    }
    return <Tag className={clsx(baseStyle, variants[variant], className)}>{children}</Tag>
}

export default Typography