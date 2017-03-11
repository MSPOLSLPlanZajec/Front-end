var path = require('path');
var fs = require('fs');

var CopyAssets = function ({ scripts, styles }) {
    this.scripts = scripts || [];
    this.styles = styles || [];
};

CopyAssets.prototype.apply = function (compiler) {
    var assets = this.scripts.concat(this.styles);

    var createDirectory = function (filePath) {
        var dirname = path.dirname(filePath);

        if (fs.existsSync(dirname)) {
            return;
        }

        createDirectory(dirname);
        fs.mkdirSync(dirname);
    }

    compiler.plugin('done', () => {
        for (var asset of assets) {
            var entry = path.join(compiler.context, `./src/${asset}`);
            var output = path.join(compiler.context, `./dist/${asset}`);

            createDirectory(output);

            fs.createReadStream(entry).pipe(fs.createWriteStream(output));
        }
    });
};

module.exports = CopyAssets;