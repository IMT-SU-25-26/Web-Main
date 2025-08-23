"use client";

import Image from "next/image";
import PulseForm from "@/components/pulse/Form";
import "@/styles/event/pulse/registration.css";

export default function RegisterPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/event/pulse/registration/Background.png"
          alt="Underwater background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Animated Fish Elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 15 }}
      >
        {/* Fish 1 - Bottom Left */}
        <div className="absolute bottom-24 left-1/4 animate-swim-free-1 fish-debug pointer-events-auto">
          <Image
            src="/event/pulse/registration/Fish-1.png"
            alt="Fish 1"
            width={150}
            height={100}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Fish 2 - Bottom Right */}
        <div className="absolute bottom-48 right-1/12 animate-swim-free-2 fish-debug pointer-events-auto">
          <Image
            src="/event/pulse/registration/Fish-2.png"
            alt="Fish 2"
            width={120}
            height={80}
            className="opacity-100 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Fish 3 - Top Left */}
        <div
          className="absolute top-40 left-1/8 animate-swim-free-3 hidden md:block"
          style={{ animationDelay: "2s" }}
        >
          <Image
            src="/event/pulse/registration/Fish-3.png"
            alt="Fish 3"
            width={130}
            height={90}
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Manta Ray - Top Right */}
        <div className="absolute top-24 right-1/16 transform -translate-x-1/2 animate-manta-glide">
          <Image
            src="/event/pulse/registration/Manta-Ray.png"
            alt="Manta Ray"
            width={150}
            height={150}
            className="opacity-85 hover:opacity-100 transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Bubble Effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 5 }}
      >
        {/* Small Bubbles */}
        <div
          className="bubble bubble-small bubble-delay-1"
          style={{ left: "10%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-2"
          style={{ left: "25%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-3"
          style={{ left: "45%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-4"
          style={{ left: "60%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-5"
          style={{ left: "80%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-6"
          style={{ left: "90%" }}
        ></div>

        {/* Medium Bubbles */}
        <div
          className="bubble bubble-medium bubble-delay-1"
          style={{ left: "15%" }}
        ></div>
        <div
          className="bubble bubble-medium bubble-delay-3"
          style={{ left: "35%" }}
        ></div>
        <div
          className="bubble bubble-medium bubble-delay-5"
          style={{ left: "65%" }}
        ></div>
        <div
          className="bubble bubble-medium bubble-delay-7"
          style={{ left: "85%" }}
        ></div>

        {/* Large Bubbles */}
        <div
          className="bubble bubble-large bubble-delay-2"
          style={{ left: "20%" }}
        ></div>
        <div
          className="bubble bubble-large bubble-delay-4"
          style={{ left: "50%" }}
        ></div>
        <div
          className="bubble bubble-large bubble-delay-6"
          style={{ left: "75%" }}
        ></div>
        <div
          className="bubble bubble-large bubble-delay-8"
          style={{ left: "5%" }}
        ></div>

        {/* Extra Small Bubbles */}
        <div
          className="bubble bubble-small bubble-delay-7"
          style={{ left: "32%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-8"
          style={{ left: "72%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-1"
          style={{ left: "55%" }}
        ></div>
        <div
          className="bubble bubble-small bubble-delay-3"
          style={{ left: "95%" }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <PulseForm />
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/3 right-10 z-5 animate-float bubble-effect">
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 z-5 animate-float delay-300 bubble-effect">
        <div className="w-2 h-2 bg-blue-200/40 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 z-5 animate-float delay-700 bubble-effect">
        <div className="w-4 h-4 bg-cyan-200/30 rounded-full"></div>
      </div>
    </div>
  );
}
