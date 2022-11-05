import { TwitterApi } from "twitter-api-v2";
import { calculateAge, formatAgeText } from "./age.js";

export async function createTweet() {
  const age = calculateAge();
  const text = formatAgeText(age);
  console.log(text);

  const twitterClient = new TwitterApi({
    appKey: getEnvVar("TWITTER_APP_KEY"),
    appSecret: getEnvVar("TWITTER_APP_SECRET"),
    accessToken: getEnvVar("TWITTER_ACCESS_TOKEN"),
    accessSecret: getEnvVar("TWITTER_ACCESS_TOKEN_SECRET"),
  });

  const user = await twitterClient.currentUser();
  console.log(`Logged in as ${user.name}`);

  const tweet = await twitterClient.v1.tweet(text);
  console.log(`Created a new Tweet: https://twitter.com/${user.screen_name}/status/${tweet.id_str}`);
  function getEnvVar(name: string): string {
    const variable = process.env[name]
    if (!variable) {
      throw `${variable} is not set!`;
    }
    return variable;
  }
}
