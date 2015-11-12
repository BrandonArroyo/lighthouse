var https = require('https');
var fs = require('fs');
var key ='b7ba8ae2cf6ddcb0e798a4f2bdf1f39e';
var keyg = '5704-72157622637971865';
function run(req,res){
https.get('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=e6f508bd69ecb08b073ec6ff8f15481f&gallery_id=5704-72157622637971865&format=json&nojsoncallback=1&auth_token=72157660871491831-22a4e1485f3f9e2c&api_sig=b60ac05ee2e3dc036c94a6d3088fa073', function(res){
    console.log("test");
    console.log(res.body);
    fs.appendFile('src/JSON_FILES/test.txt', res.body +"\n" , function (err) {
    if (err) return console.log(err);

    console.log(' output > test.txt');
});
}).on('error', function(e) {
  console.error(e);
});
}


module.exports.run = run;
