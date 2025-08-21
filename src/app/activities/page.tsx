import { getActivities } from "@/lib/service/activity";
import ClientPageActivities from "@/components/activity/ClientPage";
import { getCategoriesActivity } from '@/lib/service/categoryActivity';

export const metadata = {
  title: "Activities",
};

export default async function ActivityPage() {
  const activities = await getActivities();
  const categoryActivities = await getCategoriesActivity();

    return (
        <>
            <ClientPageActivities activities={activities} categoryActivities={categoryActivities} />
        </>
    );
}
