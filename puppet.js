const axios = require("axios")
const url = "https://reddit.com"

axios.get(url).then(html => {
    console.log(html.data)
})