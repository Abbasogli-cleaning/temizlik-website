/**
 * Səhifələr arasında paylaşılan məzmun (şəkillər, açarlar, alt mətnlər).
 * Bütün şəkillər lokaldır (public/images) və təsviri fayl adları daşıyır.
 * Mətnlər messages/*.json-dadır — burada yalnız dildən asılı olmayan hissə + alt mətnlər.
 */
import type { Locale } from "@/i18n/routing";

type L = Record<Locale, string>;
type Img = { src: string; alt: L };

export const SERVICE_KEYS = ["office", "facade", "renovation", "disinfection", "fire"] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

const IMG = "/images";

/** Xidmət şəkilləri — alt mətn şəklin məzmununu təsvir edir */
export const services: Record<ServiceKey | "apartment" | "restaurant", Img & { icon: string }> = {
  office: {
    src: `${IMG}/ofis-doseme-cilalama-temizlik.jpg`,
    icon: `${IMG}/ikonlar/ofis-temizliyi.svg`,
    alt: {
      az: "Ofis binasında döşəmə cilalama maşını ilə təmizlik",
      en: "Floor polishing machine cleaning an office building floor",
      ru: "Чистка пола поломоечной машиной в офисном здании",
    },
  },
  facade: {
    src: `${IMG}/pencere-ve-suse-yuyulmasi.jpg`,
    icon: `${IMG}/ikonlar/fasad-ve-suse.svg`,
    alt: {
      az: "Təmizlik mütəxəssisləri panoram pəncərə şüşələrini yuyur",
      en: "Cleaning specialists washing panoramic window glass",
      ru: "Специалисты по уборке моют панорамные окна",
    },
  },
  renovation: {
    src: `${IMG}/temir-sonrasi-temizlik-komanda.jpg`,
    icon: `${IMG}/ikonlar/temir-sonrasi.svg`,
    alt: {
      az: "Təmirdən sonra boş otaqda tozsoran və pəncərə təmizliyi aparan komanda",
      en: "Team vacuuming and cleaning windows in an empty room after renovation",
      ru: "Команда пылесосит и моет окна в пустой комнате после ремонта",
    },
  },
  disinfection: {
    src: `${IMG}/dezinfeksiya-qoruyucu-geyim.jpg`,
    icon: `${IMG}/ikonlar/dezinfeksiya.svg`,
    alt: {
      az: "Qoruyucu geyimdə mütəxəssis divara dezinfeksiya məhlulu səpir",
      en: "Specialist in protective suit spraying disinfectant on a wall",
      ru: "Специалист в защитном костюме распыляет дезинфицирующий раствор на стену",
    },
  },
  fire: {
    src: `${IMG}/dezinfeksiya-qoruyucu-geyim.jpg`,
    icon: `${IMG}/ikonlar/dezinfeksiya.svg`,
    alt: {
      az: "Qoruyucu geyimdə mütəxəssis divardakı his və çirki təmizləyir",
      en: "Specialist in protective suit treating soot and stains on a wall",
      ru: "Специалист в защитном костюме обрабатывает копоть и пятна на стене",
    },
  },
  apartment: {
    src: `${IMG}/yumsaq-mebel-temizliyi.jpg`,
    icon: `${IMG}/ikonlar/fasad-ve-suse.svg`,
    alt: {
      az: "Mənzildə divanın xüsusi aparatla yumşaq mebel təmizliyi",
      en: "Upholstery cleaning of a sofa with a special machine in an apartment",
      ru: "Химчистка дивана специальным аппаратом в квартире",
    },
  },
  restaurant: {
    src: `${IMG}/temizlik-komandasi-avadanliq.jpg`,
    icon: `${IMG}/ikonlar/dezinfeksiya.svg`,
    alt: {
      az: "Təmizlik komandası vasitə və avadanlıqla işə hazırlaşır",
      en: "Cleaning team getting ready with products and equipment",
      ru: "Клининговая команда готовится к работе со средствами и инвентарём",
    },
  },
};

/** Statistika — ana səhifə və haqqımızda */
export const STATS = [
  { key: "projects", value: "1000", suffix: "+" },
  { key: "years", value: "13", suffix: "+" },
  { key: "clients", value: "100", suffix: "%" },
  { key: "partners", value: "28", suffix: "+" },
] as const;

/** Rəylər — avatar yerinə şirkət adının baş hərfi göstərilir (stok üz istifadə edilmir) */
export const TESTIMONIALS = [
  { key: "suIdman", rating: 4.5 },
  { key: "sgc", rating: 4.5 },
  { key: "azpulmat", rating: 5 },
  { key: "mixek", rating: 5 },
  { key: "nelbeki", rating: 5 },
] as const;

/** Real iş şəkilləri — gördüyümüz işlərdən */
export const WORK_IMAGES: Img[] = [
  {
    src: `${IMG}/isler/istehsalat-binasi-xidmet-obyekti.png`,
    alt: {
      az: "Xidmət göstərdiyimiz istehsalat binasının xarici görünüşü",
      en: "Exterior of a production building we service",
      ru: "Внешний вид производственного здания, которое мы обслуживаем",
    },
  },
  {
    src: `${IMG}/isler/laboratoriya-temizliyi.png`,
    alt: {
      az: "Təmizlikdən sonra laboratoriya və ölçmə otağı",
      en: "Laboratory and measurement room after cleaning",
      ru: "Лаборатория и измерительная комната после уборки",
    },
  },
  {
    src: `${IMG}/isler/istehsalat-sexi-temizliyi.jpg`,
    alt: {
      az: "Təmizlənmiş istehsalat sexi və iş masaları",
      en: "Cleaned production workshop and workbenches",
      ru: "Убранный производственный цех и верстаки",
    },
  },
  {
    src: `${IMG}/isler/cnc-sexi-doseme-temizliyi.jpg`,
    alt: {
      az: "CNC dəzgahları olan sexdə döşəmə təmizliyi",
      en: "Floor cleaning in a workshop with CNC machines",
      ru: "Уборка пола в цехе со станками ЧПУ",
    },
  },
  {
    src: `${IMG}/isler/istehsalat-sahesi-temiz-sex.jpg`,
    alt: {
      az: "Təmizlikdən sonra istehsalat sahəsi və keçid yolları",
      en: "Production area and walkways after cleaning",
      ru: "Производственная зона и проходы после уборки",
    },
  },
];

export const ADVANTAGES = [
  { key: "system", image: `${IMG}/ofis-tozsoran-temizliyi.jpg` },
  { key: "team", image: `${IMG}/temizlik-komandasi-avadanliq.jpg` },
  { key: "equipment", image: `${IMG}/ofis-doseme-cilalama-temizlik.jpg` },
] as const;

export const TEAM = [
  { key: "lead", image: `${IMG}/komanda/komanda-rehberi.png` },
  { key: "alpinist", image: `${IMG}/komanda/alpinist-qrupu-rehberi.png` },
  { key: "quality", image: `${IMG}/komanda/keyfiyyet-meneceri.png` },
  { key: "hr", image: `${IMG}/komanda/personal-meneceri.png` },
] as const;

export const FAQ_KEYS = ["services", "order", "cancel", "sameTeam", "presence"] as const;

export const ABOUT_FEATURES = [
  "standard",
  "systematic",
  "structured",
  "custom",
  "team",
  "equipment",
  "quality",
] as const;

export const images = {
  homeAbout: `${IMG}/metbex-temizliyi-mutexessis.avif`,
  aboutHero: `${IMG}/ofis-temizliyi-komanda.avif`,
  aboutSplit: `${IMG}/temizlik-mutexessisi.avif`,
  servicesHero: `${IMG}/metbex-ve-masa-temizliyi.avif`,
  og: `${IMG}/abbasoglu-temizlik-og.jpg`,
  heroVideo: {
    mp4: "https://cdn.prod.website-files.com/6710f912b08f2b5f7beec811%2F67137b863467616e3790e77f_bg-video-transcode.mp4",
    webm: "https://cdn.prod.website-files.com/6710f912b08f2b5f7beec811%2F67137b863467616e3790e77f_bg-video-transcode.webm",
  },
};
