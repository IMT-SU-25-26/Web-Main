import { getActivities } from "@/lib/service/activity";
import ClientPageActivities from "@/components/activity/ClientPage";

export const metadata = {
  title: "Activities",
};

export default async function ActivityPage() {
  const activities = await getActivities();

    return (
        <>
            <ClientPageActivities activities={activities} />
        </>
    );
}
