const axios = require("axios");
// const url = "https://en.wikipedia.org/wiki/George_Washington";

const $ = require("cheerio");

const potusParse = async (url) => {
  try {
    const result = await axios.get(url);
    const name = $("#firstHeading", result.data).text();
    const birthday = $(".bday", result.data).text();
    return {
      name,
      birthday,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = potusParse;
