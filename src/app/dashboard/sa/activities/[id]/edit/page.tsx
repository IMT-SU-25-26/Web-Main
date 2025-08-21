import ActivityForm from "@/components/activity/ActivityForm";
import { getActivityById } from "@/lib/service/activity";
import { notFound } from "next/navigation";
import { getCategoriesActivity } from "@/lib/service/categoryActivity";

export default async function EditActivityPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = await params.id;
  const activity = await getActivityById(id);
  const categoryActivities = await getCategoriesActivity();

  if (!activity) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen pt-[14vh] pb-10">
      <h1 className="text-3xl font-bold mb-6">Edit Activity</h1>
      <ActivityForm mode="edit" data={activity} categoryActivities={categoryActivities} />
    </div>
  );
}
