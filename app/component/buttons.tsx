'use client';

import Image from "next/image";

interface ButtonProps {
    title: string;
    icon: string;
    width?: number;
    height?: number;
    style?: string;
}

export const Button = ({title,icon,width,height,style}: ButtonProps) => {
    return (
        <div className={ style + ` flex bg-black hover:bg-black-hover w-70 py-3 gap-30 text-md font-bold px-5 border-1 border-border rounded-lg items-center justify-between transition-all cursor-pointer`}>
        <p>{title}</p>
        <Image src={icon} alt={icon} width={width || 18} height={height || 18} />
        </div>
    );
}