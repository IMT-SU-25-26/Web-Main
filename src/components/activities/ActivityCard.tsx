import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button';
import { Activity } from '@/types/activity';

const colorList = [
  '#ED4E45', // red
  '#118D25', // green
  '#F64A78', // pink
  '#0555AB', // blue
  '#F7C235', // yellow
  '#CCBCAF'  // gray
];

type ActivityCardProps = {
    activity: Activity,
    index: number,
};

export const ActivityCard = ({ activity, index }: ActivityCardProps) => {
    const accentColor = colorList[index % colorList.length];
    const router = useRouter();
    const pathname = usePathname();

    const description = activity.description;
    const trimmedDescription = description.length > 75 ? description.slice(0, 75) + "..." : description;
    return (
        <div
            onClick={() => {
                router.push(`${pathname.replace(/\/$/, '')}/${activity.id}`);
            }}
            className="transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl relative w-[260px] sm:w-[280px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)] rounded-[2px] px-6 py-5 mt-8 text-left border-[1px] border-gray-200">

        {/* Paper Clip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
            <Image
            src="/activities/ActivityClip.webp"
            alt="Paper Clip"
            width={80}
            height={80}
            />
        </div>

        <div className="relative w-full max-w-xs overflow-hidden">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-5" style={{ backgroundColor: accentColor }} />

            <div className="w-full h-20 mb-4 overflow-hidden mt-7">            
                {/* Activity Image */}
                <Image
                src={activity.imageUrl || "/placeholder.jpg"}
                alt={activity.title}
                width={360}
                height={144}
                className="w-full h-full object-cover"
                />
            </div>
        </div>
        
        {/* Card Content */}
        <h3 className="text-black text-xl font-extrabold">{activity.title}</h3>
        <p className="font-gill text-[12px] text-black">{trimmedDescription}</p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-4">
            {/* Register Button */}
            <Button bgColor={accentColor} className=''>Register</Button>

            {/* Team Info */}
            <p className="text-[12px] font-gill text-black opacity-80">
            {activity.teamInfo || ''}
            </p>
        </div>
        </div>
    );
};
