export type PresidentCardProps = {
  id: string;
  name: string;
  role: string;
  division: string;
  gender: "BOY" | "GIRL";
};

export type ImageConfig = {
  src: string;
  className?: string;
};

export type RoleConfig = {
  decorations: ImageConfig[];
  color: string;
};