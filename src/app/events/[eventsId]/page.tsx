import Carousel from "@/components/eventsdetails/Carousel";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventsId: string }>;
}) {
  const { eventsId } = await params;

  return (
    <div className="w-full overflow-x-hidden">
      <div className="h-[10vh] bg-[#F1EEE6]"></div>
      <div className="flex flex-col items-center min-h-screen w-full bg-[url('/backgrounds/background-paper.png')] bg-contain bg-center bg-[#F1EEE6] overflow-hidden">
        {/* Tampilkan Carousel */}
        <div className="w-full relative mt-10 mb-5 rotate-[-2deg]">
          <Carousel />
        </div>

        {/* Event Detail Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Date and Title */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-black leading-none">
              {eventsId}
            </h1>
            <p className="text-2xl sm:text2-xl lg:text-3xl font-bold text-black tracking-wider ml-[0.2rem] mt-4 md:mt-0 md:mb-[0.4rem]">
              21 OCTOBER 2024
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6 text-black text-lg md:text-xl leading-relaxed">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <p>
              It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem
              Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}