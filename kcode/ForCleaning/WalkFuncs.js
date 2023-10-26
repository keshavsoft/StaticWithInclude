const fs = require('fs-extra')
var path = require('path');

const posthtml = require('posthtml');
const include = require('posthtml-include');

let CommonBranchesArray = require("./Branches.json");
let LocalArrayHtml = CommonBranchesArray.map(element => {
    return `<option value="${element}">${element}</option>`
});

let CommonArrayHtml = LocalArrayHtml.toString().replaceAll(",", "\n");

var walk = function (dir, inFolderPath, inDestinationPath, inArrayHtml, inFactoryHtml, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, inFolderPath, inDestinationPath, inArrayHtml, inFactoryHtml, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, inFolderPath, inDestinationPath, inArrayHtml, inFactoryHtml, function (err, inFolderPath, inDestinationPath, inArrayHtml, inFactoryHtml, res) {
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

let CallBackFunc = (err, inFolderPath, inDestinationPath, inArrayHtml, inFactoryHtml, results) => {
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

                    let LoopInideResult = result.html.replace("{{BranchArray}}", CommonArrayHtml);
                    LoopInideResult = LoopInideResult.replace("{{FactoryArray}}", inFactoryHtml);

                    fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), LoopInideResult);

                    // fs.writeFileSync();

                    // fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), result.html.replace("{{FactoryArray}}", inFactoryHtml));
                });
        } else {
            fs.copySync(element, element.replace(inFolderPath, inDestinationPath));
        };
    });
};

module.exports = { walk, CallBackFunc };