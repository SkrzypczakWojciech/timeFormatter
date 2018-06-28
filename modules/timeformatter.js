var os = require('os');
function timeformatter() {
process.stdin.setEncoding('utf-8');
process.stdout.write('Podaj liczbe sekund' + '\n')
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        process.stdout.write('Minuty : ' + input / 60 + '\n')
        process.stdout.write('Godziny :' + input / 3600 + '\n')
       };
    });
}
exports.print = timeformatter;