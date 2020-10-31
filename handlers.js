// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
// const dadJoke = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
// const tronaldDump = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");
// const geekJoke = require("./__workshop/exercise-4.3");

const handleJoke = async (req, res) => {
  const { type } = req.params;

  switch (type) {
    case "dad":
      res.status(200).send(await getDadJoke());
      break;
    case "tronald":
      res.status(200).send(await getTronaldDumpQuote());
      break;
    case "geek":
      res.status(200).send(await getGeekJoke());
      break;
    default:
      res.status(400).send({ message: "unrecognizable joke type" });
  }
};

module.exports = { handleJoke };
