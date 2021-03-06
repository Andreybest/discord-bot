import CommandInt from "@Interfaces/CommandInt";
import { MessageEmbed } from "discord.js";

/**
 * See the bot information.
 * @constant
 */
const about: CommandInt = {
  name: "about",
  description: "Provides details about the bot.",
  run: async (message) => {
    // Get the bot client and the current channel from the message.
    const { bot, channel } = message;

    // Get the commands and the version of the bot.
    const { color, commands, guilds, users, version } = bot;

    // Create a new empty embed.
    const aboutEmbed = new MessageEmbed();

    // Add light purple color.
    aboutEmbed.setColor(color);

    // Add the title.
    aboutEmbed.setTitle("Greetings! My name is nhbot!");

    // Add the description.
    aboutEmbed.setDescription(
      "I am a discord bot created by [nhcarrigan](https://www.nhcarrigan.com), with help from a few contributors.  You can view my [source code and contributor list](https://github.com/nhcarrigan/discord-bot) online.\r\n" +
        "\r\nView the [official repository](https://github.com/nhcarrigan/discord-bot) or you can join to the [official Discord server](https://discord.gg/PHqDbkg)."
    );

    // Add the bot version.
    aboutEmbed.addField("Version", version, true);

    // Add the bot creation date.
    aboutEmbed.addField("Creation date", "Sun May 31 2020", true);

    // Add the bot servers count.
    aboutEmbed.addField("Servers", guilds.cache.size, true);

    // Add the bot users count.
    aboutEmbed.addField("Users", users.cache.size, true);

    // Add the available commands length.
    aboutEmbed.addField(
      "Available commands",
      `${new Set(Object.values(commands)).size} 🙃`,
      true
    );

    // Add the favourite color.
    aboutEmbed.addField("Favourite color", "PURPLE! 💜", true);

    // Add the footer.
    aboutEmbed.setFooter("It is nice to meet you!");

    // Add the current timestamp.
    aboutEmbed.setTimestamp();

    // Send the embed to the current channel.
    await channel.send(aboutEmbed);
  },
};

export default about;
