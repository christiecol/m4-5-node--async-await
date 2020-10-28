const { get } = require("request-promise");
const request = require("request-promise");

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const options = {
      url: "https://geek-jokes.sameerkumar.website/api?format=json",
      method: "GET",
      json: true,
    };

    const result = await request(options);
    console.log(result.joke);
  } catch (err) {
    console.log(err);
  }
};

getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
