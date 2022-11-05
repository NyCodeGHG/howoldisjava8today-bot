import { intervalToDuration } from "date-fns";

type Age = { years: number; months: number; days: number };

export function calculateAge(): Age {
  const now = Date.now();
  const java = 1395097200000;
  const { years, months, days } = intervalToDuration({
    start: java,
    end: now,
  });
  return {
    years: years ?? 0,
    months: months ?? 0,
    days: days ?? 0,
  }
}

export function formatAgeText(
  { years, months, days }: Age,
): string {
  let text = "Java 8 is ";

  if (years > 0) {
    addPluralization("one year", "years", years);
  }
  if (months > 0) {
    addSeparator(days <= 0);
    addPluralization("one month", "months", months);
  }
  if (days > 0) {
    addSeparator(true);
    addPluralization("one day", "days", days);
  }

  text += " old today";

  function addSeparator(last = false) {
    if (last) {
      text += " and ";
    } else {
      text += ", ";
    }
  }

  function addPluralization(singular: string, plural: string, count: number) {
    if (count > 1) {
      text += `${count} ${plural}`;
    } else {
      text += singular;
    }
  }

  return text;
}
