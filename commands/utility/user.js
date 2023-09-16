const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about user'),
    async execute(interaction) {
        await interaction.reply(`Command run by ${interaction.user.username}, joined ${interaction.member.joinedAt}`)
    }
}