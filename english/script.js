const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const languageButtons = document.querySelectorAll('.language-switch button');
const translations = {
  'Home': 'Beranda', 'About': 'Tentang', 'Skills': 'Keahlian', 'Projects': 'Proyek', 'Certificates': 'Sertifikat', 'Activities': 'Kegiatan', 'Contact': 'Kontak', "Let's talk": 'Ayo berbincang',
  'English Portfolio · 2026': 'Portofolio Bahasa Inggris · 2026', 'Be seen.': 'Tunjukkan dirimu.', 'Be known.': 'Kenali dirimu.', 'Be you.': 'Jadilah dirimu.', 'Hello! I am': 'Halo, saya', ', a student who turns curiosity into digital projects, thoughtful designs, and meaningful experiences.': ', seorang siswi yang mengubah rasa ingin tahu menjadi proyek digital, desain yang matang, dan pengalaman bermakna.', 'Explore my portfolio': 'Jelajahi portofolio', 'Get to know me': 'Kenali saya', 'Based in Semarang, Indonesia': 'Berdomisili di Semarang, Indonesia', 'SIJA · Grade 12': 'SIJA · Kelas 12', 'currently learning': 'sedang belajar', 'new things daily': 'hal baru setiap hari', 'creative': 'kreatif', 'mindset': 'pola pikir', 'designing with': 'merancang dengan', 'purpose': 'tujuan',
  'Web development': 'Pengembangan web', 'UI/UX design': 'Desain UI/UX', 'Networking': 'Jaringan komputer', 'Creative learning': 'Belajar kreatif', '01 / A little about me': '01 / Sedikit tentang saya', 'A curious mind': 'Pikiran yang ingin tahu', "with a maker's heart.": 'dengan jiwa seorang kreator.', 'I am a student at': 'Saya adalah siswi di', ', majoring in Information Systems, Networking, and Applications (SIJA).': ', dengan jurusan Sistem Informasi, Jaringan, dan Aplikasi (SIJA).', 'I enjoy learning new things, creating digital projects, and working with other people. For me, technology is not only about how things work, but also about how they make people feel.': 'Saya senang mempelajari hal baru, membuat proyek digital, dan bekerja bersama orang lain. Bagi saya, teknologi bukan hanya tentang cara sesuatu bekerja, tetapi juga tentang perasaan yang ditimbulkannya.', 'Read my journey': 'Lihat perjalanan saya', 'Nickname': 'Nama panggilan', 'Education': 'Pendidikan', 'Major': 'Jurusan', 'Personality': 'Kepribadian', 'Information Systems, Networking & Applications': 'Sistem Informasi, Jaringan & Aplikasi', 'Curious · Creative · Disciplined': 'Ingin tahu · Kreatif · Disiplin',
  '02 / My learning path': '02 / Perjalanan belajar saya', 'Growing one': 'Bertumbuh', 'chapter at a time.': 'selangkah demi selangkah.', 'Every new skill is a small step toward the person and professional I want to become.': 'Setiap keterampilan baru adalah langkah kecil menuju pribadi dan profesional yang ingin saya capai.', 'Current chapter': 'Bab saat ini', 'Information Systems, Networking, and Applications (SIJA)': 'Sistem Informasi, Jaringan, dan Aplikasi (SIJA)', 'I learn about web development, networking, databases, UI/UX design, and information technology.': 'Saya belajar pengembangan web, jaringan komputer, basis data, desain UI/UX, dan teknologi informasi.', 'Junior High School': 'Sekolah Menengah Pertama', 'My first years of learning and exploring.': 'Tahun-tahun pertama saya belajar dan bereksplorasi.',
  '03 / Things I can do': '03 / Hal yang bisa saya lakukan', 'Skills built through': 'Keterampilan dari', 'practice & play.': 'latihan dan eksplorasi.', 'My skills are always growing. I believe the best way to learn is to stay curious, try things, and keep improving.': 'Keterampilan saya terus berkembang. Saya percaya cara terbaik untuk belajar adalah tetap ingin tahu, berani mencoba, dan terus berkembang.', 'Technical skills': 'Keterampilan teknis', 'Basic cybersecurity': 'Dasar keamanan siber', 'Design skills': 'Keterampilan desain', 'Graphic design': 'Desain grafis', 'Soft skills': 'Keterampilan interpersonal', 'Communication': 'Komunikasi', 'Teamwork': 'Kerja sama tim', 'Creativity': 'Kreativitas', 'Problem solving': 'Pemecahan masalah', 'Presentation': 'Presentasi', 'Tools I use': 'Alat yang saya gunakan',
  '04 / Selected projects': '04 / Proyek pilihan', 'A few things': 'Beberapa hal', 'I have made.': 'yang telah saya buat.', 'A couple of projects I have worked on so far.': 'Beberapa proyek yang telah saya kerjakan sejauh ini.', 'Design': 'Desain', 'A design project I created.': 'Proyek desain yang saya buat.', 'Design project': 'Proyek desain', 'Video': 'Video', 'Video project': 'Proyek video', 'A video project made with Alice 3.': 'Proyek video yang dibuat dengan Alice 3.', 'Watch the video': 'Tonton videonya',
  '05 / Certificates & achievements': '05 / Sertifikat & pencapaian', 'Proof of my': 'Bukti karya dan', 'work and growth.': 'perkembangan saya.', 'Awards and courses that celebrate what I have learned and achieved.': 'Penghargaan dan kursus yang mencerminkan hal-hal yang telah saya pelajari dan capai.', '1st place · Poomsae': 'Juara 1 · Poomsae', '3rd place · Poomsae': 'Juara 3 · Poomsae', 'IT Essentials': 'Dasar-Dasar TI', 'Operating Systems Basics': 'Dasar-Dasar Sistem Operasi', 'Introduction to Modern AI': 'Pengantar AI Modern',
  '05 / Other activities': '05 / Kegiatan lainnya', 'Learning beyond': 'Belajar lebih dari', 'the classroom.': 'sekadar di kelas.', '“Every experience gives me a new perspective and a chance to grow.”': '“Setiap pengalaman memberi saya sudut pandang baru dan kesempatan untuk berkembang.”', 'School activities': 'Kegiatan sekolah', 'Showing up': 'Hadir dan terlibat', 'matters.': 'itu berarti.', 'I have participated in Paskibra, choir, and school events.': 'Saya pernah mengikuti Paskibra, paduan suara, dan berbagai acara sekolah.', 'Choir': 'Paduan suara', 'School events': 'Acara sekolah', 'Other activities': 'Kegiatan lainnya', 'Growing through': 'Berkembang melalui', 'participation.': 'partisipasi.', 'I enjoy joining collaborative school activities, helping with creative tasks, and learning from the people around me.': 'Saya senang mengikuti kegiatan sekolah bersama, membantu tugas kreatif, dan belajar dari orang-orang di sekitar saya.', 'Team projects': 'Proyek tim', 'Presentations': 'Presentasi', 'Creative work': 'Karya kreatif',
  '06 / More about me': '06 / Lebih banyak tentang saya', 'The details that': 'Hal-hal kecil yang', 'make me, me.': 'membentuk diri saya.', 'Personal information': 'Informasi pribadi', 'Full name:': 'Nama lengkap:', 'Nickname:': 'Nama panggilan:', 'School:': 'Sekolah:', 'Major:': 'Jurusan:', 'Grade:': 'Kelas:', 'Location:': 'Lokasi:', 'Nationality:': 'Kewarganegaraan:', 'My personality': 'Kepribadian saya', 'I am curious, creative, responsible, and open to learning from new experiences.': 'Saya ingin tahu, kreatif, bertanggung jawab, dan terbuka untuk belajar dari pengalaman baru.', 'My strengths': 'Kelebihan saya', 'Things I want to improve': 'Hal yang ingin saya tingkatkan', 'I want to become more confident, organized, and consistent in communicating my ideas.': 'Saya ingin lebih percaya diri, teratur, dan konsisten dalam menyampaikan ide.', 'Why I chose SIJA': 'Alasan saya memilih SIJA', 'I chose SIJA because I am interested in technology and want to understand how websites, networks, and digital systems are created.': 'Saya memilih SIJA karena tertarik pada teknologi dan ingin memahami cara membuat situs web, jaringan, dan sistem digital.', 'What I like about SIJA': 'Hal yang saya sukai dari SIJA', 'I like that SIJA combines creativity with logical thinking. It gives me opportunities to build projects and solve real problems.': 'Saya suka SIJA karena memadukan kreativitas dengan pemikiran logis. Jurusan ini memberi saya kesempatan untuk membuat proyek dan menyelesaikan masalah nyata.', 'My interests': 'Minat saya', 'My hobbies': 'Hobi saya', 'Listening to music and cooking help me relax and enjoy my free time.': 'Mendengarkan musik dan memasak membantu saya bersantai dan menikmati waktu luang.', 'My values': 'Nilai-nilai saya', 'Discipline': 'Disiplin', 'Responsibility': 'Tanggung jawab', 'Growth': 'Perkembangan', 'Perseverance': 'Ketekunan', 'Fun facts about me': 'Fakta menarik tentang saya', 'I enjoy turning simple ideas into visual concepts.': 'Saya senang mengubah ide sederhana menjadi konsep visual.', 'I like exploring new tools and digital trends.': 'Saya suka menjelajahi alat baru dan tren digital.', 'I learn best by trying things directly.': 'Saya belajar paling baik dengan mencoba langsung.', 'I can be quiet at first, but I become active in a team.': 'Awalnya saya bisa pendiam, tetapi menjadi aktif saat bekerja dalam tim.',
  '07 / How I work': '07 / Cara saya bekerja', 'Ideas become real': 'Mewujudkan ide', 'step by step.': 'selangkah demi selangkah.', 'A good process helps me stay thoughtful, organized, and ready to improve.': 'Proses yang baik membantu saya tetap cermat, teratur, dan siap berkembang.', 'Problem solving': 'Pemecahan masalah', 'My problem-solving process': 'Proses pemecahan masalah saya', "I identify the problem, understand the user's needs, break it into smaller parts, try a solution, and test the result.": 'Saya mengenali masalah, memahami kebutuhan pengguna, membaginya menjadi bagian kecil, mencoba solusi, lalu menguji hasilnya.', 'What I learned': 'Hal yang saya pelajari', 'Good solutions need patience, research, and the willingness to revise an idea.': 'Solusi yang baik membutuhkan kesabaran, riset, dan kemauan untuk memperbaiki ide.', 'Design process': 'Proses desain', 'From research to improvement': 'Dari riset hingga penyempurnaan', 'Research': 'Riset', 'Planning': 'Perencanaan', 'Wireframing': 'Pembuatan wireframe', 'UI design': 'Desain UI', 'Development': 'Pengembangan', 'Testing': 'Pengujian', 'Improvement': 'Penyempurnaan', 'I use this process to create designs that are clear, useful, and enjoyable to use.': 'Saya menggunakan proses ini untuk membuat desain yang jelas, bermanfaat, dan nyaman digunakan.',
  '08 / Design showcase': '08 / Karya desain', 'Making ideas': 'Menghidupkan ide', 'look alive.': 'melalui desain.', 'Creating interfaces that feel clear and easy to use.': 'Membuat antarmuka yang jelas dan mudah digunakan.', 'Exploring color, layout, typography, and visual balance.': 'Mengeksplorasi warna, tata letak, tipografi, dan keseimbangan visual.', 'Building a visual identity with a consistent feeling.': 'Membangun identitas visual dengan nuansa yang konsisten.', 'Designing content that communicates quickly and creatively.': 'Merancang konten yang menyampaikan pesan secara cepat dan kreatif.',
  '09 / My favorite quote': '09 / Kutipan favorit saya', '“Be Seen.': '“Tunjukkan dirimu.', 'Be Known.': 'Kenali dirimu.', 'Be You.”': 'Jadilah dirimu.”', 'This quote reminds me to be confident in my identity, share my work, and stay authentic while I grow.': 'Kutipan ini mengingatkan saya untuk percaya diri, membagikan karya, dan tetap menjadi diri sendiri saat berkembang.', '10 / My future vision': '10 / Visi masa depan saya', 'Keep growing,': 'Terus berkembang,', 'keep creating.': 'terus berkarya.', 'I want to continue my education, improve my technology and communication skills, and build a career creating useful digital solutions.': 'Saya ingin melanjutkan pendidikan, meningkatkan keterampilan teknologi dan komunikasi, serta berkarier dengan membuat solusi digital yang bermanfaat.', 'See you there': 'Sampai jumpa', '11 / Teamwork': '11 / Kerja sama tim', 'Better together.': 'Lebih baik bersama.', 'In group projects, I learn to divide tasks, listen to different ideas, communicate clearly, and help the team reach a shared goal.': 'Dalam proyek kelompok, saya belajar membagi tugas, mendengarkan beragam ide, berkomunikasi dengan jelas, dan membantu tim mencapai tujuan bersama.', "12 / Lessons I've learned": '12 / Pelajaran yang saya dapat', 'Every project teaches me something new.': 'Setiap proyek mengajarkan hal baru.', 'Practice makes progress.': 'Latihan membawa kemajuan.', 'Teamwork matters.': 'Kerja sama itu penting.', 'Challenges help me grow.': 'Tantangan membantu saya berkembang.', 'Never stop learning.': 'Jangan berhenti belajar.',
  '06 / Looking forward': '06 / Langkah selanjutnya', 'Still learning,': 'Terus belajar,', 'still becoming.': 'terus bertumbuh.', 'In 2026, I am working on projects related to web development, IoT, networking, and cybersecurity. My short-term goal is to improve my technical and communication skills and complete my education successfully.': 'Pada 2026, saya mengerjakan proyek pengembangan web, IoT, jaringan, dan keamanan siber. Tujuan jangka pendek saya adalah meningkatkan keterampilan teknis dan komunikasi serta menyelesaikan pendidikan dengan baik.', 'My long-term goal is to continue my education and build a successful career while creating useful digital solutions.': 'Tujuan jangka panjang saya adalah melanjutkan pendidikan dan membangun karier yang sukses sambil menciptakan solusi digital yang bermanfaat.', "Let's connect": 'Mari terhubung',
  '07 / My memories & activities': '07 / Kenangan & kegiatan saya', 'Snapshots of': 'Potret', 'the journey.': 'perjalanan saya.', 'A few visual notes from the projects, practice, and moments that keep me moving.': 'Beberapa potret proyek, latihan, dan momen yang menyemangati saya.', 'Networking practice': 'Latihan jaringan', 'Learning how to configure a network.': 'Belajar mengonfigurasi jaringan.', 'Creative process': 'Proses kreatif', 'Turning an idea into a visual direction.': 'Mengubah ide menjadi arahan visual.', 'Project presentation': 'Presentasi proyek', 'Sharing what I have learned with others.': 'Berbagi hal yang telah saya pelajari.', '08 / A closer look': '08 / Lebih dekat', 'Want to know': 'Ingin tahu', 'more about me?': 'lebih banyak tentang saya?', 'Download my CV': 'Unduh CV saya', '09 / Say hello': '09 / Sapa saya', "Let's make": 'Mari ciptakan', 'something good.': 'sesuatu yang bermakna.', 'Thank you for visiting my portfolio. If you would like to know more about me or my projects, feel free to contact me.': 'Terima kasih sudah mengunjungi portofolio saya. Jika ingin mengetahui lebih lanjut tentang saya atau proyek saya, silakan hubungi saya.', 'Made with curiosity & care': 'Dibuat dengan rasa ingin tahu & sepenuh hati', 'Back to top': 'Kembali ke atas'
};
const englishTitle = document.title;
const phraseNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  const phrase = node.nodeValue.trim();
  if (Object.hasOwn(translations, phrase)) {
    phraseNodes.push({ node, phrase, prefix: node.nodeValue.match(/^\s*/)[0], suffix: node.nodeValue.match(/\s*$/)[0] });
  }
}

function setLanguage(language) {
  const isIndonesian = language === 'id';
  phraseNodes.forEach(({ node, phrase, prefix, suffix }) => {
    node.nodeValue = `${prefix}${isIndonesian ? translations[phrase] : phrase}${suffix}`;
  });
  document.documentElement.lang = language;
  document.title = isIndonesian ? 'Ammara Nadya | Portofolio Bahasa Inggris' : englishTitle;
  document.querySelector('meta[name="description"]').content = isIndonesian
    ? 'Portofolio bahasa Inggris RR. Ammara Nadya Shafwa.'
    : 'English portfolio of RR. Ammara Nadya Shafwa.';
  languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  localStorage.setItem('portfolio-language', language);
}

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem('portfolio-language') === 'id' ? 'id' : 'en');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('main section[id]');
const navigationItems = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navigationItems.forEach((item) => item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));

const revealObserver = new IntersectionObserver((entries, currentObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      currentObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const chosenCategory = filter.dataset.filter;
    projects.forEach((project) => {
      const matches = chosenCategory === 'all' || project.dataset.category === chosenCategory;
      project.style.display = matches ? '' : 'none';
    });
  });
});
