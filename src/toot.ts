import { login } from "masto";
import { env } from "./env.js";

const accessToken = env.MASTODON_ACCESS_TOKEN;
const instanceUrl = env.MASTODON_INSTANCE_URL;

export async function createToot(text: string) {
    const masto = await login({
        url: instanceUrl,
        accessToken,
    });
    const toot = await masto.statuses.create({
        status: text,
        visibility: "public",
    });
    console.log("Created a new Toot: ", toot.uri);
}

