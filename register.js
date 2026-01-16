const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const command = new SlashCommandBuilder()
  .setName("welcome")
  .setDescription("Generate a welcome card");

const rest = new REST({ version: "10" })
  .setToken(process.env.TOKEN);

rest.put(
  Routes.applicationCommands("1461743846189695131"),
  { body: [command.toJSON()] }
).then(() => console.log("✅ Slash command registered"));
