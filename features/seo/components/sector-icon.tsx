import { Building2, Dumbbell, GraduationCap, Hotel, Landmark, ShoppingBag, Stethoscope, Warehouse } from "lucide-react";

import type { Sector } from "../types";

const ICONS = {
  hotel: Hotel,
  clinic: Stethoscope,
  school: GraduationCap,
  mall: ShoppingBag,
  gym: Dumbbell,
  residential: Building2,
  warehouse: Warehouse,
  admin: Landmark,
} as const;

export function SectorIcon({ icon, className }: { icon: Sector["icon"]; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} aria-hidden />;
}
