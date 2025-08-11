import Image from "next/image";

interface ContentProps {
  src: string;
  alt: string;
}

const Content = ({ src, alt }: ContentProps) => {
  return (
    <div className="w-full h-full relative border-l-6 border-r-6 border-t-33 border-b-33 border-[rgba(30,30,30,0)]">
      <div className="w-full h-full">
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={src}
          alt={alt}
          width={900}
          height={900}
          sizes="320px"
        />
      </div>
    </div>
  );
};

export default Content;