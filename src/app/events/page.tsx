import Card from "@/components/events/EventsCard";
import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="flex flex-col gap-15 items-center min-h-screen w-screen max-w-screen bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] pb-20">
        <div className="flex justify-center relative">
          <Image src="/events/event-header.svg" alt="eventheader" width={600} height={600}/>
          <Image className="absolute left-[-12rem] top-[2.5rem]" src="/events/yellow-star.webp" alt="yellowstar" width={175} height={175}/>
          <Image className="absolute right-[-15rem] top-[5rem]" src="/events/yellow-star.webp" alt="yellowstar" width={175} height={175}/>
        </div>

        <div className="w-full relative">
          <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
          <Image className="absolute right-[-15rem] top-[3rem]" src="/events/red-wheel.svg" alt="redwheel" width={400} height={400}/>
        </div>

        <div className="w-full relative">
          <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
          <Image className="rotate-[15deg] absolute left-[-4rem] top-[2rem]" src="/events/lightbulb.webp" alt="lightbulb" width={150} height={150}/>
          <Image className="rotate-[60deg] absolute left-[-4rem] top-[5rem]" src="/events/red-ribbon.webp" alt="redribbon" width={150} height={150}/>
        </div>
        
        <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />

        <div className="w-full relative">
          <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
          <Image className="absolute left-[-20rem] top-[-5rem]" src="/events/blue-wheel.svg" alt="bluewheel" width={400} height={400}/>
        </div>

        <div className="w-full relative">
          <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
          <Image className="absolute right-[0rem] top-[2rem]" src="/events/green-arrow.webp" alt="greenarrow" width={200} height={200}/>
        </div>
        
        <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
        <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
        <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />
        <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={false} />
        <Card title="TECHNOCAMP" date="21 OCTOBER 2025" isreverse={true} />

      </div>
    </div>
  );
}