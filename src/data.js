const audioUrls = {
    en: 'https://listen.manaratalharamain.gov.sa:2020/stream/English/stream',
    ur: 'https://listen.manaratalharamain.gov.sa:2020/stream/Urdu/stream',
    fr: 'https://listen.manaratalharamain.gov.sa:2020/stream/French/stream',
    fa: 'https://listen.manaratalharamain.gov.sa:2020/stream/Persian/stream',
    ms: 'https://listen.manaratalharamain.gov.sa:2020/stream/Malay/stream',
    ha: 'https://listen.manaratalharamain.gov.sa:2020/stream/Hausa/stream',
    tr: 'https://listen.manaratalharamain.gov.sa:2020/stream/Turkish/stream',
    ru: 'https://listen.manaratalharamain.gov.sa:2020/stream/Russian/stream',
    bn: 'https://listen.manaratalharamain.gov.sa:2020/stream/Bengali/stream',
    zh: 'https://listen.manaratalharamain.gov.sa:2020/stream/Chinese/stream',
    sw: 'https://listen.manaratalharamain.gov.sa:2020/stream/Swahili/stream',
    es: 'https://listen.manaratalharamain.gov.sa:2020/stream/Spanish/stream',
    pt: 'https://listen.manaratalharamain.gov.sa:2020/stream/Portuguese/stream',
    am: 'https://listen.manaratalharamain.gov.sa:2020/stream/Amharic/stream',
    de: 'https://listen.manaratalharamain.gov.sa:2020/stream/German/stream',
    sv: 'https://listen.manaratalharamain.gov.sa:2020/stream/Swedish/stream',
    it: 'https://listen.manaratalharamain.gov.sa:2020/stream/Italian/stream',
    ml: 'https://listen.manaratalharamain.gov.sa:2020/stream/Malayalam/stream',
    bs: 'https://listen.manaratalharamain.gov.sa:2020/stream/Bosnian/stream',
    tl: 'https://listen.manaratalharamain.gov.sa:2020/stream/Filipino/stream',
  };
  
  export const videoData = {
    en: {
      videoId: 'bUHFg8CZFws',
      title: 'English Video Title',
      videoTitle: 'Arafah Sermon',
      script: "This is the script in English. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/us.svg',
      audio: audioUrls.en || null,
      counters: { total: 'Total Visitors', language: 'Visitors for English' }
    },
    es: {
      videoId: 'df-l2PxUidI',
      title: 'Spanish Video Title',
      videoTitle: 'Sermón de Arafat',
      script: "Este es el guion en español. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/es.svg',
      audio: audioUrls.es || null,
      counters: { total: 'Total de Visitantes', language: 'Visitantes para Español' }
    },
    fr: {
      videoId: 'r_0sL_Sj5T8',
      title: 'French Video Title',
      videoTitle: 'Sermon d\'Arafat',
      script: "Ceci est le script en français. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/fr.svg',
      audio: audioUrls.fr || null,
      counters: { total: 'Total des Visiteurs', language: 'Visiteurs pour Français' }
    },
    de: {
      videoId: 'eVTXPUF4Oz4',
      title: 'German Video Title',
      videoTitle: 'Arafat-Predigt',
      script: "Dies ist das Skript auf Deutsch. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/de.svg',
      audio: audioUrls.de || null,
      counters: { total: 'Gesamt Besucher', language: 'Besucher für Deutsch' }
    },
    it: {
      videoId: 'lY2yjAdbvdQ',
      title: 'Italian Video Title',
      videoTitle: 'Sermone di Arafat',
      script: "Questo è il copione in italiano. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/it.svg',
      audio: audioUrls.it || null,
      counters: { total: 'Visitatori Totali', language: 'Visitatori per Italiano' }
    },
    pt: {
      videoId: 'F9kXstb9FF4',
      title: 'Portuguese Video Title',
      videoTitle: 'Sermão de Arafat',
      script: "Este é o script em português. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/pt.svg',
      audio: audioUrls.pt || null,
      counters: { total: 'Total de Visitantes', language: 'Visitantes para Português' }
    },
    ru: {
      videoId: '3tmd-ClpJxA',
      title: 'Russian Video Title',
      videoTitle: 'Проповедь Арафата',
      script: "Это скрипт на русском. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ru.svg',
      audio: audioUrls.ru || null,
      counters: { total: 'Всего Посетителей', language: 'Посетители для Русский' }
    },
    zh: {
      videoId: 'kJQP7kiw5Fk',
      title: 'Chinese Video Title',
      videoTitle: '阿拉法讲道',
      script: "这是中文脚本。 " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/cn.svg',
      audio: audioUrls.zh || null,
      counters: { total: '总访客数', language: '访客为 中文' }
    },
    ja: {
      videoId: '60ItHLz5WEA',
      title: 'Japanese Video Title',
      videoTitle: 'アラファ説教',
      script: "これは日本語のスクリプトです。 " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/jp.svg',
      audio: null,
      counters: { total: '総訪問者数', language: '訪問者 日本語' }
    },
    ko: {
      videoId: 'YQHsXMglC9A',
      title: 'Korean Video Title',
      videoTitle: '아라파 설교',
      script: "이것은 한국어 스크립트입니다. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/kr.svg',
      audio: null,
      counters: { total: '총 방문자 수', language: '방문자 한국어' }
    },
    ar: {
      videoId: 'WvhmhoL_k3Y',
      title: 'Arabic Video Title',
      videoTitle: 'خطبة عرفة',
      script: "هذا هو النص باللغة العربية. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/sa.svg',
      audio: null,
      counters: { total: 'إجمالي الزوار', language: 'الزوار لـ عربي' }
    },
    hi: {
      videoId: 'RgKAFK5djSk',
      title: 'Hindi Video Title',
      videoTitle: 'अराफात का प्रवचन',
      script: "यह हिंदी में स्क्रिप्ट है। " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/in.svg',
      audio: null,
      counters: { total: 'कुल आगंतुक', language: 'आगंतुक हिंदी के लिए' }
    },
    tr: {
      videoId: 'bSfpSOBD30U',
      title: 'Turkish Video Title',
      videoTitle: 'Arafat Vaazı',
      script: "Bu Türkçe senaryo. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/tr.svg',
      audio: audioUrls.tr || null,
      counters: { total: 'Toplam Ziyaretçi', language: 'Türkçe Ziyaretçiler' }
    },
    nl: {
      videoId: 'OPf0YbXqDm0',
      title: 'Dutch Video Title',
      videoTitle: 'Arafat Preek',
      script: "Dit is het script in het Nederlands. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/nl.svg',
      audio: null,
      counters: { total: 'Totaal Bezoekers', language: 'Bezoekers voor Nederlands' }
    },
    sv: {
      videoId: 'pRpeEdMmmQ0',
      title: 'Swedish Video Title',
      videoTitle: 'Arafat Predikan',
      script: "Detta är skriptet på svenska. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/se.svg',
      audio: audioUrls.sv || null,
      counters: { total: 'Totalt Besökare', language: 'Besökare för Svenska' }
    },
    pl: {
      videoId: 'e-ORhEE9VVg',
      title: 'Polish Video Title',
      videoTitle: 'Kazanie Arafat',
      script: "To jest skrypt po polsku. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/pl.svg',
      audio: null,
      counters: { total: 'Łączna liczba odwiedzających', language: 'Odwiedzający dla Polski' }
    },
    el: {
      videoId: 'SlPhMPnQ58k',
      title: 'Greek Video Title',
      videoTitle: 'Κήρυγμα του Αραφάτ',
      script: "Αυτό είναι το σενάριο στα ελληνικά. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/gr.svg',
      audio: null,
      counters: { total: 'Σύνολο επισκεπτών', language: 'Επισκέπτες για Ελληνικά' }
    },
    th: {
      videoId: 'tt2k8PGm-TI',
      title: 'Thai Video Title',
      videoTitle: 'คำเทศนาอาราฟะ',
      script: "นี่คือสคริปต์ในภาษาไทย " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/th.svg',
      audio: null,
      counters: { total: 'จำนวนผู้เข้าชมทั้งหมด', language: 'ผู้เข้าชมสำหรับภาษาไทย' }
    },
    he: {
      videoId: 'N0JtV_a_YbY',
      title: 'Hebrew Video Title',
      videoTitle: 'דרשת ערפאת',
      script: "זהו התסריט בעברית " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/il.svg',
      audio: null,
      counters: { total: 'סה"כ מבקרים', language: 'מבקרים עבור עברית' }
    },
    vi: {
      videoId: 'CevxZvSJLk8',
      title: 'Vietnamese Video Title',
      videoTitle: 'Bài giảng Arafat',
      script: "Đây là kịch bản bằng tiếng Việt. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/vn.svg',
      audio: null,
      counters: { total: 'Tổng số khách', language: 'Khách cho Tiếng Việt' }
    },
    id: {
      videoId: 'q0hyYWKXF0Q',
      title: 'Indonesian Video Title',
      videoTitle: 'Khutbah Arafat',
      script: "Ini adalah skrip dalam bahasa Indonesia. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/id.svg',
      audio: null,
      counters: { total: 'Total Pengunjung', language: 'Pengunjung untuk Bahasa Indonesia' }
    },
    ms: {
      videoId: '3AtDnEC4zak',
      title: 'Malay Video Title',
      videoTitle: 'Khutbah Arafah',
      script: "Ini adalah skrip dalam bahasa Melayu. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/my.svg',
      audio: audioUrls.ms || null,
      counters: { total: 'Jumlah Pengunjung', language: 'Pengunjung untuk Bahasa Melayu' }
    },
    fa: {
      videoId: 'JGwWNGJdvx8',
      title: 'Persian Video Title',
      videoTitle: 'خطبه عرفات',
      script: "این اسکریپت به زبان فارسی است. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ir.svg',
      audio: audioUrls.fa || null,
      counters: { total: 'تعداد کل بازدیدکنندگان', language: 'بازدیدکنندگان برای فارسی' }
    },
    ur: {
      videoId: 'rYEDA3JcQqw',
      title: 'Urdu Video Title',
      videoTitle: 'خطبہ عرفات',
      script: "یہ اردو میں اسکرپٹ ہے۔ " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/pk.svg',
      audio: audioUrls.ur || null,
      counters: { total: 'کل زائرین', language: 'اردو کے لئے زائرین' }
    },
    bn: {
      videoId: '2Vv-BfVoq4g',
      title: 'Bengali Video Title',
      videoTitle: 'আরাফাতের খুতবা',
      script: "এটি বাংলা ভাষায় স্ক্রিপ্ট। " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/bd.svg',
      audio: audioUrls.bn || null,
      counters: { total: 'মোট দর্শক', language: 'বাংলার জন্য দর্শক' }
    },
    ta: {
      videoId: 'uelHwf8o7_U',
      title: 'Tamil Video Title',
      videoTitle: 'அரஃபாவின் போதனை',
      script: "இது தமிழ் மொழியில் உள்ள உரை. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/in.svg',
      audio: null,
      counters: { total: 'மொத்த பார்வையாளர்கள்', language: 'தமிழ் பார்வையாளர்கள்' }
    },
    te: {
      videoId: 'U0CGsw6h60k',
      title: 'Telugu Video Title',
      videoTitle: 'అరఫత్ ప్రసంగం',
      script: "ఇది తెలుగు భాషలో స్క్రిప్ట్. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/in.svg',
      audio: null,
      counters: { total: 'మొత్తం సందర్శకులు', language: 'తెలుగు కోసం సందర్శకులు' }
    },
    mr: {
      videoId: 'hT_nvWreIhg',
      title: 'Marathi Video Title',
      videoTitle: 'अराफात प्रवचन',
      script: "हे मराठी भाषेतील स्क्रिप्ट आहे. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/in.svg',
      audio: null,
      counters: { total: 'एकूण भेट देणारे', language: 'मराठी साठी भेट देणारे' }
    },
    pa: {
      videoId: '34Na4j8AVgA',
      title: 'Punjabi Video Title',
      videoTitle: 'ਅਰਫਾਤ ਦਾ ਉਪਦੇਸ਼',
      script: "ਇਹ ਪੰਜਾਬੀ ਵਿੱਚ ਸਕ੍ਰਿਪਟ ਹੈ. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/in.svg',
      audio: null,
      counters: { total: 'ਕੁੱਲ ਵਿਜ਼ਟਰਜ਼', language: 'ਪੰਜਾਬੀ ਲਈ ਵਿਜ਼ਟਰਜ਼' }
    },
    sw: {
      videoId: 'hT_nvWreIhg',
      title: 'Swahili Video Title',
      videoTitle: 'Mahubiri ya Arafat',
      script: "Hii ni hati kwa Kiswahili. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ke.svg',
      audio: audioUrls.sw || null,
      counters: { total: 'Wageni Wote', language: 'Wageni kwa Kiswahili' }
    },
    am: {
      videoId: 'L_jWHffIx5E',
      title: 'Amharic Video Title',
      videoTitle: 'የአራፋ ስብከት',
      script: "ይህ በአማርኛ ላይ የተጻፈ ጽሑፍ ነው። " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/et.svg',
      audio: audioUrls.am || null,
      counters: { total: 'ጠቅላላ ጎብኝዎች', language: 'እንግዶች አማርኛ ላይ' }
    },
    az: {
      videoId: 'OPf0YbXqDm0',
      title: 'Azerbaijani Video Title',
      videoTitle: 'Ərəfat xütbəsi',
      script: "Bu Azərbaycan dilində skript. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/az.svg',
      audio: null,
      counters: { total: 'Ümumi Ziyarətçilər', language: 'Ziyarətçilər Azərbaycan dilində' }
    },
    kk: {
      videoId: 'YQHsXMglC9A',
      title: 'Kazakh Video Title',
      videoTitle: 'Арафат уағызы',
      script: "Бұл қазақ тіліндегі скрипт. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/kz.svg',
      audio: null,
      counters: { total: 'Жалпы келушілер', language: 'Қазақша келушілер' }
    },
    uz: {
      videoId: 'RgKAFK5djSk',
      title: 'Uzbek Video Title',
      videoTitle: 'Arofat vaʼzi',
      script: "Bu o'zbek tilidagi skript. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/uz.svg',
      audio: null,
      counters: { total: 'Jami Tashrifchilar', language: 'Oʻzbek Tilidagi Tashrifchilar' }
    },
    my: {
      videoId: '3AtDnEC4zak',
      title: 'Burmese Video Title',
      videoTitle: 'အာရဖတ် ဆုတောင်းပွဲ',
      script: "ဤသည်မှာ မြန်မာဘာသာဖြင့် စာရင်းပါသည်။ " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/mm.svg',
      audio: null,
      counters: { total: 'စုစုပေါင်း ဧည့်သည်များ', language: 'မြန်မာ ဘာသာတွင် ဧည့်သည်များ' }
    },
    ka: {
      videoId: 'SlPhMPnQ58k',
      title: 'Georgian Video Title',
      videoTitle: 'არაფატის ქადაგება',
      script: "ეს არის სკრიპტი ქართულად. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ge.svg',
      audio: null,
      counters: { total: 'საერთო ვიზიტორები', language: 'ვიზიტორები ქართული' }
    },
    mn: {
      videoId: 'pRpeEdMmmQ0',
      title: 'Mongolian Video Title',
      videoTitle: 'Арафат Номлол',
      script: "Энэ бол монгол хэл дээрх скрипт юм. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/mn.svg',
      audio: null,
      counters: { total: 'Нийт зочид', language: 'Монгол хэл дээрх зочид' }
    },
    ne: {
      videoId: 'e-ORhEE9VVg',
      title: 'Nepali Video Title',
      videoTitle: 'अराफात प्रवचन',
      script: "यो नेपालीमा स्क्रिप्ट हो। " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/np.svg',
      audio: null,
      counters: { total: 'कुल आगन्तुक', language: 'नेपालीका लागि आगन्तुक' }
    },
    si: {
      videoId: '3tmd-ClpJxA',
      title: 'Sinhala Video Title',
      videoTitle: 'අරාපත දේශනා',
      script: "මෙය සිංහල භාෂාවෙන් ලියන ලද සටහනකි. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/lk.svg',
      audio: null,
      counters: { total: 'සම්පූර්ණ පිවිසුම්', language: 'සිංහල සඳහා පිවිසුම්' }
    },
    km: {
      videoId: 'kJQP7kiw5Fk',
      title: 'Khmer Video Title',
      videoTitle: 'អារ៉ាប៍សេម',
      script: "នេះគឺជាស្ក្រីបជាភាសាខ្មែរ។ " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/kh.svg',
      audio: null,
      counters: { total: 'សរុបអ្នកទស្សនា', language: 'អ្នកទស្សនាសម្រាប់ភាសាខ្មែរ' }
    },
    lo: {
      videoId: '9bZkp7q19f0',
      title: 'Lao Video Title',
      videoTitle: 'ການສູນໃສ',
      script: "ນີ້ແມ່ນສະບັບລາວ " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/la.svg',
      audio: null,
      counters: { total: 'ຜູ້ມາເຂົ້າຊົມທັງໝົດ', language: 'ຜູ້ມາເຂົ້າຊົມສຳລັບພາສາລາວ' }
    },
    tl: {
      videoId: '60ItHLz5WEA',
      title: 'Tagalog Video Title',
      videoTitle: 'Sermon ng Arafat',
      script: "Ito ay ang script sa Tagalog. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ph.svg',
      audio: audioUrls.tl || null,
      counters: { total: 'Kabuuang Mga Bisita', language: 'Mga Bisita para sa Tagalog' }
    },
    yo: {
      videoId: 'YQHsXMglC9A',
      title: 'Yoruba Video Title',
      videoTitle: 'Ààlàfá Sọ̀rọ̀ Àsàyàn',
      script: "Eyi ni iwe afọwọkọ ni Yoruba. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ng.svg',
      audio: null,
      counters: { total: 'Gbogbo Àlejò', language: 'Àlejò fún Yorùbá' }
    },
    ig: {
      videoId: 'tt2k8PGm-TI',
      title: 'Igbo Video Title',
      videoTitle: 'Okwuchukwu nke Arafat',
      script: "Nke a bụ akwụkwọ ede okwu na Igbo. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ng.svg',
      audio: null,
      counters: { total: 'Ndi ọbịa niile', language: 'Ọbịa maka Igbo' }
    },
    ha: {
      videoId: '3JZ_D3ELwOQ',
      title: 'Hausa Video Title',
      videoTitle: 'Huduba ta Arafat',
      script: "Wannan shine rubutun a Hausa. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/ng.svg',
      audio: audioUrls.ha || null,
      counters: { total: 'Jimillar Baƙi', language: 'Baƙi don Hausa' }
    },
    af: {
      videoId: 'r_0sL_Sj5T8',
      title: 'Afrikaans Video Title',
      videoTitle: 'Arafat-prediking',
      script: "Dit is die draaiboek in Afrikaans. " + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(10),
      flag: 'https://flagcdn.com/za.svg',
      audio: null,
      counters: { total: 'Totale Besoekers', language: 'Besoekers vir Afrikaans' }
    },
  };
  