import AchievementForm from "@/components/achievement/AchievementForm";

export default function CreateAchievementPage() {
  return (
    <>
      <div className='h-[6.5vh]'></div>
      <div className="flex py-10 flex-col justify-center items-center min-h-[93.5vh]">
        <h1 className="text-3xl font-bold mb-6">Create New Achievement</h1>
        <AchievementForm mode="create" />
      </div>
    </>
  );
}
