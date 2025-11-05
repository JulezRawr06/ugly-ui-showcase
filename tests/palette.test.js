import { generatePalette } from "../palette.js";

describe("generatePalette", () => {
  test("returns the expected number of colors", () => {
    const pal = generatePalette(1, 5);
    expect(Array.isArray(pal)).toBe(true);
    expect(pal).toHaveLength(5);
  });

  test("colors are hex strings of length 7 (#rrggbb)", () => {
    const pal = generatePalette(123, 3);
    for (const c of pal) {
      expect(typeof c).toBe("string");
      expect(c).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });
});
