// app/activity/page.tsx
import { ActivityCard } from '@/components/activities/ActivityCard';
import { mockActivities } from '@/mockData/mockActivities';


export default function ActivityPage() {
    return (
        <>
        <div className="h-[10vh] bg-[#F1EEE6]"></div>
        <div className="overflow-hidden relative flex flex-col items-center justify-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-cover bg-center bg-[#F1EEE6] m-0 p-0">
                
                <section className="p-6">
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
