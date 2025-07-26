export type Activity = {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    teamInfo: string; // e.g. "Individual", "Team: 2-3 members"
};


export const mockActivities: Activity[] = [
    {
        id: 1,
        title: "Hackathon 2025",
        teamInfo: "Team: 2-3 members",
        description: "Ikuti lomba UI/UX tingkat nasional dan uji kreativitas desain antarmuka kamu.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 2,
        title: "Hackathon 2025",
        teamInfo: "Team: 3-5 members",
        description: "Bergabung dalam tim Business Plan untuk kompetisi antar universitas.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 3,
        title: "Hackathon 2025",
        teamInfo: "Team: 5-10 members",
        description: "Daftar sebagai relawan edukasi digital dan kewirausahaan untuk warga desa.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 4,
        title: "Hackathon 2025",
        teamInfo: "Individual",
        description: "Dibutuhkan mahasiswa untuk membantu proyek riset dosen di bidang AI & Kesehatan.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 5,
        title: "Hackathon 2025",
        teamInfo: "Individual",
        description: "Kesempatan untuk menjadi asdos di mata kuliah Object-Oriented Programming.",
        imageUrl: "/activities/bunny.jpg",
    },
    {
        id: 6,
        title: "Hackathon 2025",
        teamInfo: "Individual",
        description: "Bantu pengajaran dan koreksi tugas mahasiswa baru di kelas Matdis.",
        imageUrl: "/activities/bunny.jpg",
    },
];