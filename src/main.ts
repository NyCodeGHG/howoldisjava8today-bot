import { calculateAge, formatAgeText } from "./age.js";
import { createToot } from "./toot.js";
import { createTweet } from "./tweet.js";

const age = calculateAge();
const text = formatAgeText(age);
const [tweet, toot] = await Promise.allSettled([createTweet(text), createToot(text)]);

let failed = false;

if (tweet.status == "rejected") {
  console.log(`Tweet failed: ${tweet.reason}`);
  failed = true;
}
if (toot.status == "rejected") {
  console.log(`Toot failed: ${toot.reason}`);
  failed = true;
}

if (failed) {
  process.exit(1);
}
