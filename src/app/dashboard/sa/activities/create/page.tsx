import ActivityForm from "@/components/activity/ActivityForm";
import { Category } from "@prisma/client";

export default async function CreateActivityPage() {
  const categories = Object.values(Category);
  return (
    <div className="flex flex-col w-full justify-center items-center py-4">
      <h1 className="text-3xl font-bold mb-6">Create New Activity</h1>
      <ActivityForm mode="create" categories={categories} />
    </div>
  );
}
