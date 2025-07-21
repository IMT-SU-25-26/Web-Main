'use client';

import { FC } from 'react';

interface AchievementCardProps {
    title: string;
    type: string;
    description: string;
    borderColor: 'blue' | 'green' | 'pink' | 'red' | 'yellow' | 'gray';
}

const colorMap = {
    blue: 'bg-[#0555AB]',
    green: 'bg-[#4DAA5C]',
    pink: 'bg-[#F64A78]',
    red: 'bg-[#ED4E45]',
    yellow: 'bg-[#F7C235]',
    gray: 'bg-[#CCBCAF]',
};

export const AchievementCard: FC<AchievementCardProps> = ({
    title,
    type,
    description,
    borderColor,
}) => {
    return (
        <div
        className="relative bg-no-repeat bg-cover bg-center w-[320px] h-[400px]"
        style={{ backgroundImage: "url('/achievements/AchievementCardBG.svg')" }}
        >
        {/* Image placeholder with bottom color bar */}
        <div className="mt-5 absolute top-[48px] left-[30px] w-[260px] h-[140px] bg-gray-300">
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

            <p className="font-gill mt-1 text-sm text-black leading-snug">{description}</p>
        </div>
        </div>
    );
};
