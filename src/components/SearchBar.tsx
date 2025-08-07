"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SearchableItem {
  id: string;
  title: string;
}

interface SearchSectionProps<T extends SearchableItem> {
  items: T[];
  children: (filteredItems: T[]) => React.ReactNode;
  className?: string;
  placeholder?: string;
}

export default function SearchBar<T extends SearchableItem>({
  items,
  children,
  className,
  placeholder = "Search Here...",
}: SearchSectionProps<T>) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={className}>
      {/* Integrated Search Bar with your existing styling */}
      <div className="w-full px-4 my-1 flex justify-center">
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
            value={search}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border-[2.5px] border-[#FF4712] rounded-full bg-white focus:outline-none placeholder-gray-400 text-sm"
          />
        </div>
      </div>
      {children(filteredItems)}
    </div>
  );
}
