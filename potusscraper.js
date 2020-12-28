const axios = require("axios");
// const url = "https://en.wikipedia.org/wiki/George_Washington";

const $ = require("cheerio");

const potusParse = async (url) => {
  console.log(url);
  await axios
    .get(url)
    .then((result) => {
      console.log($("#firstHeading", result.data).text());
      return {
        name: $("#firstHeading", result.data).text(),
        birthday: $(".bday", result.data).text(),
      };
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = potusParse;
