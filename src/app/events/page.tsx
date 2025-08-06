import Card from "@/components/events/EventsCard";

export default function EventsPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="gap-15 flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] pb-20">
      <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
      <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
      </div>
    </div>
  );
}