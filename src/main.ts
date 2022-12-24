import { calculateAge, formatAgeText } from "./age.js";
import { createToot } from "./toot.js";
import { createTweet } from "./tweet.js";

const age = calculateAge();
const text = formatAgeText(age);
await Promise.allSettled([createTweet(text), createToot(text)]);
