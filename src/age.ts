import { intervalToDuration } from "date-fns";

export type Age = { years: number; months: number; days: number };

export function calculateAge(now: number = Date.now()): Age {
  const java = 1395097200000;
  const { years, months, days } = intervalToDuration({
    start: java,
    end: now,
  });
  return {
    years: years ?? 0,
    months: months ?? 0,
    days: days ?? 0,
  };
}

export function formatAgeText(
  { years, months, days }: Age,
  today: Date = new Date()
): string {
  let prefix = "";
  // Check for new year
  if (today.getUTCMonth() == 0 && today.getUTCDate() == 1) {
    prefix = "Happy New Year! 🎉\n";
  }

  // Check for pride month
  if (today.getUTCMonth() == 5 && today.getUTCDate() == 1) {
    prefix = "Happy Pride Month! 🏳️‍🌈\n";
  }

  let text = prefix + "Java 8 is ";

  if (years > 0) {
    addPluralization("one year", "years", years);
  }
  if (months > 0) {
    if (years > 0) {
      addSeparator(days <= 0);
    }
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
