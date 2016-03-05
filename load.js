var fs = require('fs');
var Firebase = require('firebase');
var firebase = new Firebase(process.env.FIREBASE_URL);

var modules = require('./routes/modules/modules.file');
var schools = require('./routes/schools/schools.file');

function readFile(file){
    var filepath = __dirname + '/' + file;
    return fs.readFileSync(filepath, 'utf8');
}

var csv = readFile('students.csv');
students = csv.split('\r\n');
console.log(modules);
console.log(schools);
// console.log(students);
var data = {};
for (var i = 0; i < students.length; i++) {
    var info = students[i].split(',');
    var first = info[0];
    var last = info[1];
    var email = info[2];
    var github = info[3];
    data[github] = {
        info: {
            first: first,
            last: last,
            email: email,
            github: github
        },
        modules: modules,
        schools: schools
    }
}
firebase.child('students').set(data);
