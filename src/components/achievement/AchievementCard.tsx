"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AchievementCardProps } from "@/types/service/achievement";

const colorMap = {
  blue: "bg-[#0555AB]",
  green: "bg-[#4DAA5C]",
  pink: "bg-[#F64A78]",
  red: "bg-[#ED4E45]",
  yellow: "bg-[#F7C235]",
  gray: "bg-[#CCBCAF]",
};

interface AchievementCardPropsExtension extends AchievementCardProps {
  className?: string;
}

export const AchievementCard = ({
  title,
  type,
  description,
  borderColor,
  id,
  imageUrl,
  className
}: AchievementCardPropsExtension) => {
  const pathname = usePathname();
  const [swinging, setSwinging] = useState(false);

  // Refs to measure
  const cardRef = useRef<HTMLAnchorElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const [maxLines, setMaxLines] = useState<number | null>(null);

  const recalcClamp = () => {
    if (!cardRef.current || !descRef.current) return;

    const card = cardRef.current;
    const p = descRef.current;

    // Space from top of <p> to bottom of the card
    const cardRect = card.getBoundingClientRect();
    const pRect = p.getBoundingClientRect();
    const bottomPadding = 16; // small safety padding so text doesn't touch the edge
    const available = Math.max(0, cardRect.bottom - pRect.top - bottomPadding);

    // Compute line-height; fallback if it's "normal"
    const cs = window.getComputedStyle(p);
    let lineHeight = parseFloat(cs.lineHeight);
    if (Number.isNaN(lineHeight)) {
      const fontSize = parseFloat(cs.fontSize) || 14;
      lineHeight = fontSize * 1.3; // approximate "leading-snug"
    }

    const lines = Math.max(1, Math.floor(available / lineHeight));
    setMaxLines(lines-1);
  };

  useEffect(() => {
    // Initial calc after paint (fonts/layout ready)
    const id = requestAnimationFrame(recalcClamp);

    // Recalc on resize (more reliable than window resize alone)
    let ro: ResizeObserver | null = null;
    if (cardRef.current) {
      ro = new ResizeObserver(recalcClamp);
      ro.observe(cardRef.current);
    }

    // Also listen to window resize (orientation changes, etc.)
    window.addEventListener("resize", recalcClamp);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", recalcClamp);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      href={`${pathname.replace(/\/$/, "")}/${id}`}
      onMouseLeave={() => {
        setSwinging(true);
        setTimeout(() => setSwinging(false), 700);
      }}
      className={`relative w-[320px] h-[400px] overflow-hidden cursor-pointer hover:rotate-[1.3deg] hover:origin-top ${
        swinging ? "swing-effect" : ""
      } drop-shadow-md active:scale-100 active:brightness-90 duration-300 ${className}`}
    >
      <Image
        src="/achievements/AchievementCardBG.webp"
        alt="Achievement Card Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Image placeholder with bottom color bar */}
      <div className="mt-5 absolute top-[48px] left-[30px] w-[260px] h-[140px] bg-gray-300">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
        <div
          className={`absolute bottom-0 left-0 w-full h-[8px] ${colorMap[borderColor]}`}
        />
      </div>

      {/* Text content below image */}
      <div className="mt-5 absolute top-[200px] left-[30px] right-[30px]">
        <h3 className="text-black text-xl font-extrabold">{title}</h3>
        <span
          className={`uppercase font-impact ${colorMap[borderColor]} text-white text-[12px] px-2 py-1 inline-block mt-1 tracking-wide`}
          style={{ transform: "rotate(-0.8deg)" }}
        >
          {type}
        </span>
        <p
          ref={descRef}
          className="font-gill mt-1 text-sm text-black leading-snug overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: maxLines ?? "unset",
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};
