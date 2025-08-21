import ActivityForm from "@/components/activity/ActivityForm";
import { getCategoriesActivity } from "@/lib/service/categoryActivity";

export default async function CreateActivityPage() {
  const categoryActivities = await getCategoriesActivity();
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen pt-[12vh]">
      <h1 className="text-3xl font-bold mb-6">Create New Activity</h1>
      <ActivityForm mode="create" categoryActivities={categoryActivities} />
    </div>
  );
}
