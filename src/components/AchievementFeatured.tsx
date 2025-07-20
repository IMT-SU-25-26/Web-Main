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
        <div className="w-full overflow-visible">
        <div
            className="relative bg-contain bg-no-repeat bg-left-bottom min-h-[200px] py-6"
            style={{
            backgroundImage: "url('/achievements/AchievementFeaturedBG.svg')",
            }}
        >
            <div className="my-2 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row gap-4">
            {/* Image */}
            <div className="relative ml-[10px] w-[180px] h-[110px] bg-gray-300 flex-shrink-0">
                <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[8px] bg-[#ED4E45] shadow-sm" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-start gap-2 text-sm max-w-xl">
                <div className="flex items-center flex-wrap gap-2">
                    <span 
                        className="uppercase bg-[#ED4E45] text-white px-2 py-1"
                        style={{ transform: "rotate(-0.8deg)" }}    
                    >
                        {title}
                    </span>
                    <span
                        className="bg-[#F7C235] text-black px-1 py-0.5"
                        style={{
                            transform: "rotate(0.8deg)",
                            fontSize: "12px",
                            fontWeight: 500, // optional: same as font-semibold
                            lineHeight: "1rem", // optional: controls text height
                        }}
                        >
                        {date}
                    </span>
                </div>
                <div className="max-w-md">
                <p className="text-gray-800 leading-relaxed">
                    {description}
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AchievementFeatured;
