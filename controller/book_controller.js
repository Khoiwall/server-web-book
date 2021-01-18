// lay du lieu
var listBook = require('../database/data_book.js')

//ham logic

module.exports.apiHotBook = async function(req,res){
    var callListBook = await listBook.find();
    var max, tmp;
    var tmp_listBook = [];
    for (var i = 0; i < callListBook.length; i++){
        max = i;
        for (var j = i+1; j < callListBook.length; j++){
            if(callListBook[j].sold > callListBook[max].sold){
                max = j;
            }
        }
        tmp = callListBook[i];
        callListBook[i] = callListBook[max];
        callListBook[max] = tmp;
    }
    for (var k = 0; k < 7; k++){
        tmp_listBook.push(callListBook[k]);
    }
    res.json(tmp_listBook);
}

module.exports.apiSale = async function(req,res){
    var callListBook = await listBook.find();
    var bookSale = [];
    for (var i = 0; i < callListBook.length; i++){
        if (callListBook[i].sale === true){
            bookSale.push(callListBook[i]);
        }
    }
    res.json(bookSale);
}