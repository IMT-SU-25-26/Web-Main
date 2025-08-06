export default function EventsCard() {
  return (
    <div className="bg-[url('/background-paper.png')] bg-cover p-6 rounded-md w-full max-w-4xl mx-auto shadow-md relative">
      {/* Card Content */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative">
        {/* Left Image Placeholder */}
        <div className="w-full md:w-1/2 h-48 bg-gray-300 rounded-md shadow-inner" />

        {/* Right Text Section */}
        <div className="flex flex-col items-start text-left gap-2">
          <h1 className="text-3xl font-extrabold text-black">TECHNOCAMP</h1>
          <p className="text-lg font-semibold tracking-wider">
            21 OCTOBER 2024
          </p>

          {/* View More Button */}
          <div className="relative">
            <div className="explore-button absolute w-[180px] h-[45px] bg-[#0E54B2] p-4 px-8 rounded-2xl z-[2]">
              <div className="bg-[#ED427C] flex items-center justify-center w-full h-full absolute left-[5%] top-[-10%] rounded-2xl z-[-1]">
                <h1 className="explore-button-text font-family-impact text-xl text-center text-white">
                  View More
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
