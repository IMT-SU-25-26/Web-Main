import CompetitionForm from "@/components/competition/CompetitionForm";

export default function CreateCompetitionPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Create New Competition</h1>
      <CompetitionForm mode="create" />
    </div>
  );
}
