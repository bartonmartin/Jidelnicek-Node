var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next){
	var data = {
		message: 'Hellwwo World!',
		title: 'asweq'
	}

	res.send(data);
});


router.get('/jidelnicek', function(req, res, next){
    // Run some jQuery on a html fragment
    var jsdom = require("jsdom");
   
    var pondeli = new Day();
    
    jsdom.env(
      "http://www.oavm.cz/skolni-jidelna/",["http://code.jquery.com/jquery.js"],
      function (err, window) {
        
        var rows = window.$("table.jidelnicek")[0].rows;
        
        for (var i = 0; i < rows.length; i++) {
            
            var last = rows[i];
            
            for (var e = 0; e < last.cells.length; e++) {
                  var cell = last.cells[e];
                  var value = cell.innerHTML
                  
                  console.log("value", value);
            }
        }
        
        res.send("success");
        
        // console.log("pondeli.title", window.$("table.jidelnicek").text());
        // console.log("pondeli.soup", window.$("td.popis").text());
        // console.log("pondeli.alergens", window.$("table.jildenicek").text());
      }
    );
});

var Day = function(){
        this.title;
        this.soup;
        this.alergens;    
};


module.exports = router;
