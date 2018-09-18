var request = require('request');
var cheerio = require('cheerio');
var url = "https://alcohol-map.herokuapp.com/request";
let resultArr = [];

const read_html = request(url, (err,res,data) => {
  err? console.log(err):
  console.log('okay cheerio!');

  let $ = cheerio.load(data);
  let json = [], label, pubName, location
  $('body > div.container-fluid > div > table > tbody > tr').each(function(index, ele)
  {
    label = $(this).find('tr > th:nth-child(1) > span').text()
    pubName = $(this).find('tr > th:nth-child(2) > a').text()
    location = $(this).find('tr > th:nth-child(3) > a:nth-child(2)').attr('href');
    location = decodeURI(location);
    json.push({ "lable" : label, "pubName" : pubName, "location" : location })
  });

  console.log('json: ', json);

});
