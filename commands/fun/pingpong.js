const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('replies with pong wow'),
    async execute(interaction) {
        await interaction.reply('Pong lmao')
    }
}