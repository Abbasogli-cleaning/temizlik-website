import type { Service } from "../types";

/** Yer tutucular: {in} = "Yasamal rayonunda", {name} = "Yasamal", {areas} = massivlər */
export const services: Service[] = [
  {
    slug: "ofis-temizliyi",
    contentKey: "office",
    name: { az: "Ofis təmizliyi", en: "Office cleaning", ru: "Уборка офисов" },
    short: {
      az: "Ofis və biznes mərkəzləri üçün müqaviləli, sabit və yüksək səviyyəli gündəlik və dövri təmizlik.",
      en: "Contract-based, consistent, high-standard daily and periodic cleaning for offices and business centers.",
      ru: "Договорная, стабильная ежедневная и периодическая уборка высокого уровня для офисов и бизнес-центров.",
    },
    intro: {
      az: [
        "Təmiz ofis işçilərin rahatlığı və müştərilərin şirkət haqqında ilk təəssüratıdır. Biz ofis və biznes mərkəzləri üçün birdəfəlik deyil, sistemli xidmət təqdim edirik: obyekt analizi, fərdi iş planı, daimi komanda və keyfiyyət hesabatı.",
        "Təmizlik iş saatlarına uyğunlaşdırılır — səhər tezdən, axşam və ya həftəsonu. Beləliklə ofisin işi dayanmır, komanda isə hər gün eyni standartla işləyir.",
      ],
      en: [
        "A clean office is about staff comfort and the first impression clients get of your company. For offices and business centers we provide a system, not a one-off job: site analysis, a custom work plan, a permanent team and a quality report.",
        "Cleaning is scheduled around your working hours — early morning, evening or weekends — so your office keeps running and the team works to the same standard every day.",
      ],
      ru: [
        "Чистый офис — это комфорт сотрудников и первое впечатление клиентов о компании. Для офисов и бизнес-центров мы предлагаем не разовую уборку, а систему: анализ объекта, индивидуальный план, постоянная команда и отчёт о качестве.",
        "Уборка подстраивается под рабочий график — рано утром, вечером или в выходные. Офис продолжает работать, а команда каждый день соблюдает один и тот же стандарт.",
      ],
    },
    included: {
      az: ["İş masaları, rəflər və ofis texnikasının səthlərinin silinməsi", "Döşəmələrin tozsoranla təmizlənməsi və yuyulması", "Sanitar qovşaqların dezinfeksiyası və sərf materiallarının yoxlanılması", "Mətbəx və istirahət zonalarının təmizliyi", "Zibilin çıxarılması və zibil qablarının yuyulması", "Şüşə arakəsmələr, qapılar və tutacaqların təmizliyi"],
      en: ["Wiping desks, shelves and office equipment surfaces", "Vacuuming and mopping floors", "Disinfecting restrooms and checking supplies", "Cleaning kitchens and break areas", "Taking out trash and washing bins", "Cleaning glass partitions, doors and handles"],
      ru: ["Протирка столов, полок и поверхностей оргтехники", "Пылесос и влажная уборка полов", "Дезинфекция санузлов и проверка расходных материалов", "Уборка кухонь и зон отдыха", "Вынос мусора и мытьё корзин", "Чистка стеклянных перегородок, дверей и ручек"],
    },
    process: {
      az: [
        { title: "Obyekt analizi", text: "Ofisə baxır, sahəni, zonaları, trafik yükünü və xüsusi tələbləri qeyd edirik." },
        { title: "Fərdi plan və müqavilə", text: "Gündəlik, həftəlik və aylıq işlərin siyahısı, qrafik və standart müqavilədə yazılır." },
        { title: "Daimi komanda", text: "Obyektə təlimli və daimi komanda təyin olunur ki, keyfiyyət dəyişməsin." },
        { title: "Keyfiyyət yoxlaması", text: "Məsul menecer müntəzəm yoxlama aparır və hesabat təqdim edir." },
      ],
      en: [
        { title: "Site analysis", text: "We visit the office and note the area, zones, foot traffic and special requirements." },
        { title: "Custom plan and contract", text: "Daily, weekly and monthly tasks, the schedule and the standard are written into the contract." },
        { title: "Permanent team", text: "A trained, permanent team is assigned so quality stays consistent." },
        { title: "Quality inspection", text: "A responsible manager inspects regularly and provides a report." },
      ],
      ru: [
        { title: "Анализ объекта", text: "Осматриваем офис, фиксируем площадь, зоны, проходимость и особые требования." },
        { title: "Индивидуальный план и договор", text: "Ежедневные, еженедельные и ежемесячные работы, график и стандарт прописываются в договоре." },
        { title: "Постоянная команда", text: "На объект назначается обученная постоянная команда, чтобы качество не менялось." },
        { title: "Контроль качества", text: "Ответственный менеджер регулярно проверяет работу и предоставляет отчёт." },
      ],
    },
    factors: {
      az: ["Tələb olunan standart səviyyəsi", "Təmizliyin tezliyi (gündəlik, həftəlik)", "İş saatı (gündüz, gecə, həftəsonu)", "Sanitar qovşaq və mətbəx sayı"],
      en: ["Required standard level", "Frequency (daily, weekly)", "Working hours (day, night, weekend)", "Number of restrooms and kitchens"],
      ru: ["Требуемый уровень стандарта", "Частота уборки (ежедневно, еженедельно)", "Время работы (день, ночь, выходные)", "Количество санузлов и кухонь"],
    },
    faqs: {
      az: [
        { q: "Təmizlik iş saatlarından kənar aparıla bilər?", a: "Bəli. Qrafik ofisin iş rejiminə uyğun qurulur: səhər tezdən, axşam və ya həftəsonu." },
        { q: "Hər dəfə eyni komanda gəlir?", a: "Müqaviləli obyektlərə daimi komanda təyin edirik. Bu, keyfiyyətin sabit qalması üçün əsas şərtdir." },
        { q: "Keyfiyyətə necə nəzarət olunur?", a: "Məsul menecer müntəzəm yoxlama aparır, qeydlər hesabatda sizə təqdim olunur." },
      ],
      en: [
        { q: "Can cleaning be done outside business hours?", a: "Yes. The schedule follows your office hours: early morning, evening or weekends." },
        { q: "Does the same team come every time?", a: "Contract sites get a permanent team. That is the key to consistent quality." },
        { q: "How is quality controlled?", a: "A responsible manager inspects regularly and the findings are shared with you in a report." },
      ],
      ru: [
        { q: "Можно ли убирать вне рабочего времени?", a: "Да. График строится под режим офиса: рано утром, вечером или в выходные." },
        { q: "Приходит ли каждый раз одна и та же команда?", a: "На договорные объекты назначается постоянная команда — это главное условие стабильного качества." },
        { q: "Как контролируется качество?", a: "Ответственный менеджер регулярно проверяет работу, замечания передаются вам в отчёте." },
      ],
    },
    flagNotes: {
      business: {
        az: "{in} çoxlu ofis və biznes mərkəzi olduğu üçün burada gecə və səhər tezdən işləyən komandalarımız var — işçilər gələndə ofis artıq hazır olur.",
        en: "With so many offices and business centers {in}, we run teams that work at night and early in the morning — the office is ready before staff arrive.",
        ru: "Так как {in} много офисов и бизнес-центров, у нас есть команды, работающие ночью и рано утром, — к приходу сотрудников офис уже готов.",
      },
      oldStock: {
        az: "{in} köhnə binalarda yerləşən ofislərdə parket, daş pilləkən və köhnə sanitar qovşaqlar üçün xüsusi, yumşaq vasitələr seçirik.",
        en: "For offices in older buildings {in} we choose special gentle products for parquet, stone stairs and old restrooms.",
        ru: "Для офисов в старых зданиях {in} мы подбираем специальные мягкие средства для паркета, каменных лестниц и старых санузлов.",
      },
    },
    localIntro: {
      az: "{in} ofisinizin təmizliyini sistemli şəkildə həll edirik — {areas} ərazilərində yerləşən ofislər və biznes mərkəzləri üçün müqaviləli xidmət.",
      en: "We take care of your office {in} systematically — contract cleaning for offices and business centers in {areas}.",
      ru: "Мы системно решаем вопрос уборки вашего офиса {in} — договорное обслуживание офисов и бизнес-центров в районах {areas}.",
    },
  },
  {
    slug: "fasad-ve-suse-yuyulmasi",
    contentKey: "facade",
    name: { az: "Fasad və şüşə yuyulması", en: "Facade and glass washing", ru: "Мойка фасадов и стёкол" },
    short: {
      az: "Binaların fasad və şüşələrinin sertifikatlı alpinist qrupu ilə peşəkar yuyulması.",
      en: "Professional washing of building facades and glass by a certified rope-access team.",
      ru: "Профессиональная мойка фасадов и стёкол зданий сертифицированной группой промышленных альпинистов.",
    },
    intro: {
      az: [
        "Bakının küləyi və tozu şüşə fasadları tez çirkləndirir, dəniz kənarında isə duz təbəqəsi əlavə olunur. Çirkli fasad binanın görünüşünü korlayır, şüşələrdən keçən işığı azaldır.",
        "Hündür binalarda işi sertifikatlı alpinist qrupumuz görür. Hər obyekt üçün təhlükəsizlik planı, uyğun vasitə və alət seçilir.",
      ],
      en: [
        "Baku's wind and dust quickly dirty glass facades, and by the sea a layer of salt is added. A dirty facade spoils the look of a building and reduces the light that comes through the glass.",
        "On high-rise buildings the work is done by our certified rope-access team. For each site we prepare a safety plan and choose the right products and tools.",
      ],
      ru: [
        "Бакинский ветер и пыль быстро загрязняют стеклянные фасады, а у моря добавляется слой соли. Грязный фасад портит вид здания и уменьшает количество света, проходящего через стекло.",
        "На высотных зданиях работает наша сертифицированная группа промышленных альпинистов. Для каждого объекта готовится план безопасности и подбираются средства и инструменты.",
      ],
    },
    included: {
      az: ["Xarici şüşə səthlərin yuyulması", "Alüminium profil və çərçivələrin təmizlənməsi", "Kompozit və daş fasad panellərinin yuyulması", "Vitrin və giriş qrupunun təmizliyi", "Duz, toz və quş izlərinin təmizlənməsi", "İş sonrası ərazinin yığışdırılması"],
      en: ["Washing exterior glass", "Cleaning aluminum profiles and frames", "Washing composite and stone facade panels", "Cleaning shop windows and entrances", "Removing salt, dust and bird droppings", "Tidying the area after work"],
      ru: ["Мойка наружных стёкол", "Чистка алюминиевых профилей и рам", "Мойка композитных и каменных фасадных панелей", "Чистка витрин и входной группы", "Удаление соли, пыли и птичьего помёта", "Уборка территории после работ"],
    },
    process: {
      az: [
        { title: "Baxış və ölçü", text: "Binanın hündürlüyü, fasad növü və giriş imkanları qiymətləndirilir." },
        { title: "Təhlükəsizlik planı", text: "Alpinist qrupu üçün bərkitmə nöqtələri və iş zonası müəyyən olunur." },
        { title: "Yuyulma", text: "Fasad növünə uyğun vasitələrlə yuxarıdan aşağı ardıcıl yuyulur." },
        { title: "Yoxlama", text: "Ləkə və izlər yoxlanılır, lazım olan hissələr təkrar işlənir." },
      ],
      en: [
        { title: "Survey and measurement", text: "We assess the building height, facade type and access options." },
        { title: "Safety plan", text: "Anchor points and the work zone are defined for the rope-access team." },
        { title: "Washing", text: "The facade is washed top to bottom with products suited to its material." },
        { title: "Inspection", text: "We check for streaks and marks and rework any areas that need it." },
      ],
      ru: [
        { title: "Осмотр и замер", text: "Оцениваем высоту здания, тип фасада и возможности доступа." },
        { title: "План безопасности", text: "Для альпинистов определяются точки крепления и рабочая зона." },
        { title: "Мойка", text: "Фасад моется сверху вниз средствами, подходящими к материалу." },
        { title: "Проверка", text: "Проверяем разводы и следы, при необходимости участки обрабатываются повторно." },
      ],
    },
    factors: {
      az: ["Binanın hündürlüyü və giriş imkanı", "Fasadın sahəsi və materialı", "Çirklənmə dərəcəsi (duz, sement, boya)", "İşin tezliyi (birdəfəlik və ya dövri)"],
      en: ["Building height and access", "Facade area and material", "Level of dirt (salt, cement, paint)", "Frequency (one-off or recurring)"],
      ru: ["Высота здания и доступ", "Площадь и материал фасада", "Степень загрязнения (соль, цемент, краска)", "Частота работ (разово или регулярно)"],
    },
    faqs: {
      az: [
        { q: "Hündür binalarda iş necə aparılır?", a: "Sertifikatlı alpinist qrupumuz təhlükəsizlik planı əsasında işləyir." },
        { q: "Fasadı nə qədər tez-tez yumaq lazımdır?", a: "Bu, binanın yerindən asılıdır. Dəniz kənarında və tozlu küçələrdə daha tez-tez yuyulma tövsiyə olunur; dəqiq qrafiki baxışdan sonra təklif edirik." },
        { q: "Təmirdən sonra şüşədəki sement və boya izləri təmizlənir?", a: "Bəli, bunun üçün səthi cızmayan xüsusi alət və vasitələrdən istifadə edirik." },
      ],
      en: [
        { q: "How is work done on high-rise buildings?", a: "Our certified rope-access team works according to a safety plan." },
        { q: "How often should a facade be washed?", a: "It depends on the location. By the sea and on dusty streets more frequent washing is recommended; we propose an exact schedule after a survey." },
        { q: "Can you remove cement and paint from glass after renovation?", a: "Yes, we use special tools and products that do not scratch the surface." },
      ],
      ru: [
        { q: "Как ведутся работы на высотных зданиях?", a: "Наша сертифицированная группа промышленных альпинистов работает по плану безопасности." },
        { q: "Как часто нужно мыть фасад?", a: "Это зависит от расположения здания. У моря и на пыльных улицах рекомендуется мыть чаще; точный график предлагаем после осмотра." },
        { q: "Удаляете ли вы цемент и краску со стёкол после ремонта?", a: "Да, мы используем специальные инструменты и средства, которые не царапают поверхность." },
      ],
    },
    flagNotes: {
      coastal: {
        az: "{in} dəniz sahilinə yaxın binalarda şüşə üzərində duz təbəqəsi yaranır. Bu təbəqə adi su ilə getmir — duzu həll edən, şüşəyə və profilə zərər verməyən vasitələrdən istifadə edirik.",
        en: "Buildings near the sea {in} build up a salt layer on the glass. Plain water won't remove it — we use products that dissolve salt without harming glass or frames.",
        ru: "У зданий у моря {in} на стекле образуется соляной налёт. Обычная вода его не смывает — мы используем средства, растворяющие соль без вреда для стекла и профиля.",
      },
      newBuild: {
        az: "{in} yeni binalarda fasad və şüşələrdə tikintidən qalan sement, silikon və boya izləri olur; ilk yuyulmada bunlar diqqətlə təmizlənir.",
        en: "New buildings {in} often have cement, silicone and paint left on facades and glass from construction; we remove them carefully during the first wash.",
        ru: "На новостройках {in} на фасадах и стёклах остаются следы цемента, силикона и краски после строительства — при первой мойке мы аккуратно их удаляем.",
      },
      suburban: {
        az: "{in} villa və həyət evlərinin böyük panoram şüşələri, eyvan və terrasları birlikdə yuyulur.",
        en: "Large panoramic windows, balconies and terraces of villas and private houses {in} are washed together in one visit.",
        ru: "Большие панорамные окна, балконы и террасы вилл и частных домов {in} моются за один выезд.",
      },
    },
    localIntro: {
      az: "{in} binaların fasad və şüşələrini peşəkar şəkildə yuyuruq — {areas} ərazilərində ofis binaları, yaşayış kompleksləri və villalar üçün.",
      en: "We professionally wash facades and glass {in} — for office buildings, residential complexes and villas in {areas}.",
      ru: "Профессионально моем фасады и стёкла зданий {in} — офисные здания, жилые комплексы и виллы в районах {areas}.",
    },
  },
  {
    slug: "temir-sonrasi-temizlik",
    contentKey: "renovation",
    name: { az: "Təmir sonrası təmizlik", en: "Post-renovation cleaning", ru: "Уборка после ремонта" },
    short: {
      az: "Tikinti və təmirdən sonra toz, sement izi və çirklərin xüsusi texnika və peşəkar vasitələrlə təmizlənməsi.",
      en: "Removing dust, cement marks and dirt after construction and renovation with special equipment and professional products.",
      ru: "Удаление пыли, следов цемента и загрязнений после строительства и ремонта с помощью спецтехники и профессиональных средств.",
    },
    intro: {
      az: [
        "Təmir bitəndə ən çətin hissə başlayır: incə tikinti tozu hər yerə hopur, şüşə və plitələrdə sement, boya və silikon izləri qalır. Adi təmizlik bunu həll etmir.",
        "Biz təmir sonrası təmizliyi mərhələlərlə aparırıq: əvvəlcə iri tullantı və toz, sonra səthlərin detallı təmizliyi, sonda isə yoxlama. Nəticədə mənzil və ya ofis yaşamağa və işləməyə hazır olur.",
      ],
      en: [
        "When renovation ends, the hardest part begins: fine construction dust gets everywhere, and cement, paint and silicone are left on glass and tiles. Ordinary cleaning won't solve it.",
        "We do post-renovation cleaning in stages: first debris and dust, then detailed surface cleaning, and finally an inspection. The result is an apartment or office ready to live or work in.",
      ],
      ru: [
        "Когда ремонт заканчивается, начинается самое сложное: мелкая строительная пыль оседает повсюду, на стёклах и плитке остаются цемент, краска и силикон. Обычная уборка с этим не справится.",
        "Мы проводим уборку после ремонта поэтапно: сначала мусор и пыль, затем детальная очистка поверхностей и в конце — проверка. В результате квартира или офис готовы к жизни и работе.",
      ],
    },
    included: {
      az: ["Tikinti tozunun bütün səthlərdən təmizlənməsi", "Şüşə və pəncərələrdən sement, boya və skotç izlərinin təmizlənməsi", "Plitə və aralıqların yuyulması", "Döşəmənin materialına uyğun yuyulması", "Mətbəx və sanitar qovşaqların detallı təmizliyi", "Radiator, kandar və qapıların silinməsi"],
      en: ["Removing construction dust from all surfaces", "Removing cement, paint and tape from glass and windows", "Washing tiles and grout", "Washing floors according to their material", "Detailed cleaning of kitchens and bathrooms", "Wiping radiators, sills and doors"],
      ru: ["Удаление строительной пыли со всех поверхностей", "Удаление цемента, краски и скотча со стёкол и окон", "Мытьё плитки и швов", "Мытьё полов с учётом материала", "Детальная уборка кухни и санузлов", "Протирка радиаторов, подоконников и дверей"],
    },
    process: {
      az: [
        { title: "Baxış", text: "Sahə, çirklənmə dərəcəsi və səth materialları qiymətləndirilir." },
        { title: "Kobud təmizlik", text: "İri tullantı və tozun əsas hissəsi sənaye tozsoranları ilə götürülür." },
        { title: "Detallı təmizlik", text: "Şüşə, plitə, döşəmə və mebel səthləri ayrı-ayrılıqda işlənir." },
        { title: "Yoxlama və təhvil", text: "Obyekt sizinlə birlikdə yoxlanılır və təhvil verilir." },
      ],
      en: [
        { title: "Survey", text: "We assess the area, level of dirt and surface materials." },
        { title: "Rough clean", text: "Debris and most of the dust are removed with industrial vacuums." },
        { title: "Detailed clean", text: "Glass, tiles, floors and furniture surfaces are treated one by one." },
        { title: "Inspection and handover", text: "We walk through the site with you and hand it over." },
      ],
      ru: [
        { title: "Осмотр", text: "Оцениваем площадь, степень загрязнения и материалы поверхностей." },
        { title: "Черновая уборка", text: "Мусор и основная пыль удаляются промышленными пылесосами." },
        { title: "Детальная уборка", text: "Стёкла, плитка, полы и мебель обрабатываются по отдельности." },
        { title: "Проверка и сдача", text: "Проверяем объект вместе с вами и сдаём работу." },
      ],
    },
    factors: {
      az: ["Sahə və otaq sayı", "Tozun və tikinti izlərinin miqdarı", "Pəncərə və şüşə səthlərin həcmi", "Səth materialları (parket, mərmər, plitə)"],
      en: ["Area and number of rooms", "Amount of dust and construction marks", "Amount of windows and glass", "Surface materials (parquet, marble, tile)"],
      ru: ["Площадь и количество комнат", "Количество пыли и строительных следов", "Объём окон и стеклянных поверхностей", "Материалы поверхностей (паркет, мрамор, плитка)"],
    },
    faqs: {
      az: [
        { q: "Təmir sonrası təmizlik nə qədər vaxt aparır?", a: "Bu, sahədən və çirklənmədən asılıdır. Dəqiq müddəti baxışdan sonra deyirik." },
        { q: "Tikinti tullantılarını da aparırsınız?", a: "Təmizlik zamanı yaranan zibili yığışdırırıq. İri tikinti tullantısının daşınmasını sifariş zamanı ayrıca razılaşdırırıq." },
        { q: "Mərmər və parket zədələnmir?", a: "Hər materiala uyğun, sertifikatlı vasitələrdən istifadə edirik." },
      ],
      en: [
        { q: "How long does post-renovation cleaning take?", a: "It depends on the area and amount of dirt. We give an exact time after the survey." },
        { q: "Do you also remove construction waste?", a: "We collect the waste produced during cleaning. Removing large construction waste is agreed separately when you order." },
        { q: "Won't marble and parquet get damaged?", a: "We use certified products suited to each material." },
      ],
      ru: [
        { q: "Сколько длится уборка после ремонта?", a: "Это зависит от площади и загрязнения. Точный срок называем после осмотра." },
        { q: "Вывозите ли вы строительный мусор?", a: "Мусор, образующийся при уборке, мы собираем. Вывоз крупного строительного мусора согласовывается отдельно при заказе." },
        { q: "Не повредятся ли мрамор и паркет?", a: "Мы используем сертифицированные средства, подходящие для каждого материала." },
      ],
    },
    flagNotes: {
      newBuild: {
        az: "{in} yeni tikilən komplekslərdə təmir sonrası təmizlik ən çox sifariş olunan xidmətdir. Çox vaxt ağ karkasdan sonra bütün mənzil — pəncərələr, plitələr, döşəmə — tam təmizlənməlidir.",
        en: "In the new complexes {in}, post-renovation cleaning is the most requested service. After a white-box finish the whole apartment — windows, tiles, floors — usually needs a full clean.",
        ru: "В новых комплексах {in} уборка после ремонта — самая востребованная услуга. После белого каркаса обычно требуется полная уборка квартиры: окна, плитка, полы.",
      },
      oldStock: {
        az: "{in} köhnə binalarda təmirdən sonra toz köhnə taxta və çatlara hopur; bu səbəbdən tozun bir neçə mərhələdə götürülməsini planlayırıq.",
        en: "In older buildings {in}, dust settles into old wood and cracks after renovation, so we plan dust removal in several passes.",
        ru: "В старых домах {in} после ремонта пыль забивается в старое дерево и щели, поэтому мы планируем удаление пыли в несколько этапов.",
      },
      suburban: {
        az: "{in} həyət evlərində təmirdən sonra həyət, terras və pilləkənlərin təmizliyi də eyni səfərdə edilə bilər.",
        en: "For private houses {in}, the yard, terrace and stairs can be cleaned in the same visit after renovation.",
        ru: "В частных домах {in} после ремонта двор, террасу и лестницы можно убрать за тот же выезд.",
      },
    },
    localIntro: {
      az: "{in} təmirdən sonra mənzil və ofisləri yaşamağa hazır vəziyyətə gətiririk — {areas} ərazilərində tikinti tozunu, sement və boya izlərini təmizləyirik.",
      en: "We get apartments and offices {in} ready to use after renovation — removing construction dust, cement and paint in {areas}.",
      ru: "Готовим квартиры и офисы {in} к использованию после ремонта — удаляем строительную пыль, цемент и краску в районах {areas}.",
    },
  },
  {
    slug: "dezinfeksiya",
    contentKey: "disinfection",
    name: { az: "Dezinfeksiya", en: "Disinfection", ru: "Дезинфекция" },
    short: {
      az: "Məkanların virus və bakteriyalardan peşəkar dezinfeksiyası — ofis, mənzil, restoran və tibb obyektləri üçün.",
      en: "Professional disinfection of premises against viruses and bacteria — for offices, homes, restaurants and medical facilities.",
      ru: "Профессиональная дезинфекция помещений от вирусов и бактерий — для офисов, квартир, ресторанов и медицинских объектов.",
    },
    intro: {
      az: [
        "Dezinfeksiya adi təmizlikdən fərqlidir: məqsəd səthi təmiz göstərmək deyil, mikroorqanizmləri məhv etməkdir. Bunun üçün düzgün vasitə, düzgün konsentrasiya və səthdə kifayət qədər təsir müddəti lazımdır.",
        "Sertifikatlı dezinfeksiya vasitələrindən istifadə edirik və işi əvvəlcə təmizlik, sonra dezinfeksiya ardıcıllığı ilə aparırıq — çünki çirkli səthdə dezinfeksiya effektiv işləmir.",
      ],
      en: [
        "Disinfection differs from ordinary cleaning: the goal is not to make a surface look clean but to kill microorganisms. That takes the right product, the right concentration and enough contact time on the surface.",
        "We use certified disinfectants and always clean first, then disinfect — because disinfection does not work properly on a dirty surface.",
      ],
      ru: [
        "Дезинфекция отличается от обычной уборки: цель — не сделать поверхность чистой на вид, а уничтожить микроорганизмы. Для этого нужны правильное средство, правильная концентрация и достаточное время воздействия.",
        "Мы используем сертифицированные дезсредства и всегда работаем в порядке «сначала уборка, потом дезинфекция» — на грязной поверхности дезинфекция неэффективна.",
      ],
    },
    included: {
      az: ["Tez-tez toxunulan səthlərin (tutacaq, düymə, masa) dezinfeksiyası", "Sanitar qovşaqların dezinfeksiyası", "Mətbəx və qida hazırlanan zonaların işlənməsi", "Döşəmələrin dezinfeksiyaedici məhlulla yuyulması", "Havalandırma ızqaralarının silinməsi", "İş sonrası havalandırma tövsiyələri"],
      en: ["Disinfecting high-touch surfaces (handles, switches, desks)", "Disinfecting restrooms", "Treating kitchens and food-prep areas", "Washing floors with disinfectant solution", "Wiping ventilation grilles", "Ventilation advice after the work"],
      ru: ["Дезинфекция часто используемых поверхностей (ручки, кнопки, столы)", "Дезинфекция санузлов", "Обработка кухонь и зон приготовления пищи", "Мытьё полов дезинфицирующим раствором", "Протирка вентиляционных решёток", "Рекомендации по проветриванию после работ"],
    },
    process: {
      az: [
        { title: "Risk zonalarının müəyyənləşdirilməsi", text: "Məkanın ən çox toxunulan və riskli hissələri qeyd olunur." },
        { title: "İlkin təmizlik", text: "Səthlər çirkdən təmizlənir ki, vasitə effektiv işləsin." },
        { title: "Dezinfeksiya", text: "Sertifikatlı vasitə lazımi konsentrasiya və təsir müddəti ilə tətbiq edilir." },
        { title: "Havalandırma və təhvil", text: "Məkan havalandırılır və istifadəyə hazır təhvil verilir." },
      ],
      en: [
        { title: "Identify risk zones", text: "We mark the most-touched and highest-risk areas of the premises." },
        { title: "Pre-cleaning", text: "Surfaces are cleaned first so the disinfectant works effectively." },
        { title: "Disinfection", text: "A certified product is applied at the right concentration and contact time." },
        { title: "Ventilation and handover", text: "The premises are ventilated and handed over ready for use." },
      ],
      ru: [
        { title: "Определение зон риска", text: "Отмечаем самые часто используемые и рискованные зоны помещения." },
        { title: "Предварительная уборка", text: "Поверхности очищаются, чтобы средство работало эффективно." },
        { title: "Дезинфекция", text: "Сертифицированное средство наносится в нужной концентрации и с нужным временем воздействия." },
        { title: "Проветривание и сдача", text: "Помещение проветривается и сдаётся готовым к использованию." },
      ],
    },
    factors: {
      az: ["Sahə", "Obyektin növü (ofis, tibb, qida)", "Birdəfəlik və ya dövri xidmət", "İş vaxtı (iş saatından kənar)"],
      en: ["Area", "Type of facility (office, medical, food)", "One-off or recurring service", "Timing (outside business hours)"],
      ru: ["Площадь", "Тип объекта (офис, медицина, общепит)", "Разовая или регулярная услуга", "Время работ (вне рабочего времени)"],
    },
    faqs: {
      az: [
        { q: "Dezinfeksiyadan sonra məkana nə vaxt daxil olmaq olar?", a: "Bu, istifadə olunan vasitədən asılıdır; dəqiq müddəti iş zamanı bildiririk." },
        { q: "İstifadə olunan vasitələr təhlükəsizdir?", a: "Yalnız sertifikatlı vasitələrdən təlimata uyğun istifadə edirik." },
        { q: "Dövri dezinfeksiya müqaviləsi bağlamaq olar?", a: "Bəli, xüsusilə restoran, klinika və ofislər üçün dövri qrafik təklif edirik." },
      ],
      en: [
        { q: "When can we re-enter after disinfection?", a: "It depends on the product used; we tell you the exact time during the job." },
        { q: "Are the products safe?", a: "We only use certified products, following their instructions." },
        { q: "Can we sign a recurring disinfection contract?", a: "Yes, we offer recurring schedules, especially for restaurants, clinics and offices." },
      ],
      ru: [
        { q: "Когда можно вернуться в помещение после дезинфекции?", a: "Зависит от используемого средства; точное время сообщаем во время работ." },
        { q: "Безопасны ли используемые средства?", a: "Мы используем только сертифицированные средства согласно инструкции." },
        { q: "Можно ли заключить договор на регулярную дезинфекцию?", a: "Да, особенно для ресторанов, клиник и офисов мы предлагаем регулярный график." },
      ],
    },
    flagNotes: {
      business: {
        az: "{in} ofis və ticarət obyektlərində dezinfeksiyanı iş saatlarından sonra aparırıq ki, səhər məkan havalandırılmış və hazır olsun.",
        en: "For offices and retail sites {in} we disinfect after hours so the premises are ventilated and ready by morning.",
        ru: "В офисах и торговых объектах {in} мы проводим дезинфекцию после рабочего дня, чтобы к утру помещение было проветрено и готово.",
      },
      industrial: {
        az: "{in} istehsal və anbar obyektlərində məişət binaları, yeməkxanalar və sanitar qovşaqlar üçün dövri dezinfeksiya qrafiki təklif edirik.",
        en: "For production sites and warehouses {in} we offer recurring disinfection of staff buildings, canteens and restrooms.",
        ru: "Для производств и складов {in} предлагаем регулярную дезинфекцию бытовых помещений, столовых и санузлов.",
      },
    },
    localIntro: {
      az: "{in} ofis, mənzil və ictimai məkanların dezinfeksiyası — {areas} ərazilərində sertifikatlı vasitələrlə.",
      en: "Disinfection of offices, homes and public spaces {in} — with certified products in {areas}.",
      ru: "Дезинфекция офисов, квартир и общественных помещений {in} — сертифицированными средствами в районах {areas}.",
    },
  },
  {
    slug: "yangindan-sonra-temizlik",
    contentKey: "fire",
    name: { az: "Yanğından sonra təmizlik", en: "Post-fire cleaning", ru: "Уборка после пожара" },
    short: {
      az: "Yanğın sonrası his, his qoxusu və çirklərin xüsusi texnologiya ilə təmizlənməsi.",
      en: "Removing soot, smoke odor and dirt after a fire with special technology.",
      ru: "Удаление копоти, запаха гари и загрязнений после пожара по специальной технологии.",
    },
    intro: {
      az: [
        "Yanğından sonra ən böyük problem yalnız görünən his deyil: his yağlı təbəqə kimi divar, tavan və mebelə yapışır, qoxu isə parça və məsaməli materiallara hopur. Səhv vasitə hisi daha da yayır.",
        "Biz yanğından sonra təmizliyi mərhələlərlə aparırıq: quru his təmizliyi, xüsusi vasitələrlə yuyulma və qoxunun aradan qaldırılması. Məqsəd məkanı təmirə və ya istifadəyə hazır vəziyyətə gətirməkdir.",
      ],
      en: [
        "After a fire the biggest problem isn't only the visible soot: it sticks to walls, ceilings and furniture as an oily layer, and the smell soaks into fabrics and porous materials. The wrong product spreads the soot further.",
        "We clean after a fire in stages: dry soot removal, washing with special products, and odor removal. The aim is to get the premises ready for repair or use.",
      ],
      ru: [
        "После пожара главная проблема — не только видимая копоть: она оседает жирным слоем на стенах, потолке и мебели, а запах впитывается в ткани и пористые материалы. Неправильное средство только размазывает копоть.",
        "Мы убираем после пожара поэтапно: сухое удаление копоти, мойка специальными средствами и устранение запаха. Цель — подготовить помещение к ремонту или использованию.",
      ],
    },
    included: {
      az: ["Divar və tavanlardan quru his təmizliyi", "Səthlərin hisə qarşı xüsusi vasitələrlə yuyulması", "Şüşə, pəncərə və çərçivələrin təmizlənməsi", "Mebel və bərk səthlərin təmizliyi", "Yanmış və zədələnmiş əşyaların çıxarılmasında köməklik", "Qoxunun azaldılması üzrə işlər"],
      en: ["Dry soot removal from walls and ceilings", "Washing surfaces with special anti-soot products", "Cleaning glass, windows and frames", "Cleaning furniture and hard surfaces", "Help removing burnt and damaged items", "Odor reduction work"],
      ru: ["Сухое удаление копоти со стен и потолков", "Мойка поверхностей специальными средствами от копоти", "Чистка стёкол, окон и рам", "Чистка мебели и твёрдых поверхностей", "Помощь в выносе сгоревших и повреждённых вещей", "Работы по устранению запаха"],
    },
    process: {
      az: [
        { title: "Zərərin qiymətləndirilməsi", text: "Hisin yayıldığı sahə və materiallar yoxlanılır." },
        { title: "Quru təmizlik", text: "His əvvəlcə quru üsulla götürülür ki, yaxılmasın." },
        { title: "Yaş təmizlik", text: "Səthlər hisə qarşı xüsusi vasitələrlə yuyulur." },
        { title: "Qoxu və yoxlama", text: "Qoxu azaldılır, nəticə sizinlə yoxlanılır." },
      ],
      en: [
        { title: "Damage assessment", text: "We check how far the soot spread and which materials are affected." },
        { title: "Dry cleaning", text: "Soot is first removed dry so it doesn't smear." },
        { title: "Wet cleaning", text: "Surfaces are washed with special anti-soot products." },
        { title: "Odor and inspection", text: "The odor is reduced and the result is checked with you." },
      ],
      ru: [
        { title: "Оценка ущерба", text: "Проверяем площадь распространения копоти и материалы." },
        { title: "Сухая очистка", text: "Копоть сначала удаляется сухим способом, чтобы не размазать." },
        { title: "Влажная очистка", text: "Поверхности моются специальными средствами от копоти." },
        { title: "Запах и проверка", text: "Запах устраняется, результат проверяется вместе с вами." },
      ],
    },
    factors: {
      az: ["Yanğının miqyası və hisin yayıldığı sahə", "Səth materialları", "Qoxunun intensivliyi", "Əşyaların çıxarılması tələbi"],
      en: ["Size of the fire and spread of soot", "Surface materials", "Intensity of the odor", "Whether items must be removed"],
      ru: ["Масштаб пожара и площадь распространения копоти", "Материалы поверхностей", "Интенсивность запаха", "Необходимость выноса вещей"],
    },
    faqs: {
      az: [
        { q: "His qoxusu tam gedirmi?", a: "Qoxunun nə qədər azalacağı materiallardan və yanğının miqyasından asılıdır; baxışdan sonra real gözləntini deyirik." },
        { q: "Təmizlik nə vaxt başlaya bilər?", a: "Müvafiq qurumların icazəsi və obyektin təhlükəsiz olması təsdiqləndikdən sonra." },
        { q: "Mebeli xilas etmək olar?", a: "Bərk səthli mebellərin çoxu təmizlənir; yumşaq mebel və parçalar ayrıca qiymətləndirilir." },
      ],
      en: [
        { q: "Will the smoke smell go away completely?", a: "How much it can be reduced depends on materials and the size of the fire; we give a realistic expectation after a survey." },
        { q: "When can cleaning start?", a: "Once the relevant authorities have cleared the site and it is confirmed safe." },
        { q: "Can furniture be saved?", a: "Most hard-surface furniture can be cleaned; upholstered furniture and fabrics are assessed separately." },
      ],
      ru: [
        { q: "Уйдёт ли запах гари полностью?", a: "Насколько удастся его устранить, зависит от материалов и масштаба пожара; реальные ожидания называем после осмотра." },
        { q: "Когда можно начать уборку?", a: "После разрешения соответствующих служб и подтверждения безопасности объекта." },
        { q: "Можно ли спасти мебель?", a: "Большинство мебели с твёрдыми поверхностями очищается; мягкая мебель и ткани оцениваются отдельно." },
      ],
    },
    flagNotes: {
      oldStock: {
        az: "{in} köhnə binalarda his köhnə suvaq və taxta səthlərə dərin hopur; bu səthlər üçün daha yumşaq, mərhələli təmizlik üsulu seçirik.",
        en: "In older buildings {in}, soot soaks deep into old plaster and wood, so we choose a gentler, staged cleaning method for those surfaces.",
        ru: "В старых домах {in} копоть глубоко впитывается в старую штукатурку и дерево, поэтому для таких поверхностей выбираем более мягкий поэтапный метод.",
      },
      industrial: {
        az: "{in} istehsal və anbar obyektlərində yanğından sonra böyük sahələrin təmizliyi üçün komanda və avadanlıq həcmi əvvəlcədən planlanır.",
        en: "For production sites and warehouses {in}, crew size and equipment for cleaning large areas after a fire are planned in advance.",
        ru: "Для производств и складов {in} численность бригады и оборудование для уборки больших площадей после пожара планируются заранее.",
      },
    },
    localIntro: {
      az: "{in} yanğından sonra mənzil, ofis və obyektlərin təmizliyi — {areas} ərazilərində his və qoxunun xüsusi texnologiya ilə təmizlənməsi.",
      en: "Post-fire cleaning of apartments, offices and facilities {in} — removing soot and odor with special technology in {areas}.",
      ru: "Уборка квартир, офисов и объектов после пожара {in} — удаление копоти и запаха по специальной технологии в районах {areas}.",
    },
  },
  {
    slug: "menzil-temizliyi",
    contentKey: "apartment",
    name: { az: "Mənzil təmizliyi", en: "Apartment cleaning", ru: "Уборка квартир" },
    short: {
      az: "Mənzil və evlərin ümumi (generalnı) təmizliyi, köçmədən əvvəl və sonra təmizlik.",
      en: "Deep cleaning of apartments and houses, plus move-in and move-out cleaning.",
      ru: "Генеральная уборка квартир и домов, уборка перед заселением и после выезда.",
    },
    intro: {
      az: [
        "Gündəlik təmizlik evi səliqəli saxlayır, amma vaxtaşırı dərin təmizlik lazımdır: mətbəx şkaflarının içi, plitə aralıqları, pəncərələr, mebel arxası. Məhz bu işləri biz görürük.",
        "Köçmədən əvvəl, köçdükdən sonra, bayramlardan əvvəl və ya sadəcə istirahət etmək istədikdə — evinizi plan üzrə, otaq-otaq təmizləyirik.",
      ],
      en: [
        "Everyday cleaning keeps a home tidy, but now and then it needs a deep clean: inside kitchen cabinets, tile grout, windows, behind furniture. That is exactly what we do.",
        "Before moving in, after moving out, before holidays or simply when you want to rest — we clean your home to a plan, room by room.",
      ],
      ru: [
        "Ежедневная уборка поддерживает порядок, но время от времени дому нужна генеральная уборка: внутри кухонных шкафов, швы плитки, окна, за мебелью. Именно этим мы и занимаемся.",
        "Перед заселением, после выезда, перед праздниками или когда просто хочется отдохнуть — мы убираем ваш дом по плану, комната за комнатой.",
      ],
    },
    included: {
      az: ["Bütün otaqlarda toz və səthlərin silinməsi", "Mətbəx: plitə, soyuducu xarici, şkafların içi və çölü", "Hamam və tualetin dərin təmizliyi, əhəng ləkələri", "Pəncərə, kandar və eyvan şüşələrinin yuyulması", "Döşəmə və plintusların yuyulması", "Mebel arxası və altının təmizliyi"],
      en: ["Dusting and wiping surfaces in every room", "Kitchen: stove, fridge exterior, inside and outside cabinets", "Deep cleaning bathroom and toilet, limescale", "Washing windows, sills and balcony glass", "Washing floors and skirting boards", "Cleaning behind and under furniture"],
      ru: ["Удаление пыли и протирка поверхностей во всех комнатах", "Кухня: плита, холодильник снаружи, шкафы внутри и снаружи", "Глубокая чистка ванной и туалета, известковый налёт", "Мытьё окон, подоконников и балконных стёкол", "Мытьё полов и плинтусов", "Уборка за и под мебелью"],
    },
    process: {
      az: [
        { title: "Sifariş və plan", text: "Otaq sayı, xüsusi istəklər və tarix razılaşdırılır." },
        { title: "Yuxarıdan aşağı", text: "Tavan və yuxarı səthlərdən başlayıb döşəməyə doğru işləyirik." },
        { title: "Mətbəx və hamam", text: "Ən çox çirklənən zonalar ayrıca və detallı işlənir." },
        { title: "Yoxlama", text: "İş sonunda mənzil sizinlə birlikdə yoxlanılır." },
      ],
      en: [
        { title: "Booking and plan", text: "We agree the number of rooms, special requests and date." },
        { title: "Top to bottom", text: "We start from ceilings and high surfaces and work down to the floor." },
        { title: "Kitchen and bathroom", text: "The dirtiest zones are treated separately and in detail." },
        { title: "Inspection", text: "At the end we check the apartment together with you." },
      ],
      ru: [
        { title: "Заказ и план", text: "Согласовываем количество комнат, пожелания и дату." },
        { title: "Сверху вниз", text: "Начинаем с потолков и верхних поверхностей и двигаемся к полу." },
        { title: "Кухня и ванная", text: "Самые загрязнённые зоны обрабатываются отдельно и детально." },
        { title: "Проверка", text: "В конце проверяем квартиру вместе с вами." },
      ],
    },
    factors: {
      az: ["Otaq və sanitar qovşaq sayı", "Çirklənmə dərəcəsi", "Pəncərə və eyvan sayı", "Əlavə işlər (mebel, xalça, soyuducunun içi)"],
      en: ["Number of rooms and bathrooms", "Level of dirt", "Number of windows and balconies", "Extras (furniture, carpets, inside the fridge)"],
      ru: ["Количество комнат и санузлов", "Степень загрязнения", "Количество окон и балконов", "Дополнительные работы (мебель, ковры, холодильник внутри)"],
    },
    faqs: {
      az: [
        { q: "Təmizlik vasitələrini siz gətirirsiniz?", a: "Bəli, komanda bütün lazımi vasitə və avadanlıqla gəlir." },
        { q: "Evdə olmağım vacibdir?", a: "Xeyr, bu sizdən asılıdır. Siz obyektdə ola da bilərsiniz, prosesi bizə etibar edə də bilərsiniz." },
        { q: "Köçmədən əvvəl boş mənzil təmizlənir?", a: "Bəli, boş mənzildə şkafların içi və bütün səthlər daha rahat və detallı təmizlənir." },
      ],
      en: [
        { q: "Do you bring cleaning supplies?", a: "Yes, the team arrives with all necessary products and equipment." },
        { q: "Do I need to be home?", a: "No, it's up to you. You can stay on site or leave the process to us." },
        { q: "Do you clean empty apartments before move-in?", a: "Yes, in an empty apartment cabinets and all surfaces can be cleaned more easily and thoroughly." },
      ],
      ru: [
        { q: "Вы приносите свои средства?", a: "Да, команда приезжает со всеми необходимыми средствами и оборудованием." },
        { q: "Нужно ли мне быть дома?", a: "Нет, решать вам. Можно присутствовать, а можно доверить процесс нам." },
        { q: "Убираете ли пустые квартиры перед заселением?", a: "Да, в пустой квартире шкафы и все поверхности убираются удобнее и тщательнее." },
      ],
    },
    flagNotes: {
      newBuild: {
        az: "{in} yeni komplekslərdə köçmədən əvvəl təmizlik çox sifariş olunur: tikinti tozu, pəncərələrdəki qoruyucu plyonka və etiket izləri təmizlənir.",
        en: "Move-in cleaning is very common in the new complexes {in}: construction dust, protective film on windows and sticker residue are all removed.",
        ru: "В новых комплексах {in} часто заказывают уборку перед заселением: удаляем строительную пыль, защитную плёнку с окон и следы наклеек.",
      },
      suburban: {
        az: "{in} həyət və bağ evlərində mövsüm açılışı təmizliyi edirik: qış boyu yığılan toz, eyvan və terras, pəncərələr bir səfərdə.",
        en: "For private and summer houses {in} we do season-opening cleans: winter dust, balconies and terraces, and windows in one visit.",
        ru: "В частных домах и на дачах {in} делаем уборку к открытию сезона: накопившаяся за зиму пыль, балконы, террасы и окна за один выезд.",
      },
      coastal: {
        az: "{in} dənizə yaxın evlərdə qum və duz eyvan, pəncərə və döşəmələrdə tez yığılır; bunlar üçün uyğun vasitələrdən istifadə edirik.",
        en: "In homes near the sea {in}, sand and salt build up quickly on balconies, windows and floors; we use suitable products for them.",
        ru: "В домах у моря {in} песок и соль быстро скапливаются на балконах, окнах и полах — используем подходящие для этого средства.",
      },
      oldStock: {
        az: "{in} köhnə mənzillərdə illərlə yığılmış yağ və əhəng ləkələri üçün mərhələli dərin təmizlik aparırıq.",
        en: "In older apartments {in} we do staged deep cleaning for years of built-up grease and limescale.",
        ru: "В старых квартирах {in} проводим поэтапную генеральную уборку от многолетнего жира и известкового налёта.",
      },
    },
    localIntro: {
      az: "{in} mənzil və evlərin ümumi təmizliyi — {areas} ərazilərində köçmədən əvvəl, köçdükdən sonra və mövsümi dərin təmizlik.",
      en: "Deep cleaning of apartments and houses {in} — move-in, move-out and seasonal cleaning in {areas}.",
      ru: "Генеральная уборка квартир и домов {in} — перед заселением, после выезда и сезонная уборка в районах {areas}.",
    },
  },
  {
    slug: "restoran-ve-kafe-temizliyi",
    contentKey: "restaurant",
    name: { az: "Restoran və kafe təmizliyi", en: "Restaurant and cafe cleaning", ru: "Уборка ресторанов и кафе" },
    short: {
      az: "Restoran və kafelər üçün zal, mətbəx və sanitar qovşaqların gigiyena standartlarına uyğun təmizliyi.",
      en: "Hygiene-standard cleaning of dining rooms, kitchens and restrooms for restaurants and cafes.",
      ru: "Уборка залов, кухонь и санузлов ресторанов и кафе по гигиеническим стандартам.",
    },
    intro: {
      az: [
        "Restoranda təmizlik həm qonağın gördüyü zal, həm də görmədiyi mətbəxdir. Mətbəxdə yağ təbəqəsi sürətlə yığılır, zalda isə qonaq axını səbəbindən gün ərzində bir neçə dəfə səliqə lazım olur.",
        "Restoran və kafelər üçün işi xidmət saatlarından kənar — açılışdan əvvəl və ya bağlandıqdan sonra aparırıq. Müştərilərimiz arasında Mixək və Nəlbəki restoranları var.",
      ],
      en: [
        "Cleanliness in a restaurant is both the dining room guests see and the kitchen they don't. Grease builds up quickly in the kitchen, and the dining room needs tidying several times a day because of guest traffic.",
        "For restaurants and cafes we work outside service hours — before opening or after closing. Our clients include Mixək and Nəlbəki restaurants.",
      ],
      ru: [
        "Чистота в ресторане — это и зал, который видит гость, и кухня, которую он не видит. На кухне быстро скапливается жир, а залу из-за потока гостей нужен порядок несколько раз в день.",
        "Для ресторанов и кафе мы работаем вне часов обслуживания — до открытия или после закрытия. Среди наших клиентов — рестораны Mixək и Nəlbəki.",
      ],
    },
    included: {
      az: ["Zalın, masa və stulların təmizliyi", "Mətbəx səthləri, plitə və sobaların yağdan təmizlənməsi", "Aspirator və filtrlərin xarici səthlərinin təmizliyi", "Sanitar qovşaqların dezinfeksiyası", "Döşəmələrin yağ və ləkələrdən yuyulması", "Vitrin, şüşə və giriş qrupunun təmizliyi"],
      en: ["Cleaning the dining room, tables and chairs", "Degreasing kitchen surfaces, stoves and ovens", "Cleaning exterior surfaces of hoods and filters", "Disinfecting restrooms", "Washing floors of grease and stains", "Cleaning windows, glass and entrance"],
      ru: ["Уборка зала, столов и стульев", "Обезжиривание кухонных поверхностей, плит и печей", "Чистка внешних поверхностей вытяжек и фильтров", "Дезинфекция санузлов", "Мытьё полов от жира и пятен", "Чистка витрин, стёкол и входной группы"],
    },
    process: {
      az: [
        { title: "Obyekt analizi", text: "Zal, mətbəx və anbar zonaları, iş rejimi qeyd olunur." },
        { title: "Gigiyena planı", text: "Gündəlik, həftəlik və aylıq işlər qrafikə salınır." },
        { title: "İcra", text: "Xidmət saatlarından kənar, qida ilə təhlükəsiz vasitələrlə işlənir." },
        { title: "Yoxlama", text: "Məsul menecer nəticəni yoxlayır və qeydləri sizə ötürür." },
      ],
      en: [
        { title: "Site analysis", text: "We note dining, kitchen and storage zones and opening hours." },
        { title: "Hygiene plan", text: "Daily, weekly and monthly tasks are put on a schedule." },
        { title: "Execution", text: "Work is done outside service hours with food-safe products." },
        { title: "Inspection", text: "A responsible manager checks the result and passes notes to you." },
      ],
      ru: [
        { title: "Анализ объекта", text: "Фиксируем зал, кухню, складские зоны и режим работы." },
        { title: "План гигиены", text: "Ежедневные, еженедельные и ежемесячные работы вносятся в график." },
        { title: "Исполнение", text: "Работы проводятся вне часов обслуживания безопасными для пищевых зон средствами." },
        { title: "Проверка", text: "Ответственный менеджер проверяет результат и передаёт вам замечания." },
      ],
    },
    factors: {
      az: ["Zal və mətbəxin sahəsi", "Yağlanma dərəcəsi", "Təmizliyin tezliyi", "İş vaxtı (gecə)"],
      en: ["Dining room and kitchen area", "Level of grease", "Cleaning frequency", "Timing (night)"],
      ru: ["Площадь зала и кухни", "Степень жировых загрязнений", "Частота уборки", "Время работ (ночь)"],
    },
    faqs: {
      az: [
        { q: "Restoran bağlandıqdan sonra işləyirsiniz?", a: "Bəli, restoran və kafelərdə iş adətən bağlandıqdan sonra və ya açılışdan əvvəl aparılır." },
        { q: "Mətbəx üçün hansı vasitələr istifadə olunur?", a: "Qida zonaları üçün uyğun, sertifikatlı vasitələr." },
        { q: "Dövri müqavilə bağlamaq olar?", a: "Bəli, gündəlik və ya həftəlik qrafiklə müqaviləli xidmət təqdim edirik." },
      ],
      en: [
        { q: "Do you work after the restaurant closes?", a: "Yes, in restaurants and cafes we usually work after closing or before opening." },
        { q: "What products are used in the kitchen?", a: "Certified products suitable for food areas." },
        { q: "Can we sign a recurring contract?", a: "Yes, we offer contract service on a daily or weekly schedule." },
      ],
      ru: [
        { q: "Работаете ли вы после закрытия ресторана?", a: "Да, в ресторанах и кафе работы обычно ведутся после закрытия или до открытия." },
        { q: "Какие средства используются на кухне?", a: "Сертифицированные средства, подходящие для пищевых зон." },
        { q: "Можно ли заключить договор на регулярную уборку?", a: "Да, мы предлагаем договорное обслуживание по ежедневному или еженедельному графику." },
      ],
    },
    flagNotes: {
      business: {
        az: "{in} restoran və kafelərin sıx olduğu küçələrdə gecə komandalarımız işləyir ki, səhər açılışa qədər zal və mətbəx hazır olsun.",
        en: "On restaurant-dense streets {in} our night teams make sure the dining room and kitchen are ready before morning opening.",
        ru: "На улицах {in}, где много ресторанов и кафе, работают наши ночные команды, чтобы зал и кухня были готовы к утреннему открытию.",
      },
      coastal: {
        az: "{in} sahil boyu kafelərdə terras, şüşə və açıq oturacaq zonaları mövsüm ərzində daha tez-tez təmizlənməlidir.",
        en: "Seaside cafes {in} need their terraces, glass and outdoor seating cleaned more often during the season.",
        ru: "Прибрежным кафе {in} в сезон нужно чаще убирать террасы, стёкла и открытые зоны.",
      },
    },
    localIntro: {
      az: "{in} restoran və kafelərin zal və mətbəx təmizliyi — {areas} ərazilərində xidmət saatlarından kənar, gigiyena planı ilə.",
      en: "Dining room and kitchen cleaning for restaurants and cafes {in} — outside service hours, to a hygiene plan, in {areas}.",
      ru: "Уборка залов и кухонь ресторанов и кафе {in} — вне часов обслуживания, по плану гигиены, в районах {areas}.",
    },
  },
];

export const serviceMap = new Map(services.map((s) => [s.slug, s]));
