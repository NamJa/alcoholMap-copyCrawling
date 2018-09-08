var request = require('request');
var cheerio = require('cheerio');
var url = "https://alcohol-map.herokuapp.com/request";
let resultArr = [];

const read_html = request(url, (err,res,data) => {
  err? console.log(err):
  console.log('okay cheerio!');

  let $ = cheerio.load(data);
  let json = [], label, pubName
  $('body > div.container-fluid > div > table > tbody > tr').each(function(index, ele){
    label = $(this).find('tr > th:nth-child(1) > span').text()
    pubName = $(this).find('tr > th:nth-child(2) > a').text()
    json.push({lable: label, pubName: pubName})
  });

  console.log('json: ', json);

});
