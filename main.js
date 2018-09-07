var request = require('request');
var cheerio = require('cheerio');
var url = "https://alcohol-map.herokuapp.com/request";
let resultArr = [];

const read_html = request(url, (err,res,data) => {
  err? console.log(err):
  console.log('okay cheerio!');

  let $ = cheerio.load(data);
  let class_a = $('th', $('.panel.panel-default'));
  
  class_a.each(function(){
    console.log($(this).text());
  })

});
