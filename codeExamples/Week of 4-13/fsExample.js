const fs = require('fs');


fs.readdir('C:\\Users\\egonzal5\\Documents\\4-13Class Examples\\pathExample.js', function (err, files){
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }


});


fs.appendFile('C:\\Users\\egonzal5\\Documents\\4-13Class Examples\\pathExample.js', 'console.log(\'HI!\')', function(err){
    if(err){
        console.log('File didn\'t work yo');
    }
    
});