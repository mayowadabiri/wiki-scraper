"use strict";

var axios = require("axios");

var _require = require("cheerio"),
    html = _require.html;

var url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

var $ = require("cheerio");

axios.get(url).then(function (data) {
  console.log($("b > a", data.data).length); // console.log($("b > a", data.data));
  // const wikiUrls = [];
  // for (let i = 0; i < $("b > a", data.data).length; i++) {
  //   wikiUrls.push($("big > a", html)[i].attribs.href);
  //   }
  //   console.log(wikiUrls)
})["catch"](function (error) {
  console.log(error);
});