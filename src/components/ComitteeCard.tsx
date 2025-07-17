import Image from "next/image";

type PresidentCardProps = {
  name: string;
  role: string;
  division: string;
  gender: "BOY" | "GIRL";
};

type ImageConfig = {
  src: string;
  className: string;
};

type RoleConfig = {
  decorations: ImageConfig[];
  color: string;
};

// Base configuration for common decorations
const DECORATIONS = {
  CROWN: (gender: string) => ({
    src: gender === "GIRL" ? "/comittee/crownpink.png" : "/comittee/crown.png",
    className: gender === "GIRL" 
      ? "absolute -top-[3.3rem] -left-[1.8rem] w-[8.5rem] h-auto" 
      : "absolute -top-[2.3rem] -left-[0.7rem] w-[7rem] h-auto"
  }),
  MIC: {
    src: "/comittee/mic.png",
    className: "absolute bottom-[3rem] -right-[1rem] w-[7rem] h-auto"
  },
  VIKING: {
    src: "/comittee/viking.png",
    className: "absolute -top-[3rem] right-[2.22rem] w-[7rem] h-auto"
  },
  BOOK: {
    src: "/comittee/book.png",
    className: "absolute bottom-[3.5rem] -right-[0rem] w-[7rem] h-auto"
  },
  MONEY: {
    src: "/comittee/money.png",
    className: "absolute bottom-[4.2rem] right-[0rem] w-[6rem] h-auto"
  },
  HOUSE: (gender: string) => ({
    src: gender === "GIRL" ? "/comittee/housepink.png" : "/comittee/houseblue.png",
    className: gender === "GIRL" 
      ? "absolute bottom-[4.7rem] right-[1rem] w-[4.5rem] h-auto"
      : "absolute bottom-[4.5rem] right-[1rem] w-[5rem] h-auto"
  }),
  LEAF: {
    src: "/comittee/leaf.png",
    className: "absolute bottom-[4.5rem] right-[1rem] w-[4rem] h-auto"
  },
  PAINT: (gender: string) => ({
    src: gender === "GIRL" ? "/comittee/paintpink.png" : "/comittee/paintblue.png",
    className: gender === "GIRL"
      ? "absolute bottom-[4.2rem] -right-[1rem] w-[6.7rem] h-auto"
      : "absolute bottom-[4.2rem] -right-[1rem] w-[6rem] h-auto"
  }),
  CAMERA: {
    src: "/comittee/camera.png",
    className: "absolute bottom-[4.2rem] -right-[0rem] w-[6rem] h-auto"
  },
  STATUE: (gender: string) => ({
    src: gender === "GIRL" ? "/comittee/statuepink.png" : "/comittee/statueblue.png",
    className: gender === "GIRL"
      ? "absolute bottom-[4.6rem] -right-[0.8rem] w-[6rem] h-auto"
      : "absolute bottom-[5rem] -right-[0rem] w-[5rem] h-auto"
  }),
  MEGAPHONE: {
    src: "/comittee/megaphone.png",
    className: "absolute bottom-[4rem] -right-[1rem] w-[7rem] h-auto"
  },
  LAPTOP: (gender: string) => ({
    src: gender === "GIRL" ? "/comittee/laptoppink.png" : "/comittee/laptopblue.png",
    className: "absolute bottom-[3.8rem] -right-[0.5rem] w-[6.5rem] h-auto"
  })
};

// Division configurations
const DIVISION_CONFIG: Record<string, Record<string, (gender: string) => RoleConfig>> = {
  HOD: {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.MIC],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB"
    }),
    "VICE PRES": (gender) => ({
      decorations: [DECORATIONS.VIKING],
      color: "#0555AB"
    }),
    SECRETARY: (gender) => ({
      decorations: [DECORATIONS.BOOK],
      color: "#F64A78"
    }),
    TREASURER: (gender) => ({
      decorations: [DECORATIONS.MONEY],
      color: "#F64A78"
    })
  },
  INTERNAL: {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.HOUSE(gender)],
      color: "#0555AB"
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.HOUSE(gender)],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB"
    })
  },
  EXTERNAL: {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.LEAF],
      color: "#0555AB"
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.LEAF],
      color: "#0555AB"
    })
  },
  "PDD DESIGN": {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.PAINT(gender)],
      color: "#0555AB"
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.PAINT(gender)],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB"
    })
  },
  "PDD DOCUMENTATION": {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.CAMERA],
      color: "#0555AB"
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.CAMERA],
      color: "#0555AB"
    })
  },
  "PUBLIC RELATION": {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.STATUE(gender)],
      color: "#F64A78"
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.STATUE(gender)],
      color: "#0555AB"
    })
  },
  "SOCIAL ACTIVITY": {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.MEGAPHONE],
      color: "#0555AB"
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.MEGAPHONE],
      color: "#0555AB"
    })
  },
  TECHNOLOGY: {
    PRESIDENT: (gender) => ({
      decorations: [DECORATIONS.CROWN(gender), DECORATIONS.LAPTOP(gender)],
      color: "#0555AB"
    }),
    MEMBER: (gender) => ({
      decorations: [DECORATIONS.LAPTOP(gender)],
      color: gender === "GIRL" ? "#F64A78" : "#0555AB"
    })
  }
};

export default function PresidentCard({ name, role, division, gender }: PresidentCardProps) {
  // Find the division config
  const divisionConfig = DIVISION_CONFIG[division];
  if (!divisionConfig) {
    console.warn(`No configuration found for division: ${division}`);
    return null;
  }

  // Find the role config - try exact match first, then look for partial matches
  let roleConfig: RoleConfig | undefined;
  
  // First try exact match
  const exactRoleKey = Object.keys(divisionConfig).find(
    key => key.toUpperCase() === role.toUpperCase()
  );
  
  if (exactRoleKey) {
    roleConfig = divisionConfig[exactRoleKey](gender);
  } else {
    // If no exact match, look for partial matches (e.g., "VICE PRES" might match "VICE PRESIDENT")
    const partialMatchKey = Object.keys(divisionConfig).find(
      key => role.toUpperCase().includes(key.toUpperCase())
    );
    
    if (partialMatchKey) {
      roleConfig = divisionConfig[partialMatchKey](gender);
    }
  }

  if (!roleConfig) {
    console.warn(`No configuration found for role: ${role} in division: ${division}`);
    return null;
  }

  const { decorations, color } = roleConfig;

  return (
    <div className="relative w-46 h-63 bg-white shadow-md rounded-md text-center pt-4">
      {decorations.map((decoration, index) => (
        <Image
          key={index}
          src={decoration.src}
          alt="Committee decoration"
          width={150}
          height={150}
          className={decoration.className}
        />
      ))}
      <div className="w-37 h-37 mx-auto rounded-full bg-[#D9D9D9] overflow-hidden">
        {/* Placeholder for member photo */}
      </div>
      <div
        className="mt-3.5 text-white font-extrabold text-base py-0.5 px-0.5 w-33.5 h-6.5 flex justify-center items-center mx-auto"
        style={{ backgroundColor: color }}
      >
        {role}
      </div>
      <div className="mt-3.5 text-sm">{name}</div>
    </div>
  );
}