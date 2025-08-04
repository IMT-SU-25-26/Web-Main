'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="w-full px-4 my-6 flex justify-center">
            <div className="relative w-full max-w-[260px] sm:max-w-sm md:max-w-md">
                <Image
                    src="/SearchIcon.webp"
                    alt="Search Icon"
                    width={18}
                    height={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search Here..."
                    className="w-full pl-10 pr-4 py-2 border-[2.5px] border-[#FF4712] rounded-full bg-white focus:outline-none placeholder-gray-400 text-sm"
                />
            </div>
        </div>
    );
}
