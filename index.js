const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "welcome") {
    const user = interaction.user;

    const cardURL =
      `https://www.movanest.xyz/v2/welcomecard` +
      `?background=https://minimalistic-wallpaper.demolab.com/?random` +
      `&text1=${encodeURIComponent(user.username)}` +
      `&text2=Welcome%20to%20the%20Server!` +
      `&text3=` +
      `&avatar=${encodeURIComponent(
        user.displayAvatarURL({ extension: "png", size: 512 })
      )}`;

    await interaction.reply({ files: [cardURL] });
  }
});

client.login(process.env.TOKEN);
