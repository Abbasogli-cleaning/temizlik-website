import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

/** Dili avtomatik əlavə edən Link, usePathname, useRouter və s. */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
