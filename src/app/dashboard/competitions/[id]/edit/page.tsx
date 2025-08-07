import CompetitionsForm from "@/components/competition/CompetitionForm";
import { getCompetitionById } from "@/lib/service/competition";
import { notFound } from "next/navigation";

export default async function EditCompetitionPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = await params.id;
  const competition = await getCompetitionById(id);

  if (!competition) {
    notFound();
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-[14vh] pb-10">
      <h1 className="text-3xl font-bold mb-6">Edit Competition</h1>
      <CompetitionsForm mode="edit" data={competition} />
    </div>
  );
}
