'use client';

import Image from 'next/image';
import { FC } from 'react';

interface AchievementFeaturedProps {
    imageUrl: string;
    title: string;
    date: string;
    description: string;
}

const AchievementFeatured: FC<AchievementFeaturedProps> = ({
    imageUrl,
    title,
    date,
    description,
    }) => {
    return (
        <div className="w-full px-4 overflow-visible">
        <div
            className="relative bg-cover bg-no-repeat bg-center -mx-4 md:-mx-8 lg:-mx-16"
            style={{
            backgroundImage: "url('/achievements/AchievementFeaturedBG.svg')",
            }}
        >
            <div className="relative flex flex-col md:flex-row gap-4 px-6 py-6 max-w-5xl mx-auto">
            {/* Image */}
            <div className="md:ml-6 relative w-[180px] h-[110px] bg-gray-300 flex-shrink-0">
                <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#E63946]" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-start gap-2 text-sm max-w-xl">
                <div className="flex items-center flex-wrap gap-2">
                <span className="bg-[#E63946] text-white font-bold px-2 py-1">
                    {title}
                </span>
                <span className="bg-[#F4C430] text-black font-semibold px-2 py-1">
                    {date}
                </span>
                </div>
                <p className="text-gray-800 leading-relaxed">{description}</p>
            </div>
            </div>
        </div>
        </div>

    );
};

export default AchievementFeatured;
