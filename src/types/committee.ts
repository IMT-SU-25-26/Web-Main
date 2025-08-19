export type PresidentCardProps = {
  id: string;
  name: string;
  role: string;
  division: string;
  gender: "BOY" | "GIRL";
  imagesrc?: string;
};

export type ImageConfig = {
  src: string;
  className?: string;
};

export type RoleConfig = {
  decorations: ImageConfig[];
  color: string;
};