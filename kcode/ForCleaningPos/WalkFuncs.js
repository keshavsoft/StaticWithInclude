const fs = require('fs-extra')
var path = require('path');

const posthtml = require('posthtml');
const include = require('posthtml-include');

var walk = function (dir, inFolderPath, inDestinationPath, inArrayHtml, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, inFolderPath, inDestinationPath, inArrayHtml, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, inFolderPath, inDestinationPath, inArrayHtml, function (err, inFolderPath, inDestinationPath, inArrayHtml, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

let CallBackFunc = (err, inFolderPath, inDestinationPath, inArrayHtml, results) => {
    if (err) throw err;

    results.forEach(element => {
        const html = fs.readFileSync(element);
        let LoopInsidePath = path.parse(element);

        if (LoopInsidePath.ext === ".html") {
            posthtml([include({ encoding: 'utf8' })])
                .process(html)
                .then((result) => {
                    if (fs.existsSync(element.replace(inFolderPath, inDestinationPath)) === false) {
                        fs.createFileSync(element.replace(inFolderPath, inDestinationPath));
                    };

                    // fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), result.html.replace("{{Branch}}", "Kakinada"));
                    fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), result.html.replace("{{BranchArray}}", inArrayHtml));

                });
        } else {
            fs.copySync(element, element.replace(inFolderPath, inDestinationPath));
        };
    });
};

module.exports = { walk, CallBackFunc };