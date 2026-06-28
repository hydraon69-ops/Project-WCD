import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { id: 'fakta-pembuka', num: '01', text: 'Fakta Pembuka' },
  { id: 'umur-panjang', num: '02', text: 'Umur Panjang Peradaban' },
  { id: 'asal-usul', num: '03', text: 'Asal-Usul & Geografi' },
  { id: 'tiga-era', num: '04', text: 'Puncak Kejayaan' },
  { id: 'ilmu-inovasi', num: '05', text: 'Ilmu & Inovasi' },
  { id: 'agama-kosmologi', num: '06', text: 'Agama & Kosmologi' },
  { id: 'keruntuhan', num: '07', text: 'Keruntuhan' },
  { id: 'timeline', num: '08', text: 'Timeline' },
  { id: 'warisan', num: '09', text: 'Warisan Dunia' }
];

const MesirPage = () => {
  const [activeSection, setActiveSection] = useState('fakta-pembuka');
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -60% 0px' }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const timelineEvents = [
    { year: '~3100 SM', title: 'Penyatuan Entitas Tunggal', desc: 'Raja Narmer menyatukan Mesir Hulu dan Hilir.' },
    { year: '~2600 SM', title: 'Era Keemasan Pertama', desc: 'Dinasti Lama dimulai, pembangunan Piramida Giza.' },
    { year: '~2560 SM', title: 'Pembangunan Monumen Akbar', desc: 'Piramida Agung Giza dan Sfinks dibangun.' },
    { year: '~1550 SM', title: 'Kebangkitan Militer', desc: 'Kerajaan Baru: Mesir menjadi kekuatan militer terbesar.' },
    { year: '~30 SM', title: 'Akhir Era Firaun', desc: 'Cleopatra VII wafat, Mesir menjadi provinsi Romawi.' }
  ];

  const warisanRows = [
    { title: 'Sistem Kalender', badge: 'Warisan', desc: 'Sistem kalender 365 hari terperinci berdasarkan luapan berkala air Sungai Nil dan orbit matahari.' },
    { title: 'Hieroglif', badge: 'Warisan', desc: 'Aksara tulis formal berjumlah 700+ simbol piktogram untuk urusan pencatatan administrasi kenegaraan.' },
    { title: 'Arsitektur Monumental', badge: 'Warisan', desc: 'Bangunan makro permanen mulai dari kompleks Piramida Giza, patung Sphinx, hingga Kuil Karnak dan Abu Simbel.' },
    { title: 'Hukum & Perjanjian', badge: 'Warisan', desc: 'Perjanjian Kadesh (1247 SM) oleh Ramesses II sebagai dokumen pakta diplomatik perdamaian tertua di dunia.' }
  ];

  return (
    <div className="min-h-screen bg-[#F6F3ED] text-[#3E322B]">
      <div className="bg-[#2B231F] px-6 py-5 text-white">
        <button onClick={() => navigate('/home')} className="text-sm font-semibold transition hover:text-[#E07A5F]">
          ← Kembali ke Beranda
        </button>
      </div>

      <section className="relative overflow-hidden bg-[#2B231F] py-20 text-center text-[#F6F3ED] px-6 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#E07A5F] mb-6">Mesir Kuno · ~3100 SM – 30 SM</p>
          <h1 className="text-4xl font-light leading-tight md:text-5xl">Hadiah Sungai Nil untuk Dunia — Peradaban yang Tak Pernah Mati</h1>
          <p className="mt-6 text-base text-[#A99E95] md:text-lg">Lembah Sungai Nil, Afrika Utara</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeSection === item.id ? 'border-[#E07A5F] bg-[#E07A5F] text-white' : 'border-white/20 text-white/90 hover:border-[#E07A5F] hover:text-white'}`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="sticky top-6 self-start rounded-[32px] border border-[#DCD2C3] bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8E8076] mb-6">Isi Halaman</p>
          <div className="space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex w-full items-center gap-3 rounded-3xl px-5 py-3 text-left text-sm font-semibold transition ${activeSection === item.id ? 'bg-[#F4E7DC] text-[#3E322B]' : 'bg-slate-50 text-[#6D5F53] hover:bg-[#f7f2ea]'}`}
              >
                <span className="min-w-[30px] text-xs text-[#8E8076]">{item.num}</span>
                {item.text}
              </button>
            ))}
          </div>
        </aside>

        <main className="space-y-16">
          <section id="fakta-pembuka" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 1 · Fakta Pembuka</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Keajaiban Teknik di Padang Pasir</h2>
            <div className="rounded-[32px] border border-[#E5DACE] bg-[#2B231F] p-8 shadow-xl">
              <span className="mb-4 block text-xs uppercase tracking-[0.35em] text-[#E07A5F] font-semibold">Arsitektur Presisi Giza</span>
              <p className="text-lg leading-relaxed text-[#F6F3ED] font-serif italic">
                "Pada tahun 2560 SM, sekitar 20.000–30.000 pekerja membangun sebuah struktur yang begitu presisi sehingga sisi-sisinya melenceng kurang dari 5 sentimeter dari garis lurus sempurna — padahal panjangnya lebih dari 230 meter. Itu adalah Piramida Agung Giza."
              </p>
            </div>
          </section>

          <section id="umur-panjang" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 2 · Durasi Sejarah</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Peradaban yang Berlangsung Lebih Lama dari Apapun</h2>
            <div className="space-y-6 text-base leading-8 text-[#4B3F38]">
              <p>
                Dari semua peradaban kuno yang ada di muka bumi, Mesir adalah yang paling panjang umurnya. Selama lebih dari 3.000 tahun — dari penyatuan pertama sekitar 3100 SM hingga kematian Cleopatra VII pada 30 SM — Mesir tidak pernah benar-benar berhenti sebagai entitas peradaban yang kohesif. Jarak waktu antara kita hari ini dengan jatuhnya Kekaisaran Romawi Barat (476 M) adalah sekitar 1.550 tahun. Tetapi Piramida Giza sudah berusia lebih dari 2.000 tahun ketika Cleopatra lahir. Bagi Cleopatra, piramida-piramida itu sudah tampak sama tuanya seperti Cleopatra bagi kita hari ini.
              </p>
              <p>
                Rahasia umur panjang Mesir adalah Sungai Nil. Sejarawan Yunani Herodotus menyebutnya 'Hadiah Sungai Nil' — dan ia tidak keliru. Setiap tahun, banjir Nil yang terprediksi membawa lapisan lumpur hitam yang menyuburkan tanah di kedua tepiannya, menjadikan kawasan sempit itu salah satu lahan pertanian paling produktif di dunia kuno, dikelilingi oleh gurun yang secara alami melindunginya dari invasi.
              </p>
              <p>
                Namun kekuatan Mesir bukan hanya geografis. Peradaban ini membangun sistem administrasi, sistem kepercayaan, sistem tulisan, dan sistem hukum yang mampu bertahan melalui dinasti demi dinasti, penaklukan demi penaklukan, selama tiga milenium penuh. Tidak ada peradaban lain dalam sejarah manusia yang mencatat pencapaian serupa.
              </p>
            </div>
          </section>

          <section id="asal-usul" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 3 · Batas Alam</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Asal-Usul dan Geografi</h2>
            <div className="space-y-6 text-base leading-8 text-[#4B3F38]">
              <p>
                Mesir Kuno tumbuh di sepanjang jalur sempit yang diairi Sungai Nil — sebuah sungai yang mengalir dari pegunungan Afrika Tengah ke utara menuju Laut Mediterania. Di kiri dan kanan jalur subur ini hanya ada gurun: gurun Sahara di barat dan gurun Arabia di timur. Kondisi ini menciptakan peradaban yang terisolasi secara alami namun kaya secara agraris.
              </p>
              <p>
                Sebelum 3100 SM, Mesir terbagi menjadi dua kerajaan terpisah: Mesir Hulu (Upper Egypt) di selatan dengan ibu kota Tinis, dan Mesir Hilir (Lower Egypt) di utara dengan ibu kota Memphis. Perbedaan budaya, bahasa, dan tradisi antara keduanya sangat nyata — hingga seorang raja bernama Narmer (juga dikenal sebagai Menes) dari Mesir Hulu menyatukan keduanya dalam satu peristiwa yang kemudian dianggap sebagai kelahiran Mesir sebagai bangsa.
              </p>
              <p>
                Sistem ekonomi Mesir bertumpu pada pertanian gandum dan pohon papirus di sepanjang tepi Nil, yang kemudian diperdagangkan melalui sungai ke pelabuhan-pelabuhan di utara. Kapasitas produksi surplus inilah yang memungkinkan Mesir membiayai pembangunan monumen-monumen raksasa, memelihara tentara profesional, dan mendukung kelas pendeta dan administrator yang besar.
              </p>
            </div>
          </section>

          <section id="tiga-era" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 4 · Dinasti Emas</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Puncak Kejayaan — Tiga Era Keemasan</h2>
            <div className="overflow-hidden rounded-[32px] border border-[#E5DACE] bg-white shadow-sm">
              <table className="min-w-full border-collapse text-left text-sm text-[#4B3F38]">
                <thead className="bg-[#F7F0E6]">
                  <tr>
                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-[#8E8076]">Fase Kekuasaan</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-[#8E8076]">Garis Periode</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-[#8E8076]">Kontribusi & Karakteristik</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#E5DACE] bg-[#FCF7F2]">
                    <td className="px-6 py-5 font-semibold text-[#3E322B]">Kerajaan Lama</td>
                    <td className="px-6 py-5 text-[#6A5B4D]">~2686–2181 SM</td>
                    <td className="px-6 py-5 text-[#6A5B4D]">Abad Piramida monumental, konstruksi presisi makro oleh Imhotep (Saqqara & Giza).</td>
                  </tr>
                  <tr className="border-t border-[#E5DACE]">
                    <td className="px-6 py-5 font-semibold text-[#3E322B]">Kerajaan Baru</td>
                    <td className="px-6 py-5 text-[#6A5B4D]">~1550–1070 SM</td>
                    <td className="px-6 py-5 text-[#6A5B4D]">Ekspansi militer eksternal, masa kemegahan monumen Luxor, Perjanjian Damai Kadesh.</td>
                  </tr>
                  <tr className="border-t border-[#E5DACE] bg-[#FCF7F2]">
                    <td className="px-6 py-5 font-semibold text-[#3E322B]">Revolusi Tulis</td>
                    <td className="px-6 py-5 text-[#6A5B4D]">Seterusnya</td>
                    <td className="px-6 py-5 text-[#6A5B4D]">Hieroglif sebagai basis pencatatan hukum empiris, gulungan kertas Papirus fleksibel.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#4B3F38]">
              <p>
                Ketika Firaun Joser naik tahta sekitar 2686 SM, Mesir memasuki era yang kemudian dikenal sebagai Kerajaan Lama — periode ketika manusia pertama kali membangun monumen batu permanen dalam skala yang belum pernah ada sebelumnya. Arsitek jenius bernama Imhotep merancang piramida pertama: Piramida Berundak di Saqqara, yang juga merupakan bangunan batu besar pertama dalam sejarah manusia. Puncaknya datang di bawah pemerintahan Firaun Khufu (Cheops) sekitar 2560 SM. Piramida Agung yang dibangunnya di Giza menggunakan lebih dari 2,3 juta balok batu yang masing-masing beratnya antara 2,5 hingga 80 ton. Selama lebih dari 3.800 tahun, Piramida Agung Giza tetap menjadi bangunan tertinggi di muka bumi — sebuah rekor yang baru dilampaui pada tahun 1311 M oleh Katedral Lincoln di Inggris. Di kompleks yang sama, Sfinks Agung berdiri sebagai penjaga — patung terbesar dari zaman kuno, dengan panjang 73 meter dan tinggi 20 meter, dipahat langsung dari batu kapur alami. Sfinks adalah simbol kekuatan dan kearifan firaun: tubuh singa yang kuat, kepala manusia yang bijaksana.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-[#3E322B] mb-4">Era Kerajaan Baru: Mesir sebagai Kekuatan Militer (1550–1070 SM)</h3>
                <p>
                  Setelah periode pergolakan yang ditandai dengan invasi Bangsa Hiksos dari timur, Raja Ahmose I membebaskan Mesir dan memulai era yang disebut Kerajaan Baru — periode ketika Mesir mengalami kebangkitan militer dan kultural yang luar biasa. Pada masa ini, tentara Mesir tidak lagi hanya bertahan; mereka melancarkan ekspedisi dan penaklukan ke Nubia di selatan, Levant di utara, dan Libya di barat. Era ini melahirkan beberapa nama paling ikonik dalam sejarah: Ramesses II (Ramesses Agung), yang memerintah selama 66 tahun, membangun lebih banyak kuil dan monumen dari firaun manapun, dan menandatangani Perjanjian Kadesh pada 1247 SM — dokumen perjanjian damai tertua yang diketahui dan tersimpan dalam sejarah manusia. Pada era ini juga muncul Hatshepsut — salah satu dari sedikit perempuan yang memerintah Mesir sebagai firaun penuh, dan yang membangun kuil-kuil paling elegan di Deir el-Bahari.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#3E322B] mb-4">Hieroglif dan Papirus: Revolusi Tulis</h3>
                <p>
                  Salah satu kontribusi terbesar Mesir untuk peradaban manusia adalah sistem tulisan hieroglif — sistem yang menggunakan gambar dan simbol untuk merepresentasikan suara, kata, dan konsep abstrak. Dengan lebih dari 700 simbol yang diketahui, hieroglif bukan sekadar seni; ia adalah sistem administratif yang memungkinkan Mesir mendokumentasikan hukum, transaksi, sejarah, dan astronomi. Papirus — tanaman yang tumbuh di tepian Nil — menjadi medium tulisan pertama yang ringan, fleksibel, dan bisa dibawa bepergian. Gulungan papirus yang diekspor ke seluruh Mediterania kuno menjadi komoditas intelektual yang sangat berharga, dan kata 'paper' (kertas) dalam bahasa Inggris berasal langsung dari kata 'papyrus'.
                </p>
              </div>
            </div>
          </section>

          <section id="ilmu-inovasi" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 5 · Sains Praktis</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Warisan Ilmu yang Kita Gunakan Setiap Hari</h2>
            <p className="text-base leading-8 text-[#4B3F38] mb-6">
              Di balik kemegahan piramida dan mistisisme para dewa, Mesir Kuno adalah peradaban yang sangat ilmiah untuk zamannya. Kebutuhan praktis untuk mengelola banjir Nil, membangun struktur masif, dan mengelola kerajaan besar mendorong perkembangan ilmu pengetahuan yang luar biasa.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: 'Matematika Terapan', badge: 'Aritmatika', desc: 'Papirus Rhind mendokumentasikan rumusan pecahan dan perhitungan geometri tanah terukur paska luapan air sungai.' },
                { title: 'Sistem Penanggalan', badge: 'Astronomi', desc: 'Pengembangan siklus kalender 365 hari berbasis orbit rasi Sirius dan matahari yang diadaptasi menjadi kalender Gregorian modern.' },
                { title: 'Sains Kedokteran', badge: 'Anatomi', desc: 'Praktik bedah, formula obat herbal, serta pemahaman patologi struktural organ tubuh manusia lewat media Papirus Ebers.' },
                { title: 'Rekayasa Sipil', badge: 'Hidrolik', desc: 'Arsitektur penanganan bendungan irigasi massal terstruktur yang membagi surplus komoditas pangan di sepanjang wilayah gersang.' }
              ].map((card) => (
                <article key={card.title} className="rounded-[28px] border border-[#E5DACE] bg-white p-8 shadow-sm">
                  <span className="inline-flex rounded-full bg-[#F2E8DE] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7D5C4C] mb-4">{card.badge}</span>
                  <h3 className="text-xl font-semibold text-[#3E322B] mb-3">{card.title}</h3>
                  <p className="text-sm leading-7 text-[#6D5F55]">{card.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="agama-kosmologi" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 6 · Harmoni Ma'at</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Agama, Kosmologi, dan Konsep Ma'at</h2>
            <div className="space-y-6 text-base leading-8 text-[#4B3F38]">
              <p>
                Tidak ada aspek kehidupan Mesir Kuno yang tidak dipengaruhi agama. Berbeda dari banyak peradaban lain yang memisahkan dunia fisik dari dunia spiritual, bagi orang Mesir keduanya adalah satu kesatuan: alam semesta adalah ekspresi kehendak para dewa, dan tugas manusia adalah hidup selaras dengannya. Prinsip utama agama Mesir adalah Ma'at — sebuah konsep yang mencakup kebenaran, keadilan, keseimbangan, dan harmoni kosmik sekaligus. Ma'at bukan hanya nilai moral individual; ia adalah hukum alam yang menopang seluruh ketertiban alam semesta. Firaun berkewajiban menegakkan Ma'at di bumi, dan setiap warga negara berkewajiban hidup sesuai prinsip-prinsipnya agar alam semesta tetap berjalan dengan baik.
              </p>
              <p>
                Para dewa Mesir berjumlah ratusan — masing-masing menguasai aspek tertentu dari alam dan kehidupan. Dewa matahari Ra (atau Atum-Ra) adalah dewa tertinggi yang dipercaya menciptakan dunia dari kekacauan primordial. Osiris adalah dewa kematian dan kebangkitan; Isis, istrinya, adalah dewi sihir dan penyembuhan; Horus, putra mereka, adalah dewa langit yang melambangkan kekuasaan firaun di bumi; dan Anubis adalah dewa berwajah serigala yang mengantar jiwa ke alam baka.
              </p>
              <p>
                Konsep kehidupan setelah kematian dalam agama Mesir sangat kaya dan kompleks. Jiwa manusia dianggap terdiri dari sembilan elemen berbeda. Setelah kematian, jiwa menjalani perjalanan panjang menuju Hall of Truth (Aula Kebenaran), di mana jantungnya ditimbang dengan bulu kebenaran di hadapan Osiris. Jika jantung lebih ringan dari bulu itu — artinya orang itu hidup dengan Ma'at — ia diizinkan memasuki Field of Reeds (Ladang Alang-alang), surga abadi yang merupakan cermin kehidupan di bumi tanpa penyakit, penderitaan, dan kematian. Inilah mengapa mumifikasi begitu penting: tubuh fisik harus diawetkan agar jiwa memiliki tempat kembali. Dan inilah mengapa piramida dibangun: bukan sebagai pamer kekuasaan semata, melainkan sebagai kendaraan jiwa raja untuk naik ke surga dan bergabung dengan dewa-dewa.
              </p>
            </div>
          </section>

          <section id="keruntuhan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 7 · Akhir Dinasti</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Keruntuhan — Tiga Ribu Tahun yang Berakhir</h2>
            <p className="text-base leading-8 text-[#4B3F38]">
              Mesir tidak runtuh dalam satu malam. Proses keruntuhan dimulai dengan Periode Menengah Ketiga, ketika Mesir kembali terpecah antara Mesir Hulu yang dikuasai pendeta Thebes dan Mesir Hilir yang dikuasai pedagang dan penguasa asing. Bangsa Kush dari selatan kemudian menginvasi, diikuti Assyria dari timur, kemudian Persia di bawah Cambyses II yang menaklukkan Mesir pada 525 SM. Momen terakhir kejayaan Mesir datang ketika Alexander Agung dari Makedonia menaklukkan Mesir pada 332 SM. Setelah kematian Alexander, dinasti Ptolomeus memerintah Mesir selama tiga abad. Bab terakhir ditulis oleh Cleopatra VII — firaun terakhir yang memerintah Mesir sebagai entitas merdeka. Ketika ia meninggal pada 30 SM, Mesir menjadi provinsi Kekaisaran Romawi. Namun warisan Mesir tidak ikut mati: agama, arsitektur, kalender, dan ilmu pengetahuannya terus mengalir ke dalam peradaban Romawi, Kristen, dan Islam — dan dari sana ke seluruh dunia modern.
            </p>
          </section>

          <section id="timeline" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 8 · Lintas Waktu</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-8">Timeline Peradaban Mesir Kuno</h2>
            <div className="space-y-8 border-l border-[#E5DACE] pl-8">
              {timelineEvents.map((event) => (
                <div key={event.year} className="relative">
                  <span className="absolute -left-5 top-1 h-3 w-3 rounded-full bg-[#E07A5F]" />
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8E8076]">{event.year}</p>
                  <h3 className="text-2xl font-semibold text-[#3E322B] mb-2">{event.title}</h3>
                  <p className="text-base leading-7 text-[#4B3F38]">{event.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="warisan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#8E8076] mb-4">Bab 9 · Peninggalan Abadi</p>
            <h2 className="text-3xl font-semibold text-[#3E322B] mb-6">Peninggalan dan Warisan Dunia</h2>
            <div className="overflow-hidden rounded-[32px] border border-[#E5DACE] bg-white shadow-sm">
              <table className="min-w-full border-collapse text-left text-sm text-[#4B3F38]">
                <thead className="bg-[#F7F0E6]">
                  <tr>
                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-[#8E8076]">Nama Peninggalan</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-[#8E8076]">Klasifikasi</th>
                    <th className="px-6 py-4 font-semibold uppercase tracking-[0.16em] text-[#8E8076]">Deskripsi Historis</th>
                  </tr>
                </thead>
                <tbody>
                  {warisanRows.map((row, index) => (
                    <tr key={row.title} className={index % 2 === 0 ? 'bg-[#FCF7F2]' : ''}>
                      <td className="px-6 py-5 font-semibold text-[#3E322B]">{row.title}</td>
                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full bg-[#F3E4DA] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7D5C4C]">{row.badge}</span>
                      </td>
                      <td className="px-6 py-5 text-[#6D5F55]">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#4B3F38] mt-8">
              <p>
                Mesir kuno tidak pernah benar-benar mati — ia hanya berganti bahasa. Dari hieroglif ke bahasa Koptik ke bahasa Arab, dari firaun ke khalifah ke presiden, dari pemujaan Ra ke Kristen ke Islam. Mesir adalah bukti bahwa peradaban sejati bukan tentang bertahan hidup, tetapi tentang kemampuan untuk terus bertransformasi sambil mempertahankan jiwa.
              </p>
              <p>
                Meskipun ribuan tahun telah berlalu, Mesir masih belum selesai bercerita. Peradaban yang membangun untuk keabadian — yang mengukir kalimat di batu bukan di kayu, yang membangun piramida bukan rumah panggung — mengajarkan bahwa investasi paling bernilai bukan untuk hari ini, melainkan untuk ribuan tahun yang akan datang.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-[#E5DACE] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8E8076] mb-2">Berikutnya</p>
                <button onClick={() => navigate('/detail-mesopotamia')} className="rounded-full bg-[#2B231F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3B2F28]">
                  Mesopotamia Kuno / ~3500 SM →
                </button>
              </div>
              <p className="text-sm text-[#6D5F55]">Seri 5 Peradaban Kuno Dunia · Mesopotamia</p>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-[#2B231F] px-6 py-14 text-[#F6F3ED] sm:px-8">
        <div className="mx-auto max-w-7xl space-y-8 text-sm sm:flex sm:items-start sm:justify-between sm:space-y-0">
          <div>
            <p className="text-xl font-semibold">PERADABAN KUNO</p>
            <p className="mt-2 text-[#D9C7B5]">Seri 5 Peradaban Kuno Dunia — Konten Edukasi Bahasa Indonesia</p>
          </div>
          <div className="flex flex-wrap gap-4 text-[#B9AFA3]">
            {["Mesir", "Mesopotamia", "Sungai Indus", "Babilonia", "Roma", "Timeline", "Warisan"].map((item) => (
              <span key={item} className="text-sm">{item}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MesirPage;
