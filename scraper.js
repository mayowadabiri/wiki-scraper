const axios = require("axios");
const url =
  "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";
const $ = require("cheerio");

const potusParse = require("./potusscraper");

axios
  .get(url)
  .then((data) => {
    const links = $("td > b > a", data.data)
      .get()
      .map((x) => $(x).attr("href"));
    // return links;
    //   })
    //   .then((result) => {
    return Promise.all(
      links.map(async(url) => {
        return  await potusParse(`https://en.wikipedia.org${url}`);
         
      })
    );
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
