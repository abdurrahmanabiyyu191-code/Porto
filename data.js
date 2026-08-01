const portfolioData = {
    // 1. TENTANG SAYA & FOTO
    profile: {
        name: "Hi Im Abiyyu",
        role: "IoT Engineer & Hardware Engineer", // Ganti sesuai gelar/profesi
        about: "Lulusan D4 Teknik Elektronika Politeknik Negeri Padang 2026 yang energetik dan disiplin, dengan ketertarikan tinggi pada robotika, pemrograman, dan IoT (Internet of Things). Andal dalam menggunakan berbagai perangkat lunak pemrograman, didukung kemampuan berpikir kritis dan problem-solving. Aktif berorganisasi di kampus dan mengikuti berbagai event kewirausahaan, mampu bekerja secara individu maupun dalam tim, serta memiliki minat tinggi dalam kewirausahaan dan bisnis.",
        photoUrl: "1.png", // Ganti dengan path/URL foto Anda
        cvUrl: "#" // Link ke Google Drive CV Anda (opsional)
    },

    // 2. PENGALAMAN KERJA (Bisa ditambah/dikurangi)
    experiences: [
        {
            title: "Magang",
            company: "PT Service Center",
            period: "2019 ",
            description: "Reparasi barang elektronik bermerek LG",
            logoUrl: "2.png" // URL/path logo perusahaan
        },
        {
            title: "Magang",
            company: "PT Citra Langgeng Sentosa",
            period: "1 agustus 2025 - 31 Januari 2026",
            description: "Support Engineer dalam menginstalasi Robot AMR,AGV serta Arm Robot untuk sesuai kebutuhan industri ",
            logoUrl: "3.png"
        }
    ],

// 3. PROYEK (Tambahkan item baru di dalam tanda kurung siku [])
    projects: [
        {
            title: "Sistem Pemantauan Postur Duduk Cerdas",
            category: "IoT & Machine Learning",
            description: "Sistem deteksi postur dan durasi duduk untuk kesehatan usia produktif menggunakan algoritma Random Forest",
            techStack: ["ESP32", "Random Forest", "Python", "Firebase"],
            imageUrl: "projects/Projects1/2.png",
            link: "projects/Projects1/postur-duduk.html"
        },
        {
            title: "Robot Line Foloower",
            category: "Robotics",
            description: "Robot line follower adalah robot yang bisa bergerak secara otomatis mengikuti jalur/garis yang sudah ditentukan (biasanya garis hitam di atas permukaan putih, atau sebaliknya) tanpa perlu dikendalikan manual.",
            techStack: ["PHOTODIODA", "ATMEGA 32", "DRIVER L298N MINI"],
            imageUrl: "projects/Projects2/2.png",
            link: "projects/Projects2/pj2.html"
        },
        // --- PROYEK KE-3 (BARU) ---
        {
            title: "Robot Soccer",
            category: "Robotics ",
            description: "Robot soccer (robot sepak bola) adalah cabang robotika di mana robot-robot dirancang dan diprogram untuk bermain sepak bola",
            techStack: ["Robotics", "Arduino nano", "Microcontroller", "C++"],
            imageUrl: "projects/Projects3/2.png", // Ganti dengan path foto proyek 3
            link: "projects/Projects3/PJ3.html"   // Ganti dengan link proyek 3
        },
        // --- PROYEK KE-4 (BARU) ---
        {
            title: "Modul Pembelajaran Mikrokontroler",
            category: "IOT",
            description: "Modul Pembelajaran Mikrokontroler adalah perangkat atau kit pembelajaran (baik berupa hardware, software, atau kombinasi keduanya) yang dirancang khusus untuk membantu seseorang memahami dan mempraktikkan konsep-konsep mikrokontroler secara terstruktur — mulai dari dasar-dasar pemrograman, arsitektur sistem, hingga penerapan dalam proyek nyata (embedded systems).",
            techStack: ["IOT", "Microcontroller", "Sensor", "Website"],
            imageUrl: "projects/Projects4/2.png", // Ganti dengan path foto proyek 4
            link: "projects/Projects4/PJ4.html" // Ganti dengan link proyek 4
        }
        ,
        // --- PROYEK KE-5 (BARU) ---
        {
            title: "RANCANG BANGUN SISTEM  MONITORING GEDUNG WALET",
            category: "IOT",
            description: "Rancang Bangun Sistem Monitoring Gedung Walet adalah judul/topik proyek (sering dipakai sebagai judul skripsi/tugas akhir di bidang teknik elektro, elektronika, atau sistem komputer) yang berarti merancang dan membangun sebuah sistem untuk memantau kondisi di dalam gedung/rumah burung walet secara otomatis menggunakan teknologi mikrokontroler dan sensor (IoT)",
            techStack: ["IOT", "Microcontroller", "Sensor", "Website"],
            imageUrl: "projects/Projects5/2.png", // Ganti dengan path foto proyek 4
            link: "projects/Projects5/PJ5.html" // Ganti dengan link proyek 4
        }
        ,
        // --- PROYEK KE-6 (BARU) ---
        {
            title: "Rancang Bangun Pengering Rumput Laut Berbasis PID",
            category: "IOT",
            description: "Modul Pembelajaran Mikrokontroler adalah perangkat atau kit pembelajaran (baik berupa hardware, software, atau kombinasi keduanya) yang dirancang khusus untuk membantu seseorang memahami dan mempraktikkan konsep-konsep mikrokontroler secara terstruktur — mulai dari dasar-dasar pemrograman, arsitektur sistem, hingga penerapan dalam proyek nyata (embedded systems).",
            techStack: ["IOT", "Microcontroller", "Sensor", "Website"],
            imageUrl: "projects/Projects6/2.png", // Ganti dengan path foto proyek 4
            link: "projects/Projects6/PJ6.html" // Ganti dengan link proyek 4
        }
    ],
   // 4. PENGHARGAAN
    awards: [
        {
            title: "Juara 1 Robot Transporter dan Juara 2 Design Poster Robot Transporter",
            issuer: "Politeknik Negeri Semarang",
            year: "2024",
            description: "Kompetisi Teknologi",
            imageUrl: "Penghargaan/Penghargaan1/1.png", // <--- Tambahkan path gambar Anda di sini
            link: "Penghargaan/Penghargaan1/Penghargaan1.html"
        },
        {
            title: "Studi Independent",
            issuer: "Indobot Academy",
            year: "2024",
            description: "Studi Independent.",
            imageUrl: "Penghargaan/Penghargaan2/2.png", // <--- Tambahkan path gambar Anda di sini
            link: "#" // Tambahkan link jika ada
        }
    ],

    // 5. KONTAK & MEDIA SOSIAL
contact: {
    email: "abdurrahmanabiyyu191@gmail.com",
    location: "Indonesia",
    socials: [
        { name: "LinkedIn", url: "https://linkedin.com", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
        { name: "GitHub", url: "https://github.com", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
        { name: "Instagram", url: "https://www.instagram.com/abiyyuabdurrahman/", icon: "4.png" }
    ]
}
