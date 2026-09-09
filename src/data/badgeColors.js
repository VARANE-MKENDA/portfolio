const palette = [
  { bg: "bg-blue-500/15", text: "text-blue-400" },
  { bg: "bg-emerald-500/15", text: "text-emerald-400" },
  { bg: "bg-amber-500/15", text: "text-amber-400" },
  { bg: "bg-violet-500/15", text: "text-violet-400" },
  { bg: "bg-cyan-500/15", text: "text-cyan-400" },
  { bg: "bg-rose-500/15", text: "text-rose-400" },
];

export function badgeClasses(label) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash * 31 + label.charCodeAt(i)) >>> 0;
  }
  const { bg, text } = palette[hash % palette.length];
  return `${bg} ${text}`;
}
