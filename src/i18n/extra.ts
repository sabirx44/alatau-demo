// Strings added with the 2026-10 redesign: hero line, clinic section, doctor carousel, booking badge
import type { Lang } from './langs';

export const ex: Record<Lang, {
  heroText: string; heroPhoto: string; patients: string; badge: string;
  clinicKicker: string; clinicTitle: string; clinicText: string; clinic: [string, string][];
  nextDoctor: string; prevDoctor: string; slots: string; aboutDoctor: string; servicesHint: string; priceList: string;
}> = {
  ru: {
    heroText: 'Лечим без боли и называем цену до начала. Запись онлайн за минуту, талон с QR-кодом приходит на телефон.',
    heroPhoto: 'Пациентка клиники улыбается', patients: 'пациентов в год', badge: 'Онлайн-запись · 2GIS 4,9 · ',
    clinicKicker: 'Клиника', clinicTitle: 'План лечения видно до первого укола',
    clinicText: 'Снимок, 3D-модель и цена — в одном плане. Вы видите результат на экране и решаете спокойно, без спешки.',
    clinic: [['3D-план на экране', 'Томограф и сканер прямо в клинике'], ['Отдельный кабинет', 'Каждый приём — за закрытой дверью'], ['Стерильность', 'Инструменты в крафт-пакетах, открываем при вас']],
    nextDoctor: 'Следующий врач', prevDoctor: 'Предыдущий врач', slots: 'Свободно сегодня', aboutDoctor: 'О враче', servicesHint: 'Наведите, чтобы увидеть фото', priceList: 'Прайс',
  },
  uz: {
    heroText: 'Og‘riqsiz davolaymiz va narxni boshidan aytamiz. Bir daqiqada onlayn yozilish, QR-kodli talon telefoningizga keladi.',
    heroPhoto: 'Klinika bemori tabassum qilmoqda', patients: 'yiliga bemor', badge: 'Onlayn yozilish · 2GIS 4,9 · ',
    clinicKicker: 'Klinika', clinicTitle: 'Davolash rejasi birinchi ukoldan oldin ko‘rinadi',
    clinicText: 'Rentgen, 3D-model va narx bitta rejada. Natijani ekranda ko‘rib, shoshilmasdan qaror qilasiz.',
    clinic: [['Ekranda 3D-reja', 'Tomograf va skaner klinikaning o‘zida'], ['Alohida xona', 'Har bir qabul yopiq eshik ortida'], ['Sterillik', 'Asboblar kraft-paketda, sizning oldingizda ochiladi']],
    nextDoctor: 'Keyingi shifokor', prevDoctor: 'Oldingi shifokor', slots: 'Bugun bo‘sh', aboutDoctor: 'Shifokor haqida', servicesHint: 'Rasmni ko‘rish uchun ustiga olib boring', priceList: 'Narxlar',
  },
  kk: {
    heroText: 'Ауыртпай емдейміз және бағаны алдын ала айтамыз. Онлайн жазылу бір минут, QR-кодты талон телефонға келеді.',
    heroPhoto: 'Клиника пациенті күлімдеп тұр', patients: 'жылына пациент', badge: 'Онлайн жазылу · 2GIS 4,9 · ',
    clinicKicker: 'Клиника', clinicTitle: 'Емдеу жоспары алғашқы екпеге дейін көрінеді',
    clinicText: 'Сурет, 3D-модель және баға бір жоспарда. Нәтижені экраннан көріп, асықпай шешім қабылдайсыз.',
    clinic: [['Экрандағы 3D-жоспар', 'Томограф пен сканер клиниканың өзінде'], ['Жеке кабинет', 'Әр қабылдау жабық есік артында'], ['Стерильділік', 'Құралдар крафт-пакетте, көз алдыңызда ашамыз']],
    nextDoctor: 'Келесі дәрігер', prevDoctor: 'Алдыңғы дәрігер', slots: 'Бүгін бос', aboutDoctor: 'Дәрігер туралы', servicesHint: 'Фотоны көру үшін меңзерді апарыңыз', priceList: 'Бағалар',
  },
  en: {
    heroText: 'Pain-free treatment and a price agreed before we start. Book online in a minute; your QR appointment card arrives on your phone.',
    heroPhoto: 'A patient of the clinic smiling', patients: 'patients a year', badge: 'Book online · 2GIS 4.9 · ',
    clinicKicker: 'The clinic', clinicTitle: 'See the plan before the first injection',
    clinicText: 'Scan, 3D model and price in one plan. You see the result on screen and decide calmly, with no rush.',
    clinic: [['3D plan on screen', 'CT scanner and intraoral scanner on site'], ['A private room', 'Every visit behind a closed door'], ['Sterile, visibly', 'Instruments sealed in pouches, opened in front of you']],
    nextDoctor: 'Next doctor', prevDoctor: 'Previous doctor', slots: 'Free today', aboutDoctor: 'About', servicesHint: 'Hover to see the photo', priceList: 'Prices',
  },
  ar: {
    heroText: 'علاج بلا ألم وسعر متفق عليه قبل البدء. احجز عبر الإنترنت في دقيقة، وتصلك بطاقة الموعد مع رمز QR على هاتفك.',
    heroPhoto: 'مريضة في العيادة تبتسم', patients: 'مريض سنويًا', badge: 'احجز عبر الإنترنت · 2GIS 4.9 · ',
    clinicKicker: 'العيادة', clinicTitle: 'خطة العلاج واضحة قبل أول حقنة',
    clinicText: 'الأشعة والنموذج ثلاثي الأبعاد والسعر في خطة واحدة. ترى النتيجة على الشاشة وتقرر بهدوء ودون استعجال.',
    clinic: [['خطة ثلاثية الأبعاد على الشاشة', 'جهاز الأشعة المقطعية والماسح داخل العيادة'], ['غرفة خاصة', 'كل زيارة خلف باب مغلق'], ['تعقيم واضح', 'أدوات مغلفة تُفتح أمامك']],
    nextDoctor: 'الطبيب التالي', prevDoctor: 'الطبيب السابق', slots: 'متاح اليوم', aboutDoctor: 'عن الطبيب', servicesHint: 'مرّر المؤشر لرؤية الصورة', priceList: 'الأسعار',
  },
};
