const fs = require('fs');
const StatMode = require('stat-mode');
const colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
    const statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});

fs.readdir('./', 'utf-8', function(err, data) {
    if (err) throw err;
    fs.writeFile('./folder.txt', data, function(err) {
        if (err) throw err;
    });
});