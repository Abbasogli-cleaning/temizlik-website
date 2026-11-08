/** Şirkət adının baş hərfi — stok üz şəkli əvəzinə (dekorativ, ad yanında yazılır) */
export function InitialsAvatar({ name }: { name: string }) {
  const initial = name.replace(/^[^\p{L}]+/u, "").charAt(0).toLocaleUpperCase();
  return (
    <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/15 text-lg font-bold text-primary">
      {initial}
    </span>
  );
}
