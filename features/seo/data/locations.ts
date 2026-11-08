import type { Location } from "../types";

/**
 * Faza 1: Bakı (paytaxt + 12 rayon), Sumqayıt, Xırdalan.
 * Massiv adları ümumi məlum yerlərdir — müştəri təsdiqləməlidir.
 * Yeni ərazi əlavə etmək = bu siyahıya bir obyekt əlavə etmək.
 */
export const locations: Location[] = [
  {
    slug: "baki",
    kind: "capital",
    name: { az: "Bakı", en: "Baku", ru: "Баку" },
    in: { az: "Bakıda", en: "in Baku", ru: "в Баку" },
    areas: {
      az: ["Səbail", "Nəsimi", "Yasamal", "Nərimanov", "Xətai", "Binəqədi", "Nizami", "Sabunçu", "Suraxanı", "Xəzər", "Qaradağ", "Pirallahı"],
      ru: ["Сабаил", "Насими", "Ясамал", "Нариманов", "Хатаи", "Бинагади", "Низами", "Сабунчу", "Сураханы", "Хазар", "Гарадаг", "Пираллахи"],
    },
    flags: ["business", "oldStock", "newBuild", "coastal"],
    sectorCity: true,
    summary: {
      az: "Bakı ölkənin paytaxtı və ən böyük biznes mərkəzidir: ofis binaları, otellər, ticarət mərkəzləri və on minlərlə mənzil bir şəhərdə cəmləşib.",
      en: "Baku is the capital and the country's largest business hub: office towers, hotels, shopping centers and tens of thousands of apartments in one city.",
      ru: "Баку — столица и крупнейший деловой центр страны: офисные здания, отели, торговые центры и десятки тысяч квартир в одном городе.",
    },
    profile: {
      az: "Mərkəzdə tarixi və sovet dövrü binaları, kənarlarda yeni yaşayış kompleksləri, sahil boyu isə külək və dəniz duzunun təsirinə məruz qalan şüşə fasadlar var. Ona görə Bakıda hər obyekt üçün ayrıca plan hazırlayırıq.",
      en: "The center has historic and Soviet-era buildings, the outskirts have new residential complexes, and the seafront has glass facades exposed to wind and sea salt. That is why we prepare a separate plan for every site in Baku.",
      ru: "В центре — исторические и советские здания, на окраинах — новые жилые комплексы, а вдоль моря — стеклянные фасады под воздействием ветра и морской соли. Поэтому для каждого объекта в Баку мы готовим отдельный план.",
    },
    nearby: ["sumqayit", "xirdalan"],
  },
  {
    slug: "sebail",
    kind: "district",
    name: { az: "Səbail", en: "Sabail", ru: "Сабаил" },
    in: { az: "Səbail rayonunda", en: "in Sabail district", ru: "в Сабаильском районе" },
    areas: {
      az: ["İçərişəhər", "Bayıl", "Badamdar", "Bibiheybət", "Dənizkənarı bulvar"],
      ru: ["Ичеришехер", "Баилово", "Бадамдар", "Бибиэйбат", "Приморский бульвар"],
    },
    flags: ["business", "oldStock", "coastal"],
    summary: {
      az: "Səbail şəhərin tarixi mərkəzidir: İçərişəhər, bulvar boyu ofislər, dövlət idarələri və otellər bu rayondadır.",
      en: "Sabail is the historic heart of the city: the Old City, seafront offices, government buildings and hotels are all here.",
      ru: "Сабаил — исторический центр города: Ичеришехер, офисы вдоль бульвара, государственные учреждения и отели.",
    },
    profile: {
      az: "Köhnə daş binalarda yumşaq vasitələr və diqqətli iş tələb olunur, bulvar boyu şüşə fasadlar isə dəniz duzu səbəbindən tez-tez yuyulmalıdır. Badamdar və Bayılda həm villalar, həm də yeni yaşayış binaları var.",
      en: "Old stone buildings need gentle products and careful work, while glass facades along the boulevard need frequent washing because of sea salt. Badamdar and Bayil mix villas with new apartment blocks.",
      ru: "Старые каменные здания требуют мягких средств и аккуратной работы, а стеклянные фасады у бульвара из-за морской соли нужно мыть чаще. В Бадамдаре и Баилово — и виллы, и новые жилые дома.",
    },
    nearby: ["nesimi", "yasamal", "qaradag"],
  },
  {
    slug: "nesimi",
    kind: "district",
    name: { az: "Nəsimi", en: "Nasimi", ru: "Насими" },
    in: { az: "Nəsimi rayonunda", en: "in Nasimi district", ru: "в Насиминском районе" },
    areas: {
      az: ["28 May", "Nizami küçəsi", "Füzuli meydanı", "4-cü mikrorayon"],
      ru: ["28 Мая", "улица Низами", "площадь Физули", "4-й микрорайон"],
    },
    flags: ["business", "oldStock"],
    summary: {
      az: "Nəsimi şəhərin ən sıx biznes və ticarət rayonlarından biridir — ofislər, mağazalar, restoranlar və mərkəzi yaşayış binaları.",
      en: "Nasimi is one of the city's densest business and retail districts — offices, shops, restaurants and central apartment buildings.",
      ru: "Насими — один из самых плотных деловых и торговых районов города: офисы, магазины, рестораны и центральные жилые дома.",
    },
    profile: {
      az: "Burada iş çox vaxt iş saatlarından kənar — axşam və ya səhər tezdən aparılır ki, ofis və mağazaların işi dayanmasın. Köhnə binalarda pilləkən və giriş hissələrinin təmizliyi də tez-tez sifariş olunur.",
      en: "Work here is often done outside business hours — in the evening or early morning — so offices and shops keep running. Stairwells and entrances in older buildings are also a frequent request.",
      ru: "Работы здесь часто проводятся вне рабочего времени — вечером или рано утром, чтобы офисы и магазины не прерывали работу. В старых домах часто заказывают уборку подъездов и лестниц.",
    },
    nearby: ["sebail", "yasamal", "nerimanov", "bineqedi"],
  },
  {
    slug: "yasamal",
    kind: "district",
    name: { az: "Yasamal", en: "Yasamal", ru: "Ясамал" },
    in: { az: "Yasamal rayonunda", en: "in Yasamal district", ru: "в Ясамальском районе" },
    areas: {
      az: ["Yeni Yasamal", "Yasamal massivi", "İnşaatçılar", "Elmlər Akademiyası"],
      ru: ["Ени Ясамал", "Ясамальский массив", "Иншаатчылар", "Академия наук"],
    },
    flags: ["newBuild", "business"],
    summary: {
      az: "Yasamal sıx yaşayış rayonudur: Yeni Yasamalda çoxmərtəbəli yeni binalar, mərkəzə yaxın hissədə isə ofislər və universitetlər var.",
      en: "Yasamal is a dense residential district: high-rise new buildings in New Yasamal, with offices and universities closer to the center.",
      ru: "Ясамал — плотный жилой район: новые многоэтажки в Ени Ясамал, а ближе к центру — офисы и университеты.",
    },
    profile: {
      az: "Yeni binalarda ən çox təmir sonrası və köçmədən əvvəl mənzil təmizliyi sifariş olunur. Hündür binalarda pəncərə və şüşə yuyulması üçün alpinist qrupu tələb oluna bilər.",
      en: "In new buildings the most common orders are post-renovation and pre-move-in apartment cleaning. High-rises may need our rope-access team for window and glass washing.",
      ru: "В новостройках чаще всего заказывают уборку после ремонта и перед заселением. Для мойки окон в высотках может понадобиться группа промышленных альпинистов.",
    },
    nearby: ["nesimi", "sebail", "bineqedi"],
  },
  {
    slug: "nerimanov",
    kind: "district",
    name: { az: "Nərimanov", en: "Narimanov", ru: "Нариманов" },
    in: { az: "Nərimanov rayonunda", en: "in Narimanov district", ru: "в Наримановском районе" },
    areas: {
      az: ["Gənclik", "Nərimanov metrosu", "Montin", "Əhməd Rəcəbli küçəsi"],
      ru: ["Гянджлик", "метро Нариманов", "Монтин", "улица Ахмеда Раджабли"],
    },
    flags: ["business", "oldStock", "newBuild"],
    summary: {
      az: "Nərimanov rayonunda ofisimiz yerləşir. Gənclik ətrafında biznes mərkəzləri və ticarət obyektləri, Montin və digər massivlərdə isə həm köhnə, həm yeni yaşayış binaları var.",
      en: "Our office is in Narimanov district. Around Ganjlik there are business centers and retail, while Montin and other neighborhoods mix old and new apartment buildings.",
      ru: "В Наримановском районе находится наш офис. Вокруг Гянджлика — бизнес-центры и торговые объекты, а в Монтине и других кварталах — старые и новые жилые дома.",
    },
    profile: {
      az: "Ofisimizə yaxın olduğu üçün Nərimanovda obyektə baxış və briqadanın planlaşdırılması daha çevik olur. Burada ofis, mənzil və təmir sonrası təmizlik eyni dərəcədə tələb olunur.",
      en: "Being close to our office makes site visits and crew scheduling in Narimanov more flexible. Office, apartment and post-renovation cleaning are all in equal demand here.",
      ru: "Близость к нашему офису делает осмотр объекта и планирование бригады в Нариманове более гибкими. Здесь одинаково востребованы уборка офисов, квартир и после ремонта.",
    },
    nearby: ["nesimi", "nizami", "xetai", "bineqedi", "sabuncu"],
  },
  {
    slug: "nizami",
    kind: "district",
    name: { az: "Nizami", en: "Nizami", ru: "Низами" },
    in: { az: "Nizami rayonunda", en: "in Nizami district", ru: "в Низаминском районе" },
    areas: {
      az: ["8-ci kilometr", "Keşlə", "Qara Qarayev"],
      ru: ["8-й километр", "Кешля", "Гара Гараев"],
    },
    flags: ["oldStock", "industrial"],
    summary: {
      az: "Nizami rayonu sıx yaşayış massivləri, bazarlar, kiçik istehsal və anbar sahələri olan rayondur.",
      en: "Nizami district combines dense residential blocks, markets, small production sites and warehouses.",
      ru: "Низаминский район — это плотные жилые массивы, рынки, небольшие производственные площадки и склады.",
    },
    profile: {
      az: "Sovet dövrü binalarında köhnə ləkə və yağ izlərinin təmizlənməsi, anbar və istehsal sahələrində isə toz və sənaye çirkinin təmizlənməsi əsas işdir.",
      en: "Removing old stains and grease in Soviet-era buildings, and dust and industrial grime in warehouses and workshops, is the main work here.",
      ru: "Главная работа здесь — удаление старых пятен и жира в советских домах, а также пыли и промышленной грязи на складах и в цехах.",
    },
    nearby: ["nerimanov", "xetai", "sabuncu", "suraxani"],
  },
  {
    slug: "xetai",
    kind: "district",
    name: { az: "Xətai", en: "Khatai", ru: "Хатаи" },
    in: { az: "Xətai rayonunda", en: "in Khatai district", ru: "в Хатаинском районе" },
    areas: {
      az: ["Ağ şəhər", "Əhmədli", "Həzi Aslanov", "Köhnə Günəşli"],
      ru: ["Белый город", "Ахмедлы", "Ази Асланов", "Старые Гюнешли"],
    },
    flags: ["newBuild", "business", "coastal", "industrial"],
    summary: {
      az: "Xətai rayonu həm yeni Ağ şəhər layihəsini, həm Əhmədli və Həzi Aslanovun böyük yaşayış massivlərini, həm də sənaye zonalarını əhatə edir.",
      en: "Khatai covers the new White City project, the large residential areas of Ahmadli and Hazi Aslanov, and industrial zones.",
      ru: "Хатаинский район включает новый проект «Белый город», большие жилые массивы Ахмедлы и Ази Асланов, а также промышленные зоны.",
    },
    profile: {
      az: "Yeni tikililərdə təmir sonrası təmizlik, sahilə yaxın binalarda şüşə və fasad yuyulması, sənaye zonasında isə anbar təmizliyi ən çox sifariş olunan işlərdir.",
      en: "Post-renovation cleaning in new buildings, glass and facade washing near the shore, and warehouse cleaning in the industrial zone are the most frequent jobs.",
      ru: "Чаще всего здесь заказывают уборку после ремонта в новостройках, мойку стекол и фасадов у моря и уборку складов в промзоне.",
    },
    nearby: ["nizami", "nerimanov", "suraxani"],
  },
  {
    slug: "bineqedi",
    kind: "district",
    name: { az: "Binəqədi", en: "Binagadi", ru: "Бинагади" },
    in: { az: "Binəqədi rayonunda", en: "in Binagadi district", ru: "в Бинагадинском районе" },
    areas: {
      az: ["7-ci, 8-ci, 9-cu mikrorayonlar", "Biləcəri", "Xocəsən", "Binəqədi qəsəbəsi", "Rəsulzadə qəsəbəsi"],
      ru: ["7-й, 8-й, 9-й микрорайоны", "Биладжары", "Ходжасан", "посёлок Бинагади", "посёлок Расулзаде"],
    },
    flags: ["oldStock", "newBuild", "suburban"],
    summary: {
      az: "Binəqədi böyük mikrorayonları, yeni yaşayış kompleksləri və qəsəbələri olan geniş rayondur.",
      en: "Binagadi is a large district of microdistricts, new residential complexes and suburban settlements.",
      ru: "Бинагади — большой район микрорайонов, новых жилых комплексов и пригородных посёлков.",
    },
    profile: {
      az: "Mikrorayonlarda köhnə mənzillərin ümumi təmizliyi, yeni komplekslərdə təmir sonrası təmizlik, qəsəbələrdə isə həyət evlərinin təmizliyi tələb olunur.",
      en: "Microdistricts call for deep cleaning of older apartments, new complexes for post-renovation cleaning, and settlements for cleaning private houses.",
      ru: "В микрорайонах нужна генеральная уборка старых квартир, в новых комплексах — уборка после ремонта, в посёлках — уборка частных домов.",
    },
    nearby: ["yasamal", "nesimi", "nerimanov", "xirdalan", "sumqayit"],
  },
  {
    slug: "sabuncu",
    kind: "district",
    name: { az: "Sabunçu", en: "Sabunchu", ru: "Сабунчу" },
    in: { az: "Sabunçu rayonunda", en: "in Sabunchu district", ru: "в Сабунчинском районе" },
    areas: {
      az: ["Bakıxanov", "Maştağa", "Ramana", "Zabrat", "Bilgəh"],
      ru: ["Бакиханов", "Маштага", "Рамана", "Забрат", "Бильгя"],
    },
    flags: ["suburban", "newBuild"],
    summary: {
      az: "Sabunçu rayonu Bakıxanov kimi sıx yaşayış qəsəbələrini və Bilgəh, Maştağa kimi həyət evləri və bağ sahələri olan əraziləri birləşdirir.",
      en: "Sabunchu combines dense settlements such as Bakikhanov with areas of private houses and summer homes such as Bilgah and Mashtaga.",
      ru: "Сабунчинский район объединяет плотные посёлки вроде Бакиханова и районы частных домов и дач — Бильгя, Маштага.",
    },
    profile: {
      az: "Böyük həyət evlərində pəncərə, şüşə, eyvan və terras təmizliyi, yay mövsümündən əvvəl bağ evlərinin açılış təmizliyi tez-tez sifariş olunur.",
      en: "Large private houses often order window, glass, balcony and terrace cleaning, and summer homes order an opening clean before the season.",
      ru: "В больших частных домах часто заказывают мойку окон, стекол, балконов и террас, а на дачах — уборку перед открытием сезона.",
    },
    nearby: ["nerimanov", "nizami", "suraxani", "xezer"],
  },
  {
    slug: "suraxani",
    kind: "district",
    name: { az: "Suraxanı", en: "Surakhani", ru: "Сураханы" },
    in: { az: "Suraxanı rayonunda", en: "in Surakhani district", ru: "в Сураханском районе" },
    areas: {
      az: ["Qaraçuxur", "Hövsan", "Əmircan", "Bülbülə"],
      ru: ["Гарачухур", "Говсан", "Амирджан", "Бюльбюля"],
    },
    flags: ["industrial", "suburban"],
    summary: {
      az: "Suraxanı rayonu yaşayış qəsəbələri, həyət evləri, istehsal və anbar obyektləri olan rayondur.",
      en: "Surakhani is a district of residential settlements, private houses, production sites and warehouses.",
      ru: "Сураханский район — это жилые посёлки, частные дома, производственные объекты и склады.",
    },
    profile: {
      az: "Anbar və istehsal sahələrində döşəmə və avadanlıq ətrafının təmizliyi, qəsəbələrdə isə ev və həyət təmizliyi əsas sifarişlərdir.",
      en: "Floor and equipment-area cleaning in warehouses and workshops, and house and yard cleaning in the settlements, are the main orders.",
      ru: "Основные заказы — уборка полов и зон оборудования на складах и производствах, а также уборка домов и дворов в посёлках.",
    },
    nearby: ["nizami", "xetai", "sabuncu", "xezer"],
  },
  {
    slug: "xezer",
    kind: "district",
    name: { az: "Xəzər", en: "Khazar", ru: "Хазар" },
    in: { az: "Xəzər rayonunda", en: "in Khazar district", ru: "в Хазарском районе" },
    areas: {
      az: ["Mərdəkan", "Buzovna", "Şüvəlan", "Türkan", "Zirə"],
      ru: ["Мардакян", "Бузовна", "Шувелян", "Тюркан", "Зиря"],
    },
    flags: ["suburban", "coastal"],
    summary: {
      az: "Xəzər rayonu dəniz sahilində yerləşən bağ evləri, villalar və istirahət mərkəzləri ilə tanınır.",
      en: "Khazar district is known for seaside summer houses, villas and resorts.",
      ru: "Хазарский район известен приморскими дачами, виллами и зонами отдыха.",
    },
    profile: {
      az: "Mövsüm əvvəli və sonu villaların dərin təmizliyi, böyük şüşə səthlərin və terrasların yuyulması, dəniz duzu və qumdan sonra mebel və döşəmələrin təmizlənməsi burada ən çox tələb olunur.",
      en: "Deep cleaning of villas before and after the season, washing large glass surfaces and terraces, and cleaning furniture and floors after sea salt and sand are the most requested here.",
      ru: "Здесь чаще всего нужны генеральная уборка вилл до и после сезона, мойка больших стеклянных поверхностей и террас, чистка мебели и полов от морской соли и песка.",
    },
    nearby: ["sabuncu", "suraxani", "pirallahi"],
  },
  {
    slug: "qaradag",
    kind: "district",
    name: { az: "Qaradağ", en: "Garadagh", ru: "Гарадаг" },
    in: { az: "Qaradağ rayonunda", en: "in Garadagh district", ru: "в Гарадагском районе" },
    areas: {
      az: ["Lökbatan", "Sahil", "Qızıldaş", "Səngəçal", "Ələt"],
      ru: ["Локбатан", "Сахиль", "Гызылдаш", "Сангачал", "Алят"],
    },
    flags: ["industrial", "coastal"],
    summary: {
      az: "Qaradağ rayonu şəhərin cənubunda, sahil boyu yerləşir və burada həm yaşayış qəsəbələri, həm də sənaye və enerji obyektləri var.",
      en: "Garadagh lies along the coast south of the city, with residential settlements as well as industrial and energy facilities.",
      ru: "Гарадагский район тянется вдоль побережья к югу от города: здесь и жилые посёлки, и промышленные и энергетические объекты.",
    },
    profile: {
      az: "Sənaye obyektlərinin ofis və məişət binalarında müqaviləli təmizlik, qəsəbələrdə isə ev təmizliyi tələb olunur. Uzaq obyektlər üçün briqada və avadanlıq əvvəlcədən planlanır.",
      en: "Contract cleaning of offices and staff buildings at industrial sites, and house cleaning in the settlements, are in demand. Crews and equipment for remote sites are planned in advance.",
      ru: "Востребована договорная уборка офисов и бытовых зданий промышленных объектов, а в посёлках — уборка домов. Бригада и оборудование для удалённых объектов планируются заранее.",
    },
    nearby: ["sebail", "yasamal"],
  },
  {
    slug: "pirallahi",
    kind: "district",
    name: { az: "Pirallahı", en: "Pirallahi", ru: "Пираллахи" },
    in: { az: "Pirallahı rayonunda", en: "in Pirallahi district", ru: "в Пираллахинском районе" },
    areas: {
      az: ["Pirallahı qəsəbəsi", "Gürgan"],
      ru: ["посёлок Пираллахи", "Гюргян"],
    },
    flags: ["coastal", "industrial"],
    summary: {
      az: "Pirallahı Abşeronun şərqində, adada yerləşən rayondur və neft sənayesi ilə bağlı obyektləri var.",
      en: "Pirallahi is an island district east of the Absheron peninsula with oil-industry facilities.",
      ru: "Пираллахи — островной район к востоку от Апшерона с объектами нефтяной промышленности.",
    },
    profile: {
      az: "Uzaq məsafə səbəbindən burada iş əvvəlcədən razılaşdırılmış plan üzrə, adətən bir neçə xidmətin bir səfərdə birləşdirilməsi ilə aparılır.",
      en: "Because of the distance, work here follows a plan agreed in advance, usually combining several services in one visit.",
      ru: "Из-за удалённости работы проводятся по заранее согласованному плану, обычно с объединением нескольких услуг в один выезд.",
    },
    nearby: ["xezer"],
  },
  {
    slug: "sumqayit",
    kind: "city",
    name: { az: "Sumqayıt", en: "Sumgait", ru: "Сумгайыт" },
    in: { az: "Sumqayıtda", en: "in Sumgait", ru: "в Сумгайыте" },
    areas: {
      az: ["Mərkəz", "Mikrorayonlar", "Sumqayıt bulvarı", "Corat", "Hacı Zeynalabdin"],
      ru: ["Центр", "микрорайоны", "Сумгайытский бульвар", "Джорат", "Гаджи Зейналабдин"],
    },
    flags: ["industrial", "coastal", "oldStock", "newBuild"],
    sectorCity: true,
    summary: {
      az: "Sumqayıt Bakıdan sonra Abşeronun ən böyük şəhəridir — sənaye parkı, sahil bulvarı, köhnə mikrorayonlar və yeni yaşayış binaları var.",
      en: "Sumgait is Absheron's largest city after Baku — with an industrial park, a seaside boulevard, older microdistricts and new apartment buildings.",
      ru: "Сумгайыт — крупнейший после Баку город Апшерона: промышленный парк, приморский бульвар, старые микрорайоны и новые жилые дома.",
    },
    profile: {
      az: "Sumqayıtda sənaye müəssisələrinin ofis və məişət binaları, ticarət obyektləri, həmçinin mənzillərin təmir sonrası və ümumi təmizliyi sifariş olunur. Briqada Bakıdan planlı şəkildə gəlir.",
      en: "In Sumgait we clean office and staff buildings of industrial companies, retail sites, and apartments after renovation or for a deep clean. Crews travel from Baku on a planned schedule.",
      ru: "В Сумгайыте заказывают уборку офисных и бытовых зданий промышленных предприятий, торговых объектов, а также квартир после ремонта и генеральную уборку. Бригада выезжает из Баку по плану.",
    },
    nearby: ["xirdalan", "bineqedi", "baki"],
  },
  {
    slug: "xirdalan",
    kind: "city",
    name: { az: "Xırdalan", en: "Khirdalan", ru: "Хырдалан" },
    in: { az: "Xırdalanda", en: "in Khirdalan", ru: "в Хырдалане" },
    areas: {
      az: ["Xırdalan", "Masazır", "Novxanı", "Görədil", "Mehdiabad"],
      ru: ["Хырдалан", "Масазыр", "Новханы", "Гёрадиль", "Мехдиабад"],
    },
    flags: ["newBuild", "suburban"],
    sectorCity: true,
    summary: {
      az: "Xırdalan Abşeron rayonunun mərkəzidir və Bakıya bitişikdir; son illərdə burada çoxlu yeni yaşayış kompleksi tikilib.",
      en: "Khirdalan is the center of Absheron district, right next to Baku, and has seen many new residential complexes in recent years.",
      ru: "Хырдалан — центр Апшеронского района, вплотную к Баку; в последние годы здесь построено много новых жилых комплексов.",
    },
    profile: {
      az: "Yeni komplekslərdə təmir sonrası və köçmədən əvvəl təmizlik, Masazır və Novxanıda isə həyət evləri və bağ evlərinin təmizliyi ən çox sifariş olunan işlərdir.",
      en: "Post-renovation and pre-move-in cleaning in new complexes, and house and summer-home cleaning in Masazir and Novkhani, are the most common jobs.",
      ru: "Чаще всего заказывают уборку после ремонта и перед заселением в новых комплексах, а в Масазыре и Новханах — уборку частных домов и дач.",
    },
    nearby: ["bineqedi", "sumqayit", "yasamal", "baki"],
  },
];

export const locationMap = new Map(locations.map((l) => [l.slug, l]));
