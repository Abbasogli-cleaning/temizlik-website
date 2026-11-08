import type { Sector } from "../types";

/**
 * Sektor = obyekt növü (otel, klinika...). Xidmət = iş növü.
 * Ofis və restoran xidmət kimi mövcud olduğu üçün burada təkrarlanmır.
 * Yer tutucular: {in} = "Bakıda", {name} = "Bakı"
 */
export const sectors: Sector[] = [
  {
    slug: "otel-temizliyi",
    icon: "hotel",
    name: { az: "Otel təmizliyi", en: "Hotel cleaning", ru: "Клининг отелей" },
    short: {
      az: "Otellər və qonaq evləri üçün ümumi zonaların, restoranın, fasadın və mövsüm öncəsi dərin təmizlik.",
      en: "Public areas, restaurant, facade and pre-season deep cleaning for hotels and guesthouses.",
      ru: "Уборка общих зон, ресторана, фасада и генеральная предсезонная уборка для отелей и гостевых домов.",
    },
    intro: {
      az: [
        "Otelin reytinqi çox vaxt təmizliklə başlayır və bitir. Lobbi, dəhlizlər, liftlər, restoran və SPA zonaları gün boyu istifadə olunur və hər an qonağın gözü önündədir.",
        "Biz otellərə öz housekeeping komandasını əvəz etmək üçün deyil, onu gücləndirmək üçün xidmət təklif edirik: ümumi zonaların gecə təmizliyi, fasad və şüşələr, mövsüm öncəsi və təmirdən sonra dərin təmizlik.",
      ],
      en: [
        "A hotel's rating often starts and ends with cleanliness. The lobby, corridors, lifts, restaurant and spa are used all day and are always in front of guests.",
        "We don't replace a hotel's own housekeeping — we strengthen it: night cleaning of public areas, facades and glass, and deep cleaning before the season and after renovation.",
      ],
      ru: [
        "Рейтинг отеля часто начинается и заканчивается чистотой. Лобби, коридоры, лифты, ресторан и SPA используются весь день и всегда на виду у гостей.",
        "Мы не заменяем собственную службу housekeeping, а усиливаем её: ночная уборка общих зон, фасады и стёкла, генеральная уборка перед сезоном и после ремонта.",
      ],
    },
    requirements: {
      az: ["Qonaqları narahat etməyən gecə və səhər tezdən iş qrafiki", "Lobbi və girişdə daimi səliqə", "Restoran və mətbəxdə gigiyena standartı", "Xalçalı dəhlizlər və yumşaq mebel üçün uyğun vasitələr", "Fasad və panoram şüşələrin dövri yuyulması"],
      en: ["Night and early-morning schedules that don't disturb guests", "Constant tidiness in the lobby and entrance", "Hygiene standards in the restaurant and kitchen", "Products suited to carpeted corridors and upholstery", "Regular washing of facades and panoramic glass"],
      ru: ["Ночной и ранний утренний график, не мешающий гостям", "Постоянный порядок в лобби и у входа", "Гигиенические стандарты в ресторане и на кухне", "Средства для ковровых коридоров и мягкой мебели", "Регулярная мойка фасадов и панорамных стёкол"],
    },
    schedule: {
      az: "Ümumi zonalar gecə növbəsində, fasad və şüşələr dövri qrafiklə, dərin təmizlik isə mövsüm öncəsi və ya otaqlar boşalan dövrlərdə planlanır. Hamısı bir müqavilə və bir məsul menecer altında.",
      en: "Public areas are done on the night shift, facades and glass on a recurring schedule, and deep cleaning before the season or when rooms are empty — all under one contract and one responsible manager.",
      ru: "Общие зоны убираются в ночную смену, фасады и стёкла — по регулярному графику, генеральная уборка — перед сезоном или в период низкой загрузки. Всё по одному договору и с одним ответственным менеджером.",
    },
    services: ["fasad-ve-suse-yuyulmasi", "restoran-ve-kafe-temizliyi", "dezinfeksiya", "temir-sonrasi-temizlik"],
    faqs: {
      az: [
        { q: "Otel işləyərkən təmizlik mümkündür?", a: "Bəli, ümumi zonaları qonaq axınının az olduğu saatlarda işləyirik və qonaqları narahat etmirik." },
        { q: "Mövsüm öncəsi tam təmizlik edirsiniz?", a: "Bəli, otaqlar, dəhlizlər, restoran və fasad daxil olmaqla mərhələli plan hazırlayırıq." },
        { q: "Öz housekeeping komandamız var, sizə ehtiyac varmı?", a: "Çox otel bizi ağır və ixtisaslı işlər üçün — fasad, dərin təmizlik, təmirdən sonra — cəlb edir." },
      ],
      en: [
        { q: "Can you clean while the hotel is operating?", a: "Yes, we work in public areas during low-traffic hours without disturbing guests." },
        { q: "Do you do full pre-season cleaning?", a: "Yes, we prepare a staged plan covering rooms, corridors, restaurant and facade." },
        { q: "We have our own housekeeping — do we need you?", a: "Many hotels bring us in for heavy and specialist work — facades, deep cleaning, post-renovation." },
      ],
      ru: [
        { q: "Можно ли убирать, пока отель работает?", a: "Да, общие зоны мы убираем в часы малой загрузки, не беспокоя гостей." },
        { q: "Делаете ли вы полную предсезонную уборку?", a: "Да, готовим поэтапный план, включая номера, коридоры, ресторан и фасад." },
        { q: "У нас есть свой housekeeping — нужны ли вы?", a: "Многие отели привлекают нас для тяжёлых и специализированных работ — фасады, генеральная уборка, уборка после ремонта." },
      ],
    },
    cityIntro: {
      az: "{in} otel və qonaq evləri üçün ümumi zonaların, restoranın və fasadın təmizliyi, mövsüm öncəsi dərin təmizlik.",
      en: "Cleaning of public areas, restaurants and facades for hotels and guesthouses {in}, plus pre-season deep cleaning.",
      ru: "Уборка общих зон, ресторанов и фасадов для отелей и гостевых домов {in}, а также генеральная предсезонная уборка.",
    },
  },
  {
    slug: "klinika-temizliyi",
    icon: "clinic",
    name: { az: "Klinika və tibb müəssisəsi təmizliyi", en: "Clinic and medical facility cleaning", ru: "Клининг клиник и медучреждений" },
    short: {
      az: "Klinika, stomatologiya və laboratoriyalar üçün dezinfeksiya protokolu ilə gündəlik təmizlik.",
      en: "Daily cleaning with a disinfection protocol for clinics, dental offices and laboratories.",
      ru: "Ежедневная уборка с протоколом дезинфекции для клиник, стоматологий и лабораторий.",
    },
    intro: {
      az: [
        "Tibb müəssisəsində təmizlik estetika deyil, təhlükəsizlikdir. Qəbul otağı, kabinetlər və sanitar qovşaqlar fərqli risk səviyyəsinə malikdir və hər biri üçün ayrıca qayda lazımdır.",
        "Klinikalar üçün işi zonalara bölürük, hər zona üçün ayrıca inventar və sertifikatlı dezinfeksiya vasitələrindən istifadə edirik. Əməliyyat və steril zonalar müəssisənin öz protokoluna uyğun aparılır.",
      ],
      en: [
        "In a medical facility, cleaning is about safety, not looks. Reception, treatment rooms and restrooms carry different risk levels and each needs its own rules.",
        "For clinics we split the work into zones, use separate equipment for each zone and certified disinfectants. Operating and sterile areas follow the facility's own protocol.",
      ],
      ru: [
        "В медучреждении уборка — это вопрос безопасности, а не эстетики. Ресепшн, кабинеты и санузлы имеют разный уровень риска, и для каждого нужны свои правила.",
        "Для клиник мы делим работу на зоны, используем отдельный инвентарь для каждой зоны и сертифицированные дезсредства. Операционные и стерильные зоны убираются по собственному протоколу учреждения.",
      ],
    },
    requirements: {
      az: ["Zonalara görə ayrı inventar (rəng kodu)", "Sertifikatlı dezinfeksiya vasitələri", "Tez-tez toxunulan səthlərin gün ərzində təkrar işlənməsi", "Qəbul saatlarından kənar dərin təmizlik", "Müəssisənin daxili protokoluna uyğunluq"],
      en: ["Separate, color-coded equipment for each zone", "Certified disinfectants", "Repeated treatment of high-touch surfaces during the day", "Deep cleaning outside appointment hours", "Compliance with the facility's internal protocol"],
      ru: ["Отдельный инвентарь по зонам (цветовая маркировка)", "Сертифицированные дезсредства", "Повторная обработка часто используемых поверхностей в течение дня", "Генеральная уборка вне часов приёма", "Соответствие внутреннему протоколу учреждения"],
    },
    schedule: {
      az: "Gündəlik təmizlik qəbul saatlarına uyğun, dərin təmizlik və dezinfeksiya isə axşam və ya həftəsonu aparılır. Qrafik və protokol müqavilədə yazılır.",
      en: "Daily cleaning follows appointment hours, while deep cleaning and disinfection are done in the evening or at weekends. The schedule and protocol are written into the contract.",
      ru: "Ежедневная уборка подстраивается под часы приёма, генеральная уборка и дезинфекция — вечером или в выходные. График и протокол прописываются в договоре.",
    },
    services: ["dezinfeksiya", "ofis-temizliyi", "fasad-ve-suse-yuyulmasi"],
    faqs: {
      az: [
        { q: "Əməliyyat otaqlarını təmizləyirsiniz?", a: "Steril zonalar müəssisənin protokoluna və personalın nəzarətinə uyğun aparılır; bunu baxış zamanı ayrıca razılaşdırırıq." },
        { q: "Hansı vasitələrdən istifadə edirsiniz?", a: "Sertifikatlı dezinfeksiya vasitələri; lazım olduqda müəssisənin öz vasitələri ilə də işləyirik." },
        { q: "Stomatologiya klinikaları üçün xidmət var?", a: "Bəli, kabinet, qəbul və gözləmə zonaları üçün gündəlik və dövri xidmət təklif edirik." },
      ],
      en: [
        { q: "Do you clean operating rooms?", a: "Sterile areas follow the facility's protocol under staff supervision; we agree this separately during the survey." },
        { q: "What products do you use?", a: "Certified disinfectants; if required we also work with the facility's own products." },
        { q: "Do you serve dental clinics?", a: "Yes, we offer daily and periodic service for treatment rooms, reception and waiting areas." },
      ],
      ru: [
        { q: "Убираете ли вы операционные?", a: "Стерильные зоны убираются по протоколу учреждения под контролем персонала; это согласовывается отдельно при осмотре." },
        { q: "Какие средства вы используете?", a: "Сертифицированные дезсредства; при необходимости работаем и со средствами учреждения." },
        { q: "Обслуживаете ли вы стоматологии?", a: "Да, предлагаем ежедневное и периодическое обслуживание кабинетов, ресепшна и зон ожидания." },
      ],
    },
    cityIntro: {
      az: "{in} klinika, stomatologiya və laboratoriyalar üçün zonalara bölünmüş təmizlik və sertifikatlı vasitələrlə dezinfeksiya.",
      en: "Zoned cleaning and certified disinfection for clinics, dental offices and laboratories {in}.",
      ru: "Зональная уборка и дезинфекция сертифицированными средствами для клиник, стоматологий и лабораторий {in}.",
    },
  },
  {
    slug: "mekteb-ve-bagca-temizliyi",
    icon: "school",
    name: { az: "Məktəb və bağça təmizliyi", en: "School and kindergarten cleaning", ru: "Уборка школ и детских садов" },
    short: {
      az: "Məktəb, bağça, kurs və universitetlər üçün uşaqlara təhlükəsiz vasitələrlə təmizlik və dezinfeksiya.",
      en: "Cleaning and disinfection with child-safe products for schools, kindergartens, training centers and universities.",
      ru: "Уборка и дезинфекция безопасными для детей средствами в школах, детсадах, учебных центрах и вузах.",
    },
    intro: {
      az: [
        "Təhsil müəssisələrində gün ərzində yüzlərlə insan eyni sinifləri, dəhlizləri və sanitar qovşaqları istifadə edir. Uşaqlar səthlərə toxunur, döşəmədə oturur — ona görə vasitələrin seçimi xüsusilə vacibdir.",
        "İşi dərslərdən sonra aparırıq, tədris ilinin əvvəlində və tətillərdə isə pəncərələr, mebel və döşəmələr daxil olmaqla dərin təmizlik edirik.",
      ],
      en: [
        "In educational institutions hundreds of people use the same classrooms, corridors and restrooms every day. Children touch surfaces and sit on the floor — so the choice of products matters especially.",
        "We work after classes, and at the start of the school year and during holidays we do deep cleaning including windows, furniture and floors.",
      ],
      ru: [
        "В учебных заведениях сотни людей ежедневно пользуются одними и теми же классами, коридорами и санузлами. Дети трогают поверхности и сидят на полу — поэтому выбор средств особенно важен.",
        "Мы работаем после занятий, а в начале учебного года и на каникулах проводим генеральную уборку, включая окна, мебель и полы.",
      ],
    },
    requirements: {
      az: ["Uşaqlara təhlükəsiz, sertifikatlı vasitələr", "Dərslərdən sonra iş qrafiki", "Parta, qapı tutacağı və açarların gündəlik dezinfeksiyası", "İdman zalı və yeməkxananın ayrıca təmizliyi", "Tədris ili öncəsi dərin təmizlik"],
      en: ["Certified, child-safe products", "Work schedule after classes", "Daily disinfection of desks, door handles and switches", "Separate cleaning of the gym and canteen", "Deep cleaning before the school year"],
      ru: ["Сертифицированные средства, безопасные для детей", "Работа после занятий", "Ежедневная дезинфекция парт, дверных ручек и выключателей", "Отдельная уборка спортзала и столовой", "Генеральная уборка перед учебным годом"],
    },
    schedule: {
      az: "Gündəlik təmizlik dərslərdən sonra, dezinfeksiya həftəlik və ya xəstəlik mövsümündə daha tez-tez, dərin təmizlik isə yay və qış tətillərində aparılır.",
      en: "Daily cleaning is done after classes, disinfection weekly or more often in flu season, and deep cleaning during summer and winter breaks.",
      ru: "Ежедневная уборка — после занятий, дезинфекция — еженедельно или чаще в сезон болезней, генеральная уборка — на летних и зимних каникулах.",
    },
    services: ["dezinfeksiya", "fasad-ve-suse-yuyulmasi", "temir-sonrasi-temizlik"],
    faqs: {
      az: [
        { q: "Vasitələr uşaqlar üçün təhlükəsizdir?", a: "Yalnız sertifikatlı vasitələrdən təlimata uyğun istifadə edirik və iş dərslərdən sonra aparılır." },
        { q: "Yay tətilində dərin təmizlik edirsiniz?", a: "Bəli, pəncərələr, mebel, döşəmə və təmirdən sonrakı təmizlik daxil olmaqla." },
        { q: "Özəl bağçalara xidmət göstərirsiniz?", a: "Bəli, kiçik özəl bağça və kurslar üçün də qrafik təklif edirik." },
      ],
      en: [
        { q: "Are the products safe for children?", a: "We only use certified products as instructed, and work after classes." },
        { q: "Do you deep clean in the summer break?", a: "Yes, including windows, furniture, floors and post-renovation cleaning." },
        { q: "Do you serve private kindergartens?", a: "Yes, we also offer schedules for small private kindergartens and training centers." },
      ],
      ru: [
        { q: "Безопасны ли средства для детей?", a: "Мы используем только сертифицированные средства по инструкции, а работы ведутся после занятий." },
        { q: "Делаете ли генеральную уборку летом?", a: "Да, включая окна, мебель, полы и уборку после ремонта." },
        { q: "Обслуживаете ли частные детские сады?", a: "Да, предлагаем график и для небольших частных садов и учебных центров." },
      ],
    },
    cityIntro: {
      az: "{in} məktəb, bağça, kurs və universitetlər üçün dərslərdən sonra təmizlik və uşaqlara təhlükəsiz vasitələrlə dezinfeksiya.",
      en: "After-class cleaning and child-safe disinfection for schools, kindergartens, training centers and universities {in}.",
      ru: "Уборка после занятий и дезинфекция безопасными для детей средствами в школах, детсадах, учебных центрах и вузах {in}.",
    },
  },
  {
    slug: "ticaret-merkezi-temizliyi",
    icon: "mall",
    name: { az: "Ticarət mərkəzi və plaza təmizliyi", en: "Shopping center and plaza cleaning", ru: "Уборка торговых центров и плаз" },
    short: {
      az: "Ticarət mərkəzləri, plazalar və mağazalar üçün ümumi zonaların, vitrinlərin və fasadın təmizliyi.",
      en: "Cleaning of public areas, shop windows and facades for shopping centers, plazas and stores.",
      ru: "Уборка общих зон, витрин и фасадов торговых центров, плаз и магазинов.",
    },
    intro: {
      az: [
        "Ticarət mərkəzində təmizlik gün boyu davam edən prosesdir: giriş qapıları, eskalatorlar, food-court və sanitar qovşaqlar yüksək axın altındadır. Bir çirkli zona bütün mərkəzin təəssüratını korlayır.",
        "Bu tip obyektlər üçün gündüz növbəsi (səliqə və sanitar qovşaqlar) və gecə növbəsi (döşəmələrin maşınla yuyulması, vitrinlər) ilə iki səviyyəli plan qururuq. Müştərilərimiz arasında MZ Plaza var.",
      ],
      en: [
        "In a shopping center cleaning is an all-day process: entrances, escalators, the food court and restrooms are under heavy traffic. One dirty area spoils the impression of the whole center.",
        "For such sites we build a two-level plan: a day shift (tidiness and restrooms) and a night shift (machine floor washing, shop windows). Our clients include MZ Plaza.",
      ],
      ru: [
        "В торговом центре уборка идёт весь день: входные двери, эскалаторы, фуд-корт и санузлы испытывают большой поток людей. Одна грязная зона портит впечатление обо всём центре.",
        "Для таких объектов мы строим двухуровневый план: дневная смена (поддержание порядка и санузлы) и ночная смена (машинная мойка полов, витрины). Среди наших клиентов — MZ Plaza.",
      ],
    },
    requirements: {
      az: ["Gündüz və gecə növbələri", "Döşəmələrin maşınla yuyulması", "Eskalator, lift və tutacaqların dezinfeksiyası", "Food-court və sanitar qovşaqların daimi nəzarəti", "Vitrin və fasad şüşələrinin dövri yuyulması"],
      en: ["Day and night shifts", "Machine floor washing", "Disinfecting escalators, lifts and handrails", "Constant attention to the food court and restrooms", "Regular washing of shop windows and facade glass"],
      ru: ["Дневные и ночные смены", "Машинная мойка полов", "Дезинфекция эскалаторов, лифтов и поручней", "Постоянный контроль фуд-корта и санузлов", "Регулярная мойка витрин и фасадных стёкол"],
    },
    schedule: {
      az: "Gündüz komandası açıq saatlarda səliqəni saxlayır, gecə komandası isə əsas təmizliyi edir. Fasad və şüşələr ayrıca dövri qrafiklə yuyulur.",
      en: "The day team keeps things tidy during opening hours, while the night team does the main cleaning. Facades and glass are washed on a separate recurring schedule.",
      ru: "Дневная команда поддерживает порядок в часы работы, ночная выполняет основную уборку. Фасады и стёкла моются по отдельному регулярному графику.",
    },
    services: ["fasad-ve-suse-yuyulmasi", "dezinfeksiya", "restoran-ve-kafe-temizliyi", "ofis-temizliyi"],
    testimonial: "azpulmat",
    faqs: {
      az: [
        { q: "Mərkəz açıq olarkən işləyirsiniz?", a: "Bəli, gündüz komandası səliqəni saxlayır; ağır işlər gecə aparılır." },
        { q: "Ayrı-ayrı mağazalara xidmət göstərirsiniz?", a: "Bəli, həm bütün mərkəzə, həm də ayrı mağaza və ofislərə." },
        { q: "Fasad yuyulması daxildir?", a: "Fasad və hündür şüşələr alpinist qrupumuz tərəfindən ayrıca qrafiklə yuyulur." },
      ],
      en: [
        { q: "Do you work while the center is open?", a: "Yes, the day team keeps things tidy; heavy work is done at night." },
        { q: "Do you serve individual stores?", a: "Yes, both the whole center and individual stores and offices." },
        { q: "Is facade washing included?", a: "Facades and high glass are washed by our rope-access team on a separate schedule." },
      ],
      ru: [
        { q: "Работаете ли вы, пока центр открыт?", a: "Да, дневная команда поддерживает порядок; тяжёлые работы проводятся ночью." },
        { q: "Обслуживаете ли вы отдельные магазины?", a: "Да, и весь центр, и отдельные магазины и офисы." },
        { q: "Входит ли мойка фасада?", a: "Фасады и высокие стёкла моет наша группа альпинистов по отдельному графику." },
      ],
    },
    cityIntro: {
      az: "{in} ticarət mərkəzləri, plazalar və mağazalar üçün gündüz və gecə növbələri ilə təmizlik, vitrin və fasad yuyulması.",
      en: "Day- and night-shift cleaning, shop window and facade washing for shopping centers, plazas and stores {in}.",
      ru: "Уборка в дневную и ночную смену, мойка витрин и фасадов для торговых центров, плаз и магазинов {in}.",
    },
  },
  {
    slug: "idman-kompleksi-temizliyi",
    icon: "gym",
    name: { az: "İdman kompleksi və fitnes təmizliyi", en: "Sports complex and gym cleaning", ru: "Уборка спорткомплексов и фитнес-клубов" },
    short: {
      az: "İdman sarayları, hovuzlar və fitnes klublar üçün soyunub-geyinmə, duş və zal təmizliyi, dezinfeksiya.",
      en: "Cleaning of changing rooms, showers and halls plus disinfection for sports arenas, pools and gyms.",
      ru: "Уборка раздевалок, душевых и залов, дезинфекция для спортивных дворцов, бассейнов и фитнес-клубов.",
    },
    intro: {
      az: [
        "İdman obyektlərində rütubət, tər və intensiv istifadə bakteriya və göbələk üçün əlverişli mühit yaradır. Soyunub-geyinmə otaqları, duşlar və trenajorlar xüsusi diqqət tələb edir.",
        "“SU İDMANI SARAYI” MMC ilə layihəmiz ərzində böyük idman obyektinin təmizliyini həyata keçirmişik. Bu təcrübəni fitnes klublara və idman komplekslərinə tətbiq edirik.",
      ],
      en: [
        "In sports facilities humidity, sweat and heavy use create ideal conditions for bacteria and fungi. Changing rooms, showers and equipment need special attention.",
        "During our project with “SU IDMANI SARAYI” LLC we cleaned a large sports facility. We apply that experience to gyms and sports complexes.",
      ],
      ru: [
        "В спортивных объектах влажность, пот и интенсивное использование создают благоприятную среду для бактерий и грибка. Раздевалки, душевые и тренажёры требуют особого внимания.",
        "В рамках проекта с ООО «SU İDMANI SARAYI» мы выполняли уборку крупного спортивного объекта. Этот опыт мы применяем в фитнес-клубах и спорткомплексах.",
      ],
    },
    requirements: {
      az: ["Duş və soyunub-geyinmə otaqlarında göbələyə qarşı işləmə", "Trenajor və tutacaqların dezinfeksiyası", "Hovuz ətrafı sürüşkən səthlərin təhlükəsiz təmizliyi", "Tribuna və böyük zalların tədbirdən sonra təmizliyi", "Erkən səhər və gecə iş qrafiki"],
      en: ["Anti-fungal treatment of showers and changing rooms", "Disinfecting equipment and handles", "Safe cleaning of slippery poolside surfaces", "Cleaning stands and large halls after events", "Early-morning and night schedules"],
      ru: ["Противогрибковая обработка душевых и раздевалок", "Дезинфекция тренажёров и ручек", "Безопасная уборка скользких поверхностей у бассейна", "Уборка трибун и больших залов после мероприятий", "Работа рано утром и ночью"],
    },
    schedule: {
      az: "Gündəlik təmizlik açılışdan əvvəl və bağlandıqdan sonra, dezinfeksiya müntəzəm qrafiklə, tədbir sonrası təmizlik isə tədbir təqviminə uyğun aparılır.",
      en: "Daily cleaning is done before opening and after closing, disinfection on a regular schedule, and post-event cleaning according to the events calendar.",
      ru: "Ежедневная уборка — до открытия и после закрытия, дезинфекция — по регулярному графику, уборка после мероприятий — по календарю событий.",
    },
    services: ["dezinfeksiya", "fasad-ve-suse-yuyulmasi", "ofis-temizliyi"],
    testimonial: "suIdman",
    faqs: {
      az: [
        { q: "Hovuz ətrafını təmizləyirsiniz?", a: "Bəli, hovuz ətrafı, duşlar və soyunub-geyinmə otaqları daxil olmaqla." },
        { q: "Tədbirdən sonra təcili təmizlik mümkündür?", a: "Bəli, tədbir təqvimini əvvəlcədən bilsək, komandanı ona uyğun planlayırıq." },
        { q: "Kiçik fitnes klublara xidmət var?", a: "Bəli, sahəyə və iş rejiminə uyğun qrafik təklif edirik." },
      ],
      en: [
        { q: "Do you clean poolside areas?", a: "Yes, including the poolside, showers and changing rooms." },
        { q: "Is urgent post-event cleaning possible?", a: "Yes, if we know the events calendar in advance we plan the team around it." },
        { q: "Do you serve small gyms?", a: "Yes, we offer a schedule matched to the area and opening hours." },
      ],
      ru: [
        { q: "Убираете ли вы зону у бассейна?", a: "Да, включая зону бассейна, душевые и раздевалки." },
        { q: "Возможна ли срочная уборка после мероприятия?", a: "Да, если мы заранее знаем календарь мероприятий, планируем команду под него." },
        { q: "Обслуживаете ли небольшие фитнес-клубы?", a: "Да, предлагаем график по площади и режиму работы." },
      ],
    },
    cityIntro: {
      az: "{in} idman kompleksləri, hovuzlar və fitnes klublar üçün duş, soyunub-geyinmə və zal təmizliyi, müntəzəm dezinfeksiya.",
      en: "Shower, changing room and hall cleaning with regular disinfection for sports complexes, pools and gyms {in}.",
      ru: "Уборка душевых, раздевалок и залов с регулярной дезинфекцией для спорткомплексов, бассейнов и фитнес-клубов {in}.",
    },
  },
  {
    slug: "yasayis-kompleksi-temizliyi",
    icon: "residential",
    name: { az: "Yaşayış kompleksi təmizliyi", en: "Residential complex cleaning", ru: "Уборка жилых комплексов" },
    short: {
      az: "MTK və idarəçi şirkətlər üçün giriş, lift, pilləkən, parkinq və fasadın müqaviləli təmizliyi.",
      en: "Contract cleaning of entrances, lifts, stairs, parking and facades for residential complexes and management companies.",
      ru: "Договорная уборка подъездов, лифтов, лестниц, паркингов и фасадов для ЖК и управляющих компаний.",
    },
    intro: {
      az: [
        "Yaşayış kompleksində sakinlər ilk növbədə ümumi zonaları görür: giriş, lobbi, liftlər, pilləkənlər və parkinq. Bu zonaların vəziyyəti kompleksin dəyərinə və sakin məmnuniyyətinə birbaşa təsir edir.",
        "Yeni komplekslərdə isə iş təhvildən əvvəl başlayır: tikintidən sonra bütün ümumi zonaların və fasadın təmizlənməsi. Biz hər iki mərhələni bir planda həll edirik.",
      ],
      en: [
        "In a residential complex, residents mostly see the shared areas: entrance, lobby, lifts, stairs and parking. Their condition directly affects the complex's value and residents' satisfaction.",
        "In new complexes the work begins before handover: cleaning all shared areas and the facade after construction. We handle both stages in one plan.",
      ],
      ru: [
        "В жилом комплексе жители прежде всего видят общие зоны: вход, лобби, лифты, лестницы и паркинг. Их состояние напрямую влияет на стоимость комплекса и удовлетворённость жителей.",
        "В новых комплексах работа начинается ещё до сдачи: уборка всех общих зон и фасада после строительства. Мы решаем оба этапа в одном плане.",
      ],
    },
    requirements: {
      az: ["Giriş və lobbinin gündəlik təmizliyi", "Lift və pilləkənlərin müntəzəm yuyulması", "Yeraltı parkinqin maşınla təmizliyi", "Fasad və ümumi şüşələrin dövri yuyulması", "Təhvildən əvvəl tikinti sonrası təmizlik"],
      en: ["Daily cleaning of entrances and lobby", "Regular washing of lifts and stairs", "Machine cleaning of underground parking", "Periodic washing of facade and shared glass", "Post-construction cleaning before handover"],
      ru: ["Ежедневная уборка входов и лобби", "Регулярная мойка лифтов и лестниц", "Машинная уборка подземного паркинга", "Периодическая мойка фасада и общих стёкол", "Послестроительная уборка перед сдачей"],
    },
    schedule: {
      az: "Ümumi zonalar gündəlik qrafiklə, parkinq və fasad isə dövri olaraq təmizlənir. Yeni kompleksdə ilk mərhələ təhvildən əvvəl birdəfəlik dərin təmizlikdir.",
      en: "Shared areas are cleaned on a daily schedule, parking and facades periodically. In a new complex the first stage is a one-off deep clean before handover.",
      ru: "Общие зоны убираются по ежедневному графику, паркинг и фасад — периодически. В новом комплексе первый этап — разовая генеральная уборка перед сдачей.",
    },
    services: ["temir-sonrasi-temizlik", "fasad-ve-suse-yuyulmasi", "menzil-temizliyi", "dezinfeksiya"],
    faqs: {
      az: [
        { q: "MTK ilə müqavilə bağlayırsınız?", a: "Bəli, idarəçi şirkətlər və MTK-larla müqaviləli xidmət göstəririk." },
        { q: "Sakinlərin mənzillərinə də xidmət var?", a: "Bəli, sakinlər mənzil və təmir sonrası təmizliyi ayrıca sifariş edə bilər." },
        { q: "Tikinti bitəndən sonra bütün kompleksi təmizləyirsiniz?", a: "Bəli, ümumi zonalar, fasad və şüşələr daxil olmaqla təhvil öncəsi təmizlik edirik." },
      ],
      en: [
        { q: "Do you contract with management companies?", a: "Yes, we provide contract service to management companies and developers." },
        { q: "Do you also serve residents' apartments?", a: "Yes, residents can order apartment and post-renovation cleaning separately." },
        { q: "Do you clean the whole complex after construction?", a: "Yes, we do pre-handover cleaning including shared areas, facades and glass." },
      ],
      ru: [
        { q: "Заключаете ли вы договоры с УК?", a: "Да, мы работаем по договору с управляющими компаниями и застройщиками." },
        { q: "Обслуживаете ли вы квартиры жильцов?", a: "Да, жильцы могут отдельно заказать уборку квартиры и уборку после ремонта." },
        { q: "Убираете ли весь комплекс после стройки?", a: "Да, проводим уборку перед сдачей, включая общие зоны, фасад и стёкла." },
      ],
    },
    cityIntro: {
      az: "{in} yaşayış kompleksləri üçün ümumi zonaların, parkinqin və fasadın müqaviləli təmizliyi, təhvil öncəsi tikinti sonrası təmizlik.",
      en: "Contract cleaning of shared areas, parking and facades, plus pre-handover post-construction cleaning for residential complexes {in}.",
      ru: "Договорная уборка общих зон, паркинга и фасадов, а также послестроительная уборка перед сдачей для жилых комплексов {in}.",
    },
  },
  {
    slug: "anbar-ve-istehsalat-temizliyi",
    icon: "warehouse",
    name: { az: "Anbar və istehsalat təmizliyi", en: "Warehouse and industrial cleaning", ru: "Уборка складов и производств" },
    short: {
      az: "Anbar, sex və istehsal sahələri üçün döşəmə, avadanlıq ətrafı və məişət binalarının təmizliyi.",
      en: "Floor, equipment-area and staff-building cleaning for warehouses, workshops and production sites.",
      ru: "Уборка полов, зон оборудования и бытовых помещений складов, цехов и производств.",
    },
    intro: {
      az: [
        "Böyük istehsal sahələrində toz, yağ və metal qırıntıları həm avadanlığa, həm də işçilərin təhlükəsizliyinə təsir edir. Belə obyektlərdə təmizlik iş prosesini dayandırmadan aparılmalıdır.",
        "İstehsal obyektlərində sex döşəmələri, avadanlıq ətrafı, ofis və məişət binaları daxil olmaqla geniş sahələrin təmizliyini həyata keçirmişik. Komanda və texnika sahənin ölçüsünə görə planlanır.",
      ],
      en: [
        "On large production sites dust, oil and metal shavings affect both equipment and worker safety. Cleaning must be done without stopping production.",
        "We have cleaned large production areas including workshop floors, equipment areas, offices and staff buildings. Crew size and machines are planned for the size of the site.",
      ],
      ru: [
        "На больших производственных площадках пыль, масло и металлическая стружка влияют и на оборудование, и на безопасность работников. Уборка должна проводиться без остановки производства.",
        "Мы выполняли уборку больших производственных площадей, включая полы цехов, зоны оборудования, офисы и бытовые помещения. Бригада и техника планируются под размер объекта.",
      ],
    },
    requirements: {
      az: ["Sənaye tozsoranları və döşəmə yuyan maşınlar", "Yağ və texniki mayelərin təmizlənməsi", "Təhlükəsizlik qaydalarına uyğun iş (xüsusi geyim, zonalar)", "Növbələrə uyğun iş qrafiki", "Ofis, yeməkxana və məişət binalarının ayrıca təmizliyi"],
      en: ["Industrial vacuums and floor scrubbers", "Removing oil and technical fluids", "Working to safety rules (PPE, zones)", "Schedules matched to shifts", "Separate cleaning of offices, canteens and staff buildings"],
      ru: ["Промышленные пылесосы и поломоечные машины", "Удаление масла и технических жидкостей", "Работа по правилам безопасности (спецодежда, зоны)", "График под рабочие смены", "Отдельная уборка офисов, столовых и бытовых помещений"],
    },
    schedule: {
      az: "Sex və anbarlarda iş növbələr arasında və ya planlı dayanma vaxtlarında, ofis və məişət binalarında isə gündəlik aparılır.",
      en: "Workshops and warehouses are cleaned between shifts or during planned downtime; offices and staff buildings daily.",
      ru: "Цеха и склады убираются между сменами или во время плановых остановок, офисы и бытовые помещения — ежедневно.",
    },
    services: ["ofis-temizliyi", "dezinfeksiya", "yangindan-sonra-temizlik", "fasad-ve-suse-yuyulmasi"],
    faqs: {
      az: [
        { q: "İstehsal dayanmadan təmizlik mümkündür?", a: "Bəli, iş zonaları növbələr arasında və ya hissə-hissə təmizlənir." },
        { q: "Böyük sahələr üçün texnikanız var?", a: "Bəli, sənaye tozsoranları və döşəmə yuyan maşınlarla işləyirik." },
        { q: "Bakıdan kənar obyektlərə gəlirsiniz?", a: "Bəli, Sumqayıt və Xırdalan daxil olmaqla; uzaq obyektlər üçün briqada əvvəlcədən planlanır." },
      ],
      en: [
        { q: "Can you clean without stopping production?", a: "Yes, work areas are cleaned between shifts or section by section." },
        { q: "Do you have machines for large areas?", a: "Yes, we work with industrial vacuums and floor scrubbers." },
        { q: "Do you serve sites outside Baku?", a: "Yes, including Sumgait and Khirdalan; crews for remote sites are planned in advance." },
      ],
      ru: [
        { q: "Можно ли убирать без остановки производства?", a: "Да, рабочие зоны убираются между сменами или по участкам." },
        { q: "Есть ли у вас техника для больших площадей?", a: "Да, мы работаем с промышленными пылесосами и поломоечными машинами." },
        { q: "Выезжаете ли вы за пределы Баку?", a: "Да, включая Сумгайыт и Хырдалан; бригада для удалённых объектов планируется заранее." },
      ],
    },
    cityIntro: {
      az: "{in} anbar, sex və istehsal sahələri üçün sənaye texnikası ilə döşəmə və avadanlıq ətrafı təmizliyi, məişət binalarının xidməti.",
      en: "Industrial-equipment cleaning of floors and machine areas, plus staff-building service, for warehouses, workshops and production sites {in}.",
      ru: "Уборка полов и зон оборудования промышленной техникой и обслуживание бытовых помещений складов, цехов и производств {in}.",
    },
  },
  {
    slug: "inzibati-bina-temizliyi",
    icon: "admin",
    name: { az: "İnzibati bina və bank təmizliyi", en: "Administrative building and bank cleaning", ru: "Уборка административных зданий и банков" },
    short: {
      az: "Bank filialları, dövlət və korporativ inzibati binalar üçün təhlükəsizlik qaydalarına uyğun müqaviləli təmizlik.",
      en: "Contract cleaning that follows security rules for bank branches and government and corporate administrative buildings.",
      ru: "Договорная уборка с соблюдением правил безопасности для отделений банков, государственных и корпоративных административных зданий.",
    },
    intro: {
      az: [
        "Bank və inzibati binalarda təmizlik həm də etibar məsələsidir: komanda məhdud giriş zonalarında işləyir, sənədlərə və avadanlığa toxunmamalıdır, hər dəfə eyni şəxslər gəlməlidir.",
        "Belə obyektlər üçün daimi, yoxlanılmış komanda təyin edirik və iş qaydalarını müəssisənin təhlükəsizlik tələblərinə uyğun müqavilədə yazırıq. Uzunmüddətli tərəfdaşlarımız arasında SGC Azerbaijan var.",
      ],
      en: [
        "In banks and administrative buildings cleaning is also a matter of trust: the team works in restricted areas, must not touch documents or equipment, and the same people should come every time.",
        "For such sites we assign a permanent, vetted team and write the working rules into the contract according to the organization's security requirements. Our long-term partners include SGC Azerbaijan.",
      ],
      ru: [
        "В банках и административных зданиях уборка — это ещё и вопрос доверия: команда работает в зонах ограниченного доступа, не должна касаться документов и техники, и каждый раз должны приходить одни и те же люди.",
        "Для таких объектов мы назначаем постоянную проверенную команду и прописываем правила работы в договоре в соответствии с требованиями безопасности организации. Среди наших долгосрочных партнёров — SGC Azerbaijan.",
      ],
    },
    requirements: {
      az: ["Daimi və dəyişməyən komanda", "Məhdud giriş zonalarında iş qaydaları", "Sənəd və avadanlığa toxunmamaq", "Müştəri zonalarında iş saatlarından kənar təmizlik", "Fasad və giriş qrupunun dövri yuyulması"],
      en: ["A permanent, unchanging team", "Rules for working in restricted areas", "No touching documents or equipment", "Cleaning customer areas outside opening hours", "Regular washing of facade and entrance"],
      ru: ["Постоянная, неизменная команда", "Правила работы в зонах ограниченного доступа", "Запрет касаться документов и техники", "Уборка клиентских зон вне рабочего времени", "Регулярная мойка фасада и входной группы"],
    },
    schedule: {
      az: "Müştəri zonaları açılışdan əvvəl və bağlandıqdan sonra, ofis hissəsi razılaşdırılmış saatlarda, fasad isə dövri qrafiklə təmizlənir.",
      en: "Customer areas are cleaned before opening and after closing, office areas at agreed hours, and the facade on a recurring schedule.",
      ru: "Клиентские зоны убираются до открытия и после закрытия, офисная часть — в согласованные часы, фасад — по регулярному графику.",
    },
    services: ["ofis-temizliyi", "fasad-ve-suse-yuyulmasi", "dezinfeksiya"],
    testimonial: "sgc",
    faqs: {
      az: [
        { q: "Komanda üzvləri dəyişirmi?", a: "Xeyr, bu tip obyektlərə daimi komanda təyin olunur; dəyişiklik yalnız sizinlə razılaşdırılaraq edilir." },
        { q: "Bir neçə filiala xidmət göstərə bilərsiniz?", a: "Bəli, Bakı, Sumqayıt və Xırdalandakı filiallar üçün vahid müqavilə və qrafik təklif edirik." },
        { q: "Məxfilik öhdəliyi imzalanır?", a: "Bəli, lazım olduqda müqaviləyə məxfilik bəndi əlavə olunur." },
      ],
      en: [
        { q: "Do team members change?", a: "No, a permanent team is assigned to such sites; any change is agreed with you." },
        { q: "Can you serve several branches?", a: "Yes, we offer one contract and schedule for branches in Baku, Sumgait and Khirdalan." },
        { q: "Is a confidentiality agreement signed?", a: "Yes, a confidentiality clause can be added to the contract when needed." },
      ],
      ru: [
        { q: "Меняется ли состав команды?", a: "Нет, на такие объекты назначается постоянная команда; любые изменения согласуются с вами." },
        { q: "Можете ли вы обслуживать несколько филиалов?", a: "Да, предлагаем единый договор и график для филиалов в Баку, Сумгайыте и Хырдалане." },
        { q: "Подписывается ли соглашение о конфиденциальности?", a: "Да, при необходимости в договор добавляется пункт о конфиденциальности." },
      ],
    },
    cityIntro: {
      az: "{in} bank filialları və inzibati binalar üçün daimi komanda ilə, təhlükəsizlik qaydalarına uyğun müqaviləli təmizlik.",
      en: "Contract cleaning with a permanent team, following security rules, for bank branches and administrative buildings {in}.",
      ru: "Договорная уборка постоянной командой с соблюдением правил безопасности для отделений банков и административных зданий {in}.",
    },
  },
];

export const sectorMap = new Map(sectors.map((s) => [s.slug, s]));
