export function generatePalette(seed = 0, count = 5) {
  // deterministic but simple pseudo-random palette generator (pure function)
  const colors = [];
  let s = Number(seed) || 0;
  for (let i = 0; i < count; i += 1) {
    // linear-congruential style pseudo-random
    s = (s * 1664525 + 1013904223) % 4294967296;
    const r = (s >>> 0) % 256;
    const g = (s >>> 8) % 256;
    const b = (s >>> 16) % 256;
    colors.push(`#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);
  }
  return colors;
}
