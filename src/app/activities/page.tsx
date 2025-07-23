// app/activity/page.tsx
import { ActivityCard } from "@/components/activities/ActivityCard";
import { mockActivities } from '@/mockData/mockActivities';


export default function ActivityPage() {
    const activities = [
        {
        title: "Tech Expo 2025",
        date: "July 10, 2025",
        location: "Main Hall, UC",
        imageUrl: "/activities/bunny.jpg"
        }
    ];

    return (
        <>
        <div className="h-[10vh] bg-[#F1EEE6]"></div>
        <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
                {/*  */}
                
                
                {/*  */}
                {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {activities.map((activity, index) => (
                    <ActivityCard
                        key={index}
                        title={activity.title}
                        date={activity.date}
                        location={activity.location}
                        imageUrl={activity.imageUrl}
                    />
                    ))}
                </div> */}
                <section className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Daftar Kegiatan yang Bisa Diikuti</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mockActivities.map((activity, index) => (
                        <ActivityCard key={activity.id} activity={activity} index={index} />
                        ))}
                    </div>
                </section>
        </div>
        </>

        
    );
}
