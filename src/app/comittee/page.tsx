import Card from "@/components/ComitteeCard";
export default function Home() {
return (
    <>
    <div className="h-[10vh] bg-[#F1EEE6]"></div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-33.5 h-6.5 flex justify-center items-center mx-auto">HOD</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="HOD" gender="BOY"/>
    <Card name="Nama Lengkap" role="VICE PRES" division="HOD" gender="BOY"/>
    <Card name="Nama Lengkap" role="SECRETARY" division="HOD" gender="GIRL"/>
    <Card name="Nama Lengkap" role="TREASURER" division="HOD" gender="GIRL"/>
    </div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-33.5 h-6.5 flex justify-center items-center mx-auto">INTERNAL</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="INTERNAL" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="INTERNAL" gender="GIRL"/>
    </div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-33.5 h-6.5 flex justify-center items-center mx-auto">EXTERNAL</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="EXTERNAL" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="EXTERNAL" gender="BOY"/>
    </div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-33.5 h-6.5 flex justify-center items-center mx-auto">PDD DESIGN</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="PDD DESIGN" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="PDD DESIGN" gender="GIRL"/>
    </div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-50 h-6.5 flex justify-center items-center mx-auto">PDD DOCUMENTATION</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="PDD DOCUMENTATION" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="PDD DOCUMENTATION" gender="BOY"/>
    </div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-50 h-6.5 flex justify-center items-center mx-auto">PUBLIC RELATION</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="PUBLIC RELATION" gender="GIRL"/>
    <Card name="Nama Lengkap" role="MEMBER" division="PUBLIC RELATION" gender="BOY"/>
    </div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-50 h-6.5 flex justify-center items-center mx-auto">SOCIAL ACTIVITY</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="SOCIAL ACTIVITY" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="SOCIAL ACTIVITY" gender="BOY"/>
    </div>
    <h1 className="mt-3.5 bg-amber-300 text-black font-extrabold text-base py-0.5 px-0.5 w-33.5 h-6.5 flex justify-center items-center mx-auto">TECHNOLOGY</h1>
    <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-10 justify-center items-center">
    <Card name="Nama Lengkap" role="PRESIDENT" division="TECHNOLOGY" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="BOY"/>
    <Card name="Nama Lengkap" role="MEMBER" division="TECHNOLOGY" gender="GIRL"/>
    </div>
    </>
);
}
