import type messages from "../messages/az.json";
import type { routing } from "./routing";

// JSON açarları tipli olur: səhv açar → TypeScript xətası
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
