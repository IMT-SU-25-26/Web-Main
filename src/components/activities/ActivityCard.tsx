// components/ActivityCard.tsx
import Image from "next/image";

interface ActivityCardProps {
    title: string;
    date: string;
    location: string;
}

const ActivityCard = ({ title, date, location }: ActivityCardProps) => {
    return (
        <div className="relative w-full max-w-sm rounded-xl bg-white p-5 shadow-md">
        {/* Paper Clip Image */}
        <Image
            src="/activities/ActivityClip.svg"
            alt="Paper Clip"
            width={40}
            height={40}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-auto"
        />

        {/* Card Content */}
        <div className="space-y-2 pt-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{date}</p>
            <p className="text-sm text-gray-600">{location}</p>
        </div>
        </div>
    );
};

export default ActivityCard;
