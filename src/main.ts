import { config } from "dotenv";
import { createTweet } from "./tweet.js";

// Load .env file
config();

await createTweet();
