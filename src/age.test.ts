import { describe, expect, it } from "vitest";
import { calculateAge, formatAgeText } from "./age.js";

const date = new Date(2022, 4, 17);

describe("age", () => {
  it("should calculate the correct text", () => {
    expect(formatAgeText({ years: 2, months: 2, days: 2 }, date)).toBe(
      "Java 8 is 2 years, 2 months and 2 days old today"
    );
    expect(formatAgeText({ years: 1, months: 2, days: 2 }, date)).toBe(
      "Java 8 is one year, 2 months and 2 days old today"
    );
    expect(formatAgeText({ years: 0, months: 2, days: 2 }, date)).toBe(
      "Java 8 is 2 months and 2 days old today"
    );
    expect(formatAgeText({ years: 2, months: 0, days: 1 }, date)).toBe(
      "Java 8 is 2 years and one day old today"
    );
  });
  it("should show a special text on new years", () => {
    expect(
      formatAgeText(
        { years: 4, months: 2, days: 0 },
        new Date("2022-01-01T00:00:00+00:00")
      )
    ).toBe("Happy New Year! 🎉\nJava 8 is 4 years and 2 months old today");
  });
  it("should show a special text on pride month", () => {
    expect(
      formatAgeText(
        { years: 4, months: 2, days: 0 },
        new Date("2022-06-01T00:00:00+00:00")
      )
    ).toBe("Happy Pride Month! 🏳️‍🌈\nJava 8 is 4 years and 2 months old today");
  });
  it("should show the regular text on second day", () => {
    expect(
      formatAgeText(
        { years: 4, months: 2, days: 0 },
        new Date("2022-06-02T00:00:00+00:00")
      )
    ).toBe("Java 8 is 4 years and 2 months old today");
  });
  it("should calculate age correct", () => {
    expect(calculateAge(1667684420792)).toEqual({
      years: 8,
      months: 7,
      days: 18,
    });
  });
});
