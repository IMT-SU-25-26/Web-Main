'use client';

import { useState } from 'react';
import { ActivityCard } from '@/components/activities/ActivityCard';
import { mockActivities } from '@/mockData/mockActivities';
import SearchBar from '@/components/SearchBar';

export default function ActivityPage() {
    const [search, setSearch] = useState('');

    const filteredActivities = mockActivities.filter((activity) =>
        activity.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Spacer for header */}
            <div className="h-[10vh] bg-[#F1EEE6]" />

            {/* Background Container  */}
            <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6]">

                {/* Decorative Images */}
                {/* Light Bulb */}
                <img
                    src="/activities/LightBulb.webp"
                    alt="Light Bulb"
                    className="absolute top-26 left-[0.3] w-28 md:left-6 md:w-30 z-10"
                />

                <img
                    src="/activities/RedStar.webp"
                    alt="Red Star"
                    className="hidden md:block absolute top-10 left-30 w-20 h-max z-0"
                />
                <img
                    src="/activities/GreenQuote.webp"
                    alt="Green Quote"
                    className="absolute top-12 right-5 w-20 md:right-10 md:w-30 h-max z-0"
                />
                <img
                    src="/activities/BottomLeft.webp"
                    alt="Bottom Left"
                    className="absolute bottom-0 left-0 w-40 h-max z-0"
                />
                <img
                    src="/activities/BottomRight.webp"
                    alt="Bottom Right"
                    className="absolute bottom-0 right-0 w-50 h-max z-0"
                />

                {/* Title Section */}
                <div className="relative inline-block z-10">
                    {/* Pin */}
                    <img
                        src="/activities/RedPin.webp"
                        alt="Red Pin"
                        className="absolute top-3 -right-4 w-10 h-10 z-20"
                    />

                    {/* Paper */}
                    <div className="bg-white shadow-lg px-6 py-3 rotate-[-2deg] mt-10 mb-6">
                        <h2 className="font-family-impact text-black font-extrabold text-4xl tracking-wider">ACTIVITIES</h2>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="z-10 w-full px-4 md:px-8 lg:px-32">
                    <SearchBar onSearch={setSearch} />
                </div>

                {/* Activity Cards List */}
                <section className="p-6 z-10 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredActivities.map((activity, index) => (
                            <ActivityCard key={activity.id} activity={activity} index={index} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
