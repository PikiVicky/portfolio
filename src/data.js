// Semua isi konten portofolio ada di file ini. Edit di sini, tampilan ikut berubah.

export const profile = {
  name: 'Muhammad Aunur R.',
  initials: 'MAR',
  role: 'Fullstack Developer',
  location: 'Gresik, Jawa Timur',
  email: 'm.aunurrof@gmail.com',
  // Opsional: isi untuk menampilkan tombol WhatsApp, format 62812xxxxxxx (tanpa + dan 0 di depan).
  whatsapp: '',
  // Foto di bagian Tentang. File ada di folder public/, tulis tanpa garis miring di depan. Kosongkan untuk menyembunyikan.
  photo: 'foto.jpg',
  // Repo kode situs ini, tampil sebagai link di footer. Repo harus publik. Kosongkan untuk menyembunyikan link.
  sourceRepo: 'https://github.com/PikiVicky/portfolio',
  // Opsional: kosongkan untuk menyembunyikan tombolnya.
  socials: [
    { label: 'GitHub', href: 'https://github.com/PikiVicky' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maunurrof/' },
    { label: 'Instagram', href: 'https://www.instagram.com/pikivickyy/' },
  ],
  intro:
    'Fullstack developer dengan pengalaman lebih dari 5 tahun. Saya merancang, membangun, dan merawat aplikasi web, desktop, dan mobile, sekaligus menjelaskan hal teknis dengan bahasa yang mudah dipahami.',
}

export const stats = [
  { value: 5, suffix: '+', label: 'Tahun pengalaman' },
  { value: 3, suffix: '', label: 'Platform: web, desktop, mobile' },
  { value: 3, suffix: '', label: 'Tempat kerja' },
  { value: 2, suffix: '', label: 'Proyek eksplorasi' },
]

export const about = {
  paragraphs: [
    'Saya memulai karier sebagai programmer magang pada 2019, lalu tumbuh menjadi software engineer yang memegang aplikasi dari awal sampai akhir: perancangan, pembuatan, sampai maintenance.',
    'Kini saya bekerja sebagai IT Staff. Selain membuat aplikasi internal, saya menjadi IT Support, jadi saya ikut belajar jaringan dan perangkat keras. Pengalaman itu membuat saya melihat masalah dari sisi kode dan dari sisi pengguna.',
    'Di luar pekerjaan, saya mengeksplorasi teknologi baru lewat proyek kecil yang bisa dicoba langsung, seperti yang ada di bagian proyek di bawah.',
  ],
  traits: [
    { title: 'Teliti', text: 'Memeriksa detail sebelum aplikasi sampai ke pengguna.' },
    { title: 'Analitis', text: 'Membedah alur teknis dan alur proses sebelum menulis kode.' },
    { title: 'Komunikatif', text: 'Menjelaskan masalah teknis yang rumit secara lisan maupun tulisan.' },
  ],
}

export const experience = [
  {
    period: '2023 – Sekarang',
    role: 'IT Staff',
    company: 'PT. MK Prima Indonesia',
    place: 'Gresik, Jawa Timur',
    current: true,
    summary:
      'Tanggung jawab lebih luas: membuat beberapa aplikasi untuk kebutuhan perusahaan sekaligus menjadi IT Support.',
    points: [
      'Membangun beberapa aplikasi internal perusahaan',
      'Menjadi IT Support untuk karyawan',
      'Belajar dan menangani jaringan serta perangkat keras komputer',
    ],
    tags: ['Aplikasi internal', 'IT Support', 'Jaringan', 'Hardware'],
  },
  {
    period: '2020 – 2023',
    role: 'Software Engineer',
    company: 'PT. Merak Jaya Group',
    place: 'Surabaya, Jawa Timur',
    summary:
      'Pekerjaan pertama sebagai software engineer. Memegang perancangan, pembuatan, dan maintenance beberapa aplikasi perusahaan.',
    points: [
      'Aplikasi web dengan PHP, JavaScript, dan ExtJS',
      'Aplikasi desktop dengan Visual Basic',
      'Aplikasi mobile Android dengan Java, PHP, dan Laravel',
      'Pengelolaan database Oracle dan MySQL',
    ],
    tags: ['PHP', 'JavaScript', 'ExtJS', 'Visual Basic', 'Java', 'Laravel', 'Oracle', 'MySQL'],
  },
  {
    period: '2019',
    role: 'IT Staff (Magang)',
    company: 'PT. Citra Nusantara Gemilang',
    place: 'Cikarang, Jawa Barat',
    summary:
      'Magang di perusahaan minyak dan gas. Merancang dan membuat aplikasi web internal untuk menunjang kinerja karyawan.',
    points: ['Front end dengan framework MVC (CodeIgniter)', 'Back end PHP dengan database MySQL', 'Kolaborasi memakai Git'],
    tags: ['CodeIgniter', 'PHP', 'MySQL', 'Git'],
  },
]

export const projects = [
  {
    id: 'scoreboard',
    title: 'Universal Scoreboard',
    kind: 'Proyek eksplorasi · Real-time',
    tagline: 'Papan skor yang tersinkron real-time untuk banyak cabang olahraga.',
    description:
      'Aplikasi scoreboard untuk pertandingan sehari-hari. Skor diubah dari satu perangkat, dan layar lain langsung ikut berubah tanpa refresh.',
    highlights: [
      'Sinkronisasi skor real-time antar perangkat lewat Socket.io',
      'Mendukung sepak bola/futsal, basket, tenis, dan badminton',
      'Papan gabungan untuk memantau beberapa lapangan sekaligus',
      'Layar perayaan pemenang, plus opsi menentukan pemenang secara manual',
    ],
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.io'],
    repo: '',
    demo: '',
  },
  {
    id: 'spotfinder',
    title: 'SpotFinder',
    kind: 'Proyek eksplorasi · Discovery',
    tagline: 'Cari tempat ngopi, makan, dan nongkrong di sekitarmu tanpa filter manual.',
    description:
      'Aplikasi web untuk menemukan tempat di sekitar lokasi pengguna. Lengkap dengan foto, rating, dan review, plus tombol untuk yang malas memilih.',
    highlights: [
      'Cari lewat GPS browser atau ketik alamat manual',
      'Filter kategori (ngopi, makan, nongkrong, pom bensin) dan radius 1–10 km',
      'Foto, rating, dan review dari Google Places',
      'Tombol "Kejutkan Saya" memilih tempat secara acak',
      'Sumber data diabstraksi lewat provider, mudah diganti tanpa mengubah UI',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Geoapify', 'Google Places API'],
    repo: '',
    demo: '',
  },
]

export const skillGroups = [
  { title: 'Web', items: ['PHP', 'JavaScript', 'ExtJS', 'Laravel', 'CodeIgniter', 'React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'] },
  { title: 'Desktop', items: ['Visual Basic', 'Java', 'C#', 'C++'] },
  { title: 'Mobile', items: ['Java (Android)', 'PHP + Laravel (API)', 'Lumen'] },
  { title: 'Database', items: ['Oracle', 'MySQL', 'SQL Server'] },
  { title: 'Real-time & tools', items: ['Socket.io', 'TypeScript', 'Vite'] },
  { title: 'Version Control', items: ['Git', 'GitHub'] },
  { title: 'IoT', items: ['Internet of Things'] },
  { title: 'Di luar kode', items: ['Analisa alur teknis', 'Analisa alur proses', 'IT Support', 'Jaringan', 'Hardware', 'Kolaborasi tim'] },
]

export const education = [
  { period: '2016 – 2020', name: 'Politeknik Elektronika Negeri Surabaya (PENS)', level: 'Kuliah' },
  { period: '2013 – 2016', name: 'SMAN 1 Gresik', level: 'Sekolah Menengah Atas' },
]

export const languages = ['Indonesia', 'English']

export const tickerItems = [
  'PHP',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Laravel',
  'ExtJS',
  'Visual Basic',
  'Java',
  'Oracle',
  'MySQL',
  'SQL Server',
  'Socket.io',
  'Tailwind CSS',
  'Git',
]
