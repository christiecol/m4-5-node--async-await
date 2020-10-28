const request = require("request-promise");

const getDadJoke = async () => {
  const options = {
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
    json: true,
  };

  try {
    const response = await request(options);
    return response.joke;
  } catch (err) {
    console.log(err);
  }
};
// console.log(request);

// getDadJoke

// 4.1
getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
