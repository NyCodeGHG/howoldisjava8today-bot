import { config } from "dotenv";
import { z } from "zod";

config();

// Environment variable validation
const schema = z.object({
  TWITTER_APP_KEY: z.string({
    required_error: "TWITTER_APP_KEY environment variable is required"
  }),
  TWITTER_APP_SECRET: z.string({
    required_error: "TWITTER_APP_KEY environment variable is required"
  }),
  TWITTER_ACCESS_TOKEN: z.string({
    required_error: "TWITTER_ACCESS_TOKEN environment variable is required"
  }),
  TWITTER_ACCESS_TOKEN_SECRET: z.string({
    required_error: "TWITTER_ACCESS_TOKEN_SECRET environment variable is required"
  }),
  MASTODON_ACCESS_TOKEN: z.string({
    required_error: "MASTODON_ACCESS_TOKEN environment variable is required"
  }),
  MASTODON_INSTANCE_URL: z.string({
    required_error: "MASTODON_INSTANCE_URL environment variable is required"
  }),
});

export const env = schema.parse(process.env);
