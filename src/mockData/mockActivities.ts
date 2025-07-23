export type Activity = {
    id: number;
    title: string;
    type: string; // e.g. "Lomba", "Pengabdian Masyarakat", etc.
    description: string;
    imageUrl?: string;
};

export const mockActivities: Activity[] = [
    {
        id: 1,
        title: "Pendaftaran Lomba UI/UX Nasional",
        type: "Lomba",
        description: "Ikuti lomba UI/UX tingkat nasional dan uji kreativitas desain antarmuka kamu.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 2,
        title: "Open Recruitment Lomba Business Plan",
        type: "Lomba",
        description: "Bergabung dalam tim Business Plan untuk kompetisi antar universitas.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 3,
        title: "Pengabdian Masyarakat ke Desa Binaan",
        type: "Pengabdian Masyarakat",
        description: "Daftar sebagai relawan edukasi digital dan kewirausahaan untuk warga desa.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 4,
        title: "Asisten Peneliti untuk Proyek AI",
        type: "Assistant Researcher",
        description: "Dibutuhkan mahasiswa untuk membantu proyek riset dosen di bidang AI & Kesehatan.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 5,
        title: "Lowongan Asisten Dosen OOP",
        type: "Kesempatan Asdos",
        description: "Kesempatan untuk menjadi asdos di mata kuliah Object-Oriented Programming.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 6,
        title: "Rekrutmen Asdos Matematika Diskrit",
        type: "Kesempatan Asdos",
        description: "Bantu pengajaran dan koreksi tugas mahasiswa baru di kelas Matdis.",
        imageUrl: "/activities/bunny.jpg",
    },
];
