#! /usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');

var isWindows = process.platform === 'win32';
var doCrop = process.argv[2] === '--crop';

// Basic default sizes
var sizes = {
  "menu": "420",
  "narrow": "600",
  "wide": "900"
};

// Cropped default sizes
if (doCrop) {
  sizes = {
    "accordion_full_width": "860x180",
    "full_width": "900x400",
    "gmcq_option": "700x700",
    "menu_thumb": "420x180",
    "single_width": "700x600",
    "single_width_small": "700x408"
  };
}


// cmd for thumbnails (need to unescape caret with caret in windows)
// exec('mogrify -resize 100x100^^ -gravity center -extent 100x100 -quality 100 -path src/assets/thumbs src/assets/*');

// Run the mogrify command for each size
for (var name in sizes) {

  var size = sizes[name];
  var path = './'+ name;
  var cmd = 'mogrify -resize '+ size +' -path '+ path +' ./*';

  if (doCrop) {
    // Need to unescape caret with caret on windows
    var modifier = isWindows ? '^^' : '^';

    cmd = 'mogrify -resize '+ size + modifier +' -gravity center -extent '+ size +' -path '+ path +' ./*';
  }

  // Create the directories
  if (! fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
  });
}
