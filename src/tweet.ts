import { TwitterApi } from "twitter-api-v2";
import { env } from "./env.js";

const twitterClient = new TwitterApi({
  appKey: env.TWITTER_APP_KEY,
  appSecret: env.TWITTER_APP_SECRET,
  accessToken: env.TWITTER_ACCESS_TOKEN,
  accessSecret: env.TWITTER_ACCESS_TOKEN_SECRET,
});

export async function createTweet(text: string) {
  const user = await twitterClient.currentUser();
  const tweet = await twitterClient.v1.tweet(text);
  console.log(
    `Created a new Tweet: https://twitter.com/${user.screen_name}/status/${tweet.id_str}`
  );
}
