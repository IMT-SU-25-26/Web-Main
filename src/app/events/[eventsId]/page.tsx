export default async function EventPage({
  params,
}: {
  params: Promise<{ eventsId: string }>;
}) {
  const { eventsId } = await params;

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="flex flex-col gap-15 items-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] overflow-hidden">
        <div>Event Page: {eventsId}</div>
      </div>
    </div>
  );
}
