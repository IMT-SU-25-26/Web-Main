import Image from 'next/image';

type Activity = {
    id: number;
    title: string;
    type: string;
    description: string;
    imageUrl?: string;
};

type ActivityCardProps = {
    activity: Activity;
    index: number;
};

const colorList = ['blue', 'green', 'pink', 'red', 'yellow', 'gray'];

export const ActivityCard = ({ activity, index }: ActivityCardProps) => {
    const borderColor = colorList[index % colorList.length];

    return (
        <div className="relative w-[300px] sm:w-[360px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.1)] rounded-[2px] px-6 py-5 mt-8 text-left border-[1px] border-gray-200">
            {/* Paper Clip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                <Image
                    src="/activities/ActivityClip.svg"
                    alt="Paper Clip"
                    width={100}
                    height={100}
                />
            </div>

            {/* Top Image */}
            <div className="w-full h-36 mb-4 overflow-hidden">
                <Image
                    src={activity.imageUrl || "/placeholder.jpg"}
                    alt={activity.title}
                    width={360}
                    height={144}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Card Content */}
            <h3 className="text-black text-xl font-extrabold">{activity.title}</h3>
            <p className="font-gill text-sm text-black mt-1">{activity.type}</p>
            <p className="font-gill text-sm text-black">{activity.description}</p>
        </div>
    );
};
