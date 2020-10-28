const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  // write write write
  try {
    const options = {
      uri: "https://api.tronalddump.io/random/quote",
      headers: { Accept: "application/json" },
      json: true,
    };
    const response = await request(options);
    return response.value;
  } catch (err) {
    console.log(err);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
