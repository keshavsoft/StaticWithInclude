const fs = require('fs-extra')
var path = require('path');

const posthtml = require('posthtml');
const include = require('posthtml-include');

var walk = function (dir, inFolderPath, inDestinationPath, inBranchName, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, inFolderPath, inDestinationPath, inBranchName, results);
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, inFolderPath, inDestinationPath, inBranchName, function (err, inFolderPath, inDestinationPath, inBranchName, res) {
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

let CallBackFunc = (err, inFolderPath, inDestinationPath, inBranchName, results) => {
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
                    fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), result.html.replace("{{Branch}}", inBranchName));
                });
        } else {
            if (LoopInsidePath.ext === ".json") {
                if (element.endsWith("\\ConfigKeys\\FetchKeys\\ForPostKeys.json")) {
                    let LoopInsideJson = JSON.parse(html);
                    LoopInsideJson.inFileNameOnly = inBranchName;
                    LoopInsideJson.inFileName = inBranchName;
                    fs.createFileSync(element.replace(inFolderPath, inDestinationPath));
                    fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), JSON.stringify(LoopInsideJson));
                } else {
                    if (element.endsWith("\\ApiConfig.json")) {
                        let LoopInsideJson = JSON.parse(html);
                        LoopInsideJson.ForFetch.FileNameOnly = inBranchName;
                        LoopInsideJson.ForFetch.JsonFileName = `${inBranchName}.json`;
                        LoopInsideJson.JsonFileName = `${inBranchName}.json`;
                        LoopInsideJson.JsonFileNameOnly = inBranchName;
                        LoopInsideJson.BranchName = inBranchName;
                        fs.createFileSync(element.replace(inFolderPath, inDestinationPath));
                        fs.writeFileSync(element.replace(inFolderPath, inDestinationPath), JSON.stringify(LoopInsideJson));
                    } else {
                        fs.copySync(element, element.replace(inFolderPath, inDestinationPath));
                    };
                };
            } else {
                fs.copySync(element, element.replace(inFolderPath, inDestinationPath));
            }
        };
    });
};

module.exports = { walk, CallBackFunc };