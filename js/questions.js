// Data soal CBT (file biasa, bebas diedit).
// Struktur: { text, image (null/url), options[], answer_index (0=a ... 4=e) }
const QUESTIONS = [
  {
    "text": "Turunan pertama dari f(x) = x³ − 3x² + 2 adalah...",
    "image": null,
    "options": [
      "3x² − 6x",
      "3x² − 3x",
      "x² − 6x",
      "3x² − 6x + 2",
      "3x − 6"
    ],
    "answer_index": 0
  },
  {
    "text": "Nilai dari sin 30° adalah...",
    "image": null,
    "options": [
      "½√3",
      "1",
      "½",
      "½√2",
      "0"
    ],
    "answer_index": 2
  },
  {
    "text": "Suku ke-10 dari barisan aritmetika 3, 7, 11, 15, ... adalah...",
    "image": null,
    "options": [
      "37",
      "39",
      "41",
      "43",
      "47"
    ],
    "answer_index": 1
  },
  {
    "text": "Jumlah 5 suku pertama deret geometri 2 + 4 + 8 + ... adalah...",
    "image": null,
    "options": [
      "30",
      "48",
      "54",
      "62",
      "64"
    ],
    "answer_index": 3
  },
  {
    "text": "Nilai dari log 2 + log 5 adalah...",
    "image": null,
    "options": [
      "0",
      "2",
      "log 7",
      "10",
      "1"
    ],
    "answer_index": 4
  },
  {
    "text": "Sebuah dadu dilempar satu kali. Peluang munculnya mata dadu genap adalah...",
    "image": null,
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3",
      "5/6"
    ],
    "answer_index": 2
  },
  {
    "text": "Nilai dari lim<sub>x→2</sub> (x² − 4)/(x − 2) adalah...",
    "image": null,
    "options": [
      "4",
      "0",
      "2",
      "8",
      "Tak terhingga"
    ],
    "answer_index": 0
  },
  {
    "text": "Rumus Hukum II Newton yang benar adalah...",
    "image": null,
    "options": [
      "F = m / a",
      "F = m × a",
      "F = m + a",
      "F = a / m",
      "F = m × v"
    ],
    "answer_index": 1
  },
  {
    "text": "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s. Energi kinetik benda tersebut adalah...",
    "image": null,
    "options": [
      "3 J",
      "6 J",
      "9 J",
      "12 J",
      "18 J"
    ],
    "answer_index": 2
  },
  {
    "text": "Satuan SI untuk besaran usaha atau energi adalah...",
    "image": null,
    "options": [
      "Newton",
      "Watt",
      "Pascal",
      "Joule",
      "Hertz"
    ],
    "answer_index": 3
  },
  {
    "text": "Sebuah mobil mulai bergerak dari keadaan diam dengan percepatan tetap 2 m/s². Kecepatan mobil setelah 5 sekon adalah...",
    "image": null,
    "options": [
      "2 m/s",
      "5 m/s",
      "7 m/s",
      "12 m/s",
      "10 m/s"
    ],
    "answer_index": 4
  },
  {
    "text": "Rumus tekanan hidrostatis pada kedalaman h dalam fluida dengan massa jenis ρ adalah...",
    "image": null,
    "options": [
      "P = ρ × g × h",
      "P = ρ × g / h",
      "P = ρ / (g × h)",
      "P = g × h / ρ",
      "P = ρ + g + h"
    ],
    "answer_index": 0
  },
  {
    "text": "Rumus kimia untuk asam sulfat adalah...",
    "image": null,
    "options": [
      "HCl",
      "H<sub>2</sub>SO<sub>4</sub>",
      "HNO<sub>3</sub>",
      "H<sub>3</sub>PO<sub>4</sub>",
      "CH<sub>3</sub>COOH"
    ],
    "answer_index": 1
  },
  {
    "text": "Larutan netral pada suhu 25 °C memiliki nilai pH sebesar...",
    "image": null,
    "options": [
      "0",
      "5",
      "7",
      "9",
      "14"
    ],
    "answer_index": 2
  },
  {
    "text": "Ikatan kimia yang terbentuk pada senyawa NaCl (garam dapur) adalah ikatan...",
    "image": null,
    "options": [
      "Kovalen polar",
      "Ion",
      "Kovalen nonpolar",
      "Logam",
      "Hidrogen"
    ],
    "answer_index": 1
  },
  {
    "text": "Massa molekul relatif (Mr) H<sub>2</sub>O jika Ar H = 1 dan Ar O = 16 adalah...",
    "image": null,
    "options": [
      "16",
      "17",
      "20",
      "18",
      "34"
    ],
    "answer_index": 3
  },
  {
    "text": "Organel sel yang berfungsi menghasilkan energi (ATP) melalui respirasi seluler adalah...",
    "image": null,
    "options": [
      "Ribosom",
      "Lisosom",
      "Badan Golgi",
      "Kloroplas",
      "Mitokondria"
    ],
    "answer_index": 4
  },
  {
    "text": "Sel darah merah (eritrosit) berfungsi untuk...",
    "image": null,
    "options": [
      "Melawan kuman penyakit",
      "Membekukan darah",
      "Mengangkut oksigen",
      "Menghasilkan antibodi",
      "Mengangkut hormon"
    ],
    "answer_index": 2
  },
  {
    "text": "Enzim amilase pada air liur berfungsi mengubah...",
    "image": null,
    "options": [
      "Amilum menjadi maltosa",
      "Protein menjadi asam amino",
      "Lemak menjadi asam lemak",
      "Sukrosa menjadi fruktosa",
      "Maltosa menjadi glukosa"
    ],
    "answer_index": 0
  },
  {
    "text": "Tokoh yang dijuluki sebagai Bapak Genetika berkat percobaannya pada tanaman kacang ercis adalah...",
    "image": null,
    "options": [
      "Charles Darwin",
      "Louis Pasteur",
      "Robert Hooke",
      "Gregor Mendel",
      "Carolus Linnaeus"
    ],
    "answer_index": 3
  },
  {
    "text": "Organ yang menghasilkan hormon insulin untuk mengatur kadar gula darah adalah...",
    "image": null,
    "options": [
      "Hati",
      "Pankreas",
      "Lambung",
      "Ginjal",
      "Limpa"
    ],
    "answer_index": 1
  },
  {
    "text": "Perang Diponegoro (Perang Jawa) berlangsung pada tahun...",
    "image": null,
    "options": [
      "1825–1830",
      "1821–1837",
      "1808–1811",
      "1873–1904",
      "1945–1949"
    ],
    "answer_index": 0
  },
  {
    "text": "Organisasi pergerakan nasional Indonesia yang pertama kali berdiri pada tahun 1908 adalah...",
    "image": null,
    "options": [
      "Sarekat Islam",
      "Indische Partij",
      "Budi Utomo",
      "Taman Siswa",
      "Muhammadiyah"
    ],
    "answer_index": 2
  },
  {
    "text": "Sumpah Pemuda diikrarkan pada tanggal...",
    "image": null,
    "options": [
      "20 Mei 1908",
      "28 Oktober 1928",
      "17 Agustus 1945",
      "10 November 1945",
      "1 Juni 1945"
    ],
    "answer_index": 1
  },
  {
    "text": "Sistem Tanam Paksa (Cultuurstelsel) di Hindia Belanda diterapkan oleh Gubernur Jenderal...",
    "image": null,
    "options": [
      "H.W. Daendels",
      "Thomas Stamford Raffles",
      "J.P. Coen",
      "Johannes van den Bosch",
      "J.B. van Heutsz"
    ],
    "answer_index": 3
  },
  {
    "text": "Lapisan atmosfer tempat terjadinya peristiwa cuaca seperti hujan, angin, dan awan adalah...",
    "image": null,
    "options": [
      "Stratosfer",
      "Mesosfer",
      "Termosfer",
      "Eksosfer",
      "Troposfer"
    ],
    "answer_index": 4
  },
  {
    "text": "Wilayah Indonesia berada pada pertemuan tiga lempeng tektonik utama, yaitu...",
    "image": null,
    "options": [
      "Eurasia, Pasifik, dan Indo-Australia",
      "Eurasia, Afrika, dan Pasifik",
      "Amerika, Pasifik, dan Eurasia",
      "Antartika, Eurasia, dan Pasifik",
      "Afrika, Indo-Australia, dan Eurasia"
    ],
    "answer_index": 0
  },
  {
    "text": "Garis lintang 0° yang membagi bumi menjadi belahan utara dan selatan disebut...",
    "image": null,
    "options": [
      "Meridian Nol",
      "Khatulistiwa (Ekuator)",
      "Garis Balik Utara",
      "Garis Balik Selatan",
      "Garis Tanggal Internasional"
    ],
    "answer_index": 1
  },
  {
    "text": "Menurut hukum permintaan, jika harga suatu barang naik maka jumlah barang yang diminta akan... (ceteris paribus)",
    "image": null,
    "options": [
      "Naik",
      "Tetap",
      "Turun",
      "Tidak terbatas",
      "Menjadi nol"
    ],
    "answer_index": 2
  },
  {
    "text": "Lembaga yang berwenang menerbitkan uang kartal (uang kertas dan logam) di Indonesia adalah...",
    "image": null,
    "options": [
      "OJK",
      "Kementerian Keuangan",
      "Bank BRI",
      "Bank Indonesia",
      "Bank Mandiri"
    ],
    "answer_index": 3
  },
  {
    "text": "Kepanjangan dari PDB dalam ilmu ekonomi adalah...",
    "image": null,
    "options": [
      "Produk Domestik Bruto",
      "Pendapatan Devisa Bruto",
      "Pajak Daerah Bersih",
      "Produk Dalam Barang",
      "Pendapatan Domestik Bersih"
    ],
    "answer_index": 0
  },
  {
    "text": "Proses seseorang mempelajari norma, nilai, dan peran sosial agar dapat hidup di tengah masyarakat disebut...",
    "image": null,
    "options": [
      "Stratifikasi sosial",
      "Akulturasi",
      "Difusi",
      "Mobilitas sosial",
      "Sosialisasi"
    ],
    "answer_index": 4
  },
  {
    "text": "Seorang buruh pabrik yang kemudian diangkat menjadi manajer mengalami...",
    "image": null,
    "options": [
      "Mobilitas horizontal",
      "Mobilitas vertikal naik",
      "Mobilitas vertikal turun",
      "Akulturasi",
      "Asimilasi"
    ],
    "answer_index": 1
  },
  {
    "text": "Teks yang berisi ajakan atau bujukan agar pembaca melakukan sesuatu sesuai keinginan penulis disebut teks...",
    "image": null,
    "options": [
      "Deskripsi",
      "Persuasi",
      "Narasi",
      "Eksposisi",
      "Prosedur"
    ],
    "answer_index": 1
  },
  {
    "text": "Kalimat &quot;Ia bertarung bagaikan singa di medan perang&quot; menggunakan majas...",
    "image": null,
    "options": [
      "Metafora",
      "Hiperbola",
      "Personifikasi",
      "Simile (perumpamaan)",
      "Ironi"
    ],
    "answer_index": 3
  },
  {
    "text": "Kalimat yang berisi perintah, larangan, atau permintaan disebut kalimat...",
    "image": null,
    "options": [
      "Deklaratif",
      "Interogatif",
      "Imperatif",
      "Eksklamatif",
      "Majemuk"
    ],
    "answer_index": 2
  },
  {
    "text": "Choose the correct answer: She ____ to school every day.",
    "image": null,
    "options": [
      "go",
      "going",
      "gone",
      "went",
      "goes"
    ],
    "answer_index": 4
  },
  {
    "text": "Choose the correct answer: If I ____ rich, I would travel around the world.",
    "image": null,
    "options": [
      "am",
      "was",
      "were",
      "will be",
      "have been"
    ],
    "answer_index": 2
  },
  {
    "text": "Ketentuan bahwa &quot;Negara Indonesia adalah negara hukum&quot; tercantum dalam UUD 1945...",
    "image": null,
    "options": [
      "Pasal 1 ayat (1)",
      "Pasal 1 ayat (2)",
      "Pasal 1 ayat (3)",
      "Pasal 27 ayat (1)",
      "Pasal 33 ayat (1)"
    ],
    "answer_index": 2
  },
  {
    "text": "Bilangan biner 1010 jika dikonversi ke bilangan desimal bernilai...",
    "image": null,
    "options": [
      "8",
      "10",
      "12",
      "14",
      "16"
    ],
    "answer_index": 1
  }
];
