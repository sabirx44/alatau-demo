import type { Lang } from './langs';

const ru = {
  meta: { title: 'Alatau Smile — спокойная стоматология в Алматы', description: 'Имплантация, отбеливание, виниры и детская стоматология в Алматы. Цена до начала лечения, онлайн-запись и талон на приём с QR-кодом.' },
  nav: { services: 'Услуги', doctors: 'Врачи', book: 'Записаться', contacts: 'Контакты', lang: 'Язык' },
  hero: { eyebrow: 'Стоматология в Алматы · с 2014 года', title: 'Спокойная стоматология', text: 'Лечим без боли и называем цену до начала. Возьмите зеркало и посмотрите, что даёт одно отбеливание.', cta: 'Записаться', secondary: 'Цены', before: 'до', after: 'после', hint: 'Проведите зеркалом по фото' },
  trust: ['Лицензия МЗ РК', 'Партнёр Straumann', 'Рейтинг 4,9 в 2GIS', '12 лет в Алматы'],
  services: { title: 'Услуги и цены', text: 'Цена в плане лечения фиксируется до начала и не меняется в процессе.', from: 'от', book: 'Записаться' },
  doctors: { title: 'Врачи', text: 'Выберите врача и запишитесь сразу к нему.', years: 'лет практики', speaks: 'Говорит', next: 'Ближайшее окно', book: 'Записаться к врачу' },
  chart: { title: 'Где беспокоит?', text: 'Нажмите на зуб. Врач увидит его в заявке и подготовится к приёму.', mirror: 'вид как в зеркале', none: 'Зуб не выбран', left: 'слева', right: 'справа' },
  book: {
    title: 'Запись на приём', text: 'Администратор подтвердит время в течение 15 минут в рабочие часы.',
    name: 'Имя', phone: 'Телефон', service: 'Услуга', doctor: 'Врач', anyDoctor: 'Любой свободный', date: 'Дата', time: 'Время', tooth: 'Зуб', submit: 'Записаться', consult: 'Консультация',
    ticket: 'Талон на приём', ticketTitle: 'Вы записаны', patient: 'Пациент', note: 'Покажите QR-код на ресепшене', save: 'Сохранить талон', calendar: 'В календарь', close: 'Готово',
  },
  reviews: { title: 'Отзывы', rating: '4,9', count: '212 отзывов в 2GIS', items: [
    { name: 'Алия', text: 'Боялась имплантации, а в итоге ничего не почувствовала. Цену назвали до начала и не поменяли.' },
    { name: 'Ержан', text: 'Записался вечером на сайте, утром был на приёме. Талон с QR на ресепшене, всё заняло минуту.' },
    { name: 'Динара', text: 'Водим детей к Мадине. Сын теперь сам просится на осмотр.' },
  ] },
  contacts: { title: 'Ждём вас', address: 'Алматы, ул. Тимирязева, 42', hours: 'Ежедневно 9:00–21:00', phone: '+7 700 000 00 00', addressLabel: 'Адрес', hoursLabel: 'Часы работы', phoneLabel: 'Телефон', now: 'Сейчас в Алматы', route: 'Маршрут в 2GIS' },
  footer: 'Демо-проект SABR. Клиника, врачи и отзывы вымышлены, фото: авторы Pexels.',
};
type UI = typeof ru;

const uz: UI = {
  meta: { title: 'Alatau Smile — Olmaotadagi xotirjam stomatologiya', description: 'Olmaotada implantatsiya, oqartirish, vinirlar va bolalar stomatologiyasi. Narx davolashdan oldin, onlayn yozilish va QR talon.' },
  nav: { services: 'Xizmatlar', doctors: 'Shifokorlar', book: 'Yozilish', contacts: 'Aloqa', lang: 'Til' },
  hero: { eyebrow: 'Olmaotada stomatologiya · 2014 yildan', title: 'Xotirjam stomatologiya', text: 'Og‘riqsiz davolaymiz va narxni boshidan aytamiz. Oynani oling va bitta oqartirish nima berishini ko‘ring.', cta: 'Yozilish', secondary: 'Narxlar', before: 'oldin', after: 'keyin', hint: 'Oynani rasm ustida yurgizing' },
  trust: ['QR SSV litsenziyasi', 'Straumann hamkori', '2GIS da 4,9 reyting', 'Olmaotada 12 yil'],
  services: { title: 'Xizmatlar va narxlar', text: 'Davolash rejasidagi narx boshidan belgilanadi va o‘zgarmaydi.', from: 'dan', book: 'Yozilish' },
  doctors: { title: 'Shifokorlar', text: 'Shifokorni tanlang va to‘g‘ridan-to‘g‘ri unga yoziling.', years: 'yillik tajriba', speaks: 'Tillar', next: 'Eng yaqin vaqt', book: 'Shifokorga yozilish' },
  chart: { title: 'Qayer bezovta qilyapti?', text: 'Tishni bosing. Shifokor uni arizada ko‘radi va qabulga tayyorlanadi.', mirror: 'oynadagidek ko‘rinish', none: 'Tish tanlanmagan', left: 'chap', right: 'o‘ng' },
  book: {
    title: 'Qabulga yozilish', text: 'Administrator ish vaqtida 15 daqiqa ichida vaqtni tasdiqlaydi.',
    name: 'Ism', phone: 'Telefon', service: 'Xizmat', doctor: 'Shifokor', anyDoctor: 'Istalgan bo‘sh shifokor', date: 'Sana', time: 'Vaqt', tooth: 'Tish', submit: 'Yozilish', consult: 'Maslahat',
    ticket: 'Qabul talonchasi', ticketTitle: 'Siz yozildingiz', patient: 'Bemor', note: 'QR kodni qabulxonada ko‘rsating', save: 'Talonni saqlash', calendar: 'Kalendarga', close: 'Tayyor',
  },
  reviews: { title: 'Sharhlar', rating: '4,9', count: '2GIS da 212 ta sharh', items: [
    { name: 'Aliya', text: 'Implantatsiyadan qo‘rqardim, lekin hech narsa sezmadim. Narxni boshida aytishdi va o‘zgartirishmadi.' },
    { name: 'Erjan', text: 'Kechqurun saytda yozildim, ertalab qabulda edim. QR talon bilan hammasi bir daqiqada.' },
    { name: 'Dinara', text: 'Bolalarni Madinaga olib boramiz. O‘g‘lim endi o‘zi ko‘rikka boraman deydi.' },
  ] },
  contacts: { title: 'Sizni kutamiz', address: 'Olmaota, Timiryazev ko‘chasi, 42', hours: 'Har kuni 9:00–21:00', phone: '+7 700 000 00 00', addressLabel: 'Manzil', hoursLabel: 'Ish vaqti', phoneLabel: 'Telefon', now: 'Hozir Olmaotada', route: '2GIS da yo‘nalish' },
  footer: 'SABR demo loyihasi. Klinika, shifokorlar va sharhlar to‘qima, rasmlar: Pexels mualliflari.',
};

const kk: UI = {
  meta: { title: 'Alatau Smile — Алматыдағы байсалды стоматология', description: 'Алматыда имплантация, ағарту, винирлер және балалар стоматологиясы. Баға емдеуден бұрын, онлайн жазылу және QR талон.' },
  nav: { services: 'Қызметтер', doctors: 'Дәрігерлер', book: 'Жазылу', contacts: 'Байланыс', lang: 'Тіл' },
  hero: { eyebrow: 'Алматыдағы стоматология · 2014 жылдан', title: 'Байсалды стоматология', text: 'Ауыртпай емдейміз және бағаны алдын ала айтамыз. Айнаны алып, бір ағартудың нәтижесін көріңіз.', cta: 'Жазылу', secondary: 'Бағалар', before: 'дейін', after: 'кейін', hint: 'Айнаны сурет бойымен жүргізіңіз' },
  trust: ['ҚР ДСМ лицензиясы', 'Straumann серіктесі', '2GIS-те 4,9 рейтинг', 'Алматыда 12 жыл'],
  services: { title: 'Қызметтер мен бағалар', text: 'Емдеу жоспарындағы баға алдын ала бекітіледі және өзгермейді.', from: 'бастап', book: 'Жазылу' },
  doctors: { title: 'Дәрігерлер', text: 'Дәрігерді таңдап, бірден соған жазылыңыз.', years: 'жыл тәжірибе', speaks: 'Тілдері', next: 'Ең жақын уақыт', book: 'Дәрігерге жазылу' },
  chart: { title: 'Қай жер мазалайды?', text: 'Тісті басыңыз. Дәрігер оны өтінімде көріп, қабылдауға дайындалады.', mirror: 'айнадағыдай көрініс', none: 'Тіс таңдалмаған', left: 'сол', right: 'оң' },
  book: {
    title: 'Қабылдауға жазылу', text: 'Әкімші жұмыс уақытында 15 минут ішінде уақытты растайды.',
    name: 'Аты', phone: 'Телефон', service: 'Қызмет', doctor: 'Дәрігер', anyDoctor: 'Кез келген бос дәрігер', date: 'Күні', time: 'Уақыты', tooth: 'Тіс', submit: 'Жазылу', consult: 'Кеңес',
    ticket: 'Қабылдау талоны', ticketTitle: 'Сіз жазылдыңыз', patient: 'Пациент', note: 'QR кодты тіркеуде көрсетіңіз', save: 'Талонды сақтау', calendar: 'Күнтізбеге', close: 'Дайын',
  },
  reviews: { title: 'Пікірлер', rating: '4,9', count: '2GIS-те 212 пікір', items: [
    { name: 'Әлия', text: 'Имплантациядан қорықтым, бірақ ештеңе сезбедім. Бағаны басында айтып, өзгертпеді.' },
    { name: 'Ержан', text: 'Кешке сайтта жазылдым, таңертең қабылдауда болдым. QR талонмен бәрі бір минутта.' },
    { name: 'Динара', text: 'Балаларды Мадинаға апарамыз. Ұлым енді өзі тексеруге барғысы келеді.' },
  ] },
  contacts: { title: 'Сізді күтеміз', address: 'Алматы, Тимирязев көшесі, 42', hours: 'Күн сайын 9:00–21:00', phone: '+7 700 000 00 00', addressLabel: 'Мекенжай', hoursLabel: 'Жұмыс уақыты', phoneLabel: 'Телефон', now: 'Қазір Алматыда', route: '2GIS-тегі бағыт' },
  footer: 'SABR демо жобасы. Клиника, дәрігерлер мен пікірлер ойдан алынған, суреттер: Pexels авторлары.',
};

const en: UI = {
  meta: { title: 'Alatau Smile — calm dentistry in Almaty', description: 'Implants, whitening, veneers and children’s dentistry in Almaty. Price agreed before treatment, online booking and a QR appointment card.' },
  nav: { services: 'Services', doctors: 'Doctors', book: 'Book', contacts: 'Contact', lang: 'Language' },
  hero: { eyebrow: 'Dentistry in Almaty · since 2014', title: 'Calm dentistry', text: 'Pain-free treatment, price agreed before we start. Pick up the mirror and see what one whitening does.', cta: 'Book a visit', secondary: 'Prices', before: 'before', after: 'after', hint: 'Move the mirror over the photo' },
  trust: ['Licensed by the Ministry of Health', 'Straumann partner', '4.9 on 2GIS', '12 years in Almaty'],
  services: { title: 'Services and prices', text: 'The price in your treatment plan is fixed before we start and does not change.', from: 'from', book: 'Book' },
  doctors: { title: 'Doctors', text: 'Choose a doctor and book with them directly.', years: 'years in practice', speaks: 'Speaks', next: 'Next free slot', book: 'Book with this doctor' },
  chart: { title: 'Where does it hurt?', text: 'Tap the tooth. The doctor sees it in your request and prepares for the visit.', mirror: 'mirror view', none: 'No tooth selected', left: 'left', right: 'right' },
  book: {
    title: 'Book a visit', text: 'Our administrator confirms the time within 15 minutes during opening hours.',
    name: 'Name', phone: 'Phone', service: 'Service', doctor: 'Doctor', anyDoctor: 'First available', date: 'Date', time: 'Time', tooth: 'Tooth', submit: 'Book', consult: 'Consultation',
    ticket: 'Appointment card', ticketTitle: 'You are booked', patient: 'Patient', note: 'Show the QR code at reception', save: 'Save card', calendar: 'Add to calendar', close: 'Done',
  },
  reviews: { title: 'Reviews', rating: '4.9', count: '212 reviews on 2GIS', items: [
    { name: 'Aliya', text: 'I was afraid of implants and felt nothing. They told me the price first and kept it.' },
    { name: 'Yerzhan', text: 'Booked online in the evening, seen the next morning. The QR card made reception a one-minute thing.' },
    { name: 'Dinara', text: 'Our kids see Dr Madina. My son now asks to go for check-ups.' },
  ] },
  contacts: { title: 'See you soon', address: 'Almaty, 42 Timiryazev St', hours: 'Every day 9:00–21:00', phone: '+7 700 000 00 00', addressLabel: 'Address', hoursLabel: 'Hours', phoneLabel: 'Phone', now: 'Now in Almaty', route: 'Directions in 2GIS' },
  footer: 'SABR demo project. The clinic, doctors and reviews are fictional; photos by Pexels contributors.',
};

const ar: UI = {
  meta: { title: 'ألاتاو سمايل — طب أسنان هادئ في ألماتي', description: 'زراعة الأسنان والتبييض والقشور الخزفية وطب أسنان الأطفال في ألماتي. السعر يُحدَّد قبل العلاج، وحجز عبر الإنترنت وبطاقة موعد برمز QR.' },
  nav: { services: 'الخدمات', doctors: 'الأطباء', book: 'احجز', contacts: 'التواصل', lang: 'اللغة' },
  hero: { eyebrow: 'طب الأسنان في ألماتي · منذ 2014', title: 'طب أسنان هادئ', text: 'علاج بلا ألم وسعر واضح قبل البدء. أمسك المرآة وشاهد ما يفعله تبييض واحد.', cta: 'احجز موعدًا', secondary: 'الأسعار', before: 'قبل', after: 'بعد', hint: 'حرّك المرآة فوق الصورة' },
  trust: ['مرخّصة من وزارة الصحة', 'شريك شتراومان', 'تقييم 4.9 على 2GIS', '12 عامًا في ألماتي'],
  services: { title: 'الخدمات والأسعار', text: 'يُثبَّت السعر في خطة العلاج قبل البدء ولا يتغيّر.', from: 'من', book: 'احجز' },
  doctors: { title: 'الأطباء', text: 'اختر الطبيب واحجز لديه مباشرة.', years: 'سنوات خبرة', speaks: 'اللغات', next: 'أقرب موعد', book: 'احجز لدى الطبيب' },
  chart: { title: 'أين الألم؟', text: 'اضغط على السن. سيراه الطبيب في طلبك ويستعد للزيارة.', mirror: 'كما في المرآة', none: 'لم يتم اختيار سن', left: 'يسار', right: 'يمين' },
  book: {
    title: 'احجز موعدًا', text: 'يؤكد المسؤول الموعد خلال 15 دقيقة في ساعات العمل.',
    name: 'الاسم', phone: 'الهاتف', service: 'الخدمة', doctor: 'الطبيب', anyDoctor: 'أول طبيب متاح', date: 'التاريخ', time: 'الوقت', tooth: 'السن', submit: 'احجز', consult: 'استشارة',
    ticket: 'بطاقة الموعد', ticketTitle: 'تم حجزك', patient: 'المريض', note: 'أظهر رمز QR في الاستقبال', save: 'حفظ البطاقة', calendar: 'إضافة إلى التقويم', close: 'تم',
  },
  reviews: { title: 'آراء المرضى', rating: '4.9', count: '212 تقييمًا على 2GIS', items: [
    { name: 'عالية', text: 'كنت أخاف من الزراعة ولم أشعر بشيء. أخبروني بالسعر أولًا ولم يغيّروه.' },
    { name: 'يرجان', text: 'حجزت مساءً عبر الموقع وكنت في العيادة صباحًا. بطاقة QR جعلت الاستقبال دقيقة واحدة.' },
    { name: 'دينارا', text: 'أطفالنا يزورون الدكتورة مادينا. ابني يطلب الآن الذهاب للفحص بنفسه.' },
  ] },
  contacts: { title: 'بانتظاركم', address: 'ألماتي، شارع تيميريازيف 42', hours: 'يوميًا 9:00–21:00', phone: '+7 700 000 00 00', addressLabel: 'العنوان', hoursLabel: 'ساعات العمل', phoneLabel: 'الهاتف', now: 'الآن في ألماتي', route: 'الاتجاهات في 2GIS' },
  footer: 'مشروع تجريبي من SABR. العيادة والأطباء والآراء خيالية، والصور من مساهمي Pexels.',
};

export const ui: Record<Lang, UI> = { ru, uz, kk, en, ar };
export type { UI };
