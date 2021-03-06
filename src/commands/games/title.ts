import CommandInt from "@Interfaces/CommandInt";
import WordInt from "@Interfaces/commands/WordInt";
import axios from "axios";

const title: CommandInt = {
  name: "title",
  description: "Generates a title for you.",
  run: async (message) => {
    const { author, channel } = message;

    // Get the occupation from the noops challenge API.
    const occupation = (
      await axios.get<WordInt>(
        "https://api.noopschallenge.com/wordbot?set=occupations"
      )
    ).data.words[0];

    // Get the adjective from the noops challenge API.
    const adjective = (
      await axios.get<WordInt>(
        "https://api.noopschallenge.com/wordbot?set=adjectives"
      )
    ).data.words[0];

    // Get the mood from the noops challenge API.
    const mood = (
      await axios.get<WordInt>(
        "https://api.noopschallenge.com/wordbot?set=moods"
      )
    ).data.words[0];

    // Get the noun from the noops challenge API.
    const noun = (
      await axios.get<WordInt>(
        "https://api.noopschallenge.com/wordbot?set=nouns"
      )
    ).data.words[0];

    // Send the message to the current channel.
    await channel.send(
      `Presenting ${author.toString()}, the ${mood} ${occupation} of ${adjective} ${noun}!`
    );
  },
};

export default title;
