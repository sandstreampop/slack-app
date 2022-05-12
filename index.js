const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  // Start your app
  await app.start({ port: process.env.PORT || 8080, host: "0.0.0.0" });

  console.log("⚡️ Bolt app is running!");

  app.event();
})();
