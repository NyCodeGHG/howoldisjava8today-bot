import { config } from "dotenv";
import { z } from "zod";

config();

// Environment variable validation
const schema = z.object({
    TWITTER_APP_KEY: z.string(),
    TWITTER_APP_SECRET: z.string(),
    TWITTER_ACCESS_TOKEN: z.string(),
    TWITTER_ACCESS_TOKEN_SECRET: z.string(),
    MASTODON_ACCESS_TOKEN: z.string(),
    MASTODON_INSTANCE_URL: z.string(),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
    console.error(
        "Invalid environment variables:",
        JSON.stringify(parsed.error.format(), null, 4)
    );
    process.exit(1);
}

export const env = parsed.data;

