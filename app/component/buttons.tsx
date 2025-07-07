'use client';
import { style } from "framer-motion/client";
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
        <div className={ style + ` flex bg-black py-3 gap-30 text-lg font-bold px-5 border-1 border-border rounded-lg items-center justify-between hover:bg-border/20 transition-all cursor-pointer`}>
        <p>{title}</p>
        <Image src={icon} alt={icon} width={width || 18} height={height || 18} />
        </div>
    );
}