'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

type AchievementCardProps =  {
    title: string;
    type: string;
    description: string;
    borderColor: 'blue' | 'green' | 'pink' | 'red' | 'yellow' | 'gray';
    id:string;
    imageUrl:string | null,
}

const colorMap = {
    blue: 'bg-[#0555AB]',
    green: 'bg-[#4DAA5C]',
    pink: 'bg-[#F64A78]',
    red: 'bg-[#ED4E45]',
    yellow: 'bg-[#F7C235]',
    gray: 'bg-[#CCBCAF]',
};

export const AchievementCard = ({
    title,
    type,
    description,
    borderColor,
    id,
    imageUrl,
} : AchievementCardProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [swinging, setSwinging] = useState(false);


    const trimmedDescription = description.length > 75 ? description.slice(0, 75) + "..." : description;
    return (
        <div
            onClick={() => {
                router.push(`${pathname.replace(/\/$/, '')}/${id}`);
            }}
            onMouseLeave={()=>{
                setSwinging(true);
                setTimeout(() => setSwinging(false), 700); // match swing duration
            }}
            className={`relative w-[320px] h-[400px] overflow-hidden cursor-pointer hover:rotate-[1.5deg] hover:origin-top ${swinging? 'swing-effect':''} drop-shadow-md active:scale-100 active:brightness-90 duration-300`}
        >
            <Image
                src="/achievements/AchievementCardBG.webp"
                alt="Achievement Card Background"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Image placeholder with bottom color bar */}
            <div className="mt-5 absolute top-[48px] left-[30px] w-[260px] h-[140px] bg-gray-300">
                <Image
                src={imageUrl || ""}
                alt={title}
                fill
                className="object-cover"
                />
                <div className={`absolute bottom-0 left-0 w-full h-[8px] ${colorMap[borderColor]}`} />
            </div>

            {/* Text content below image */}
            <div className="mt-5 absolute top-[200px] left-[30px] right-[30px]">
                <h3 className="text-black text-xl font-extrabold">{title}</h3>
                <span
                className={`uppercase font-impact ${colorMap[borderColor]} text-white text-[12px] px-2 py-1 inline-block mt-1 tracking-wide`}
                style={{ transform: 'rotate(-0.8deg)' }}
                >
                {type}
                </span>
                <p className="font-gill mt-1 text-sm text-black leading-snug">{trimmedDescription}</p>
            </div>

        </div>
    );
};
