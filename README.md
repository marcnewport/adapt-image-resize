# adapt-image-resize
npm cli to resize images in a directory to the standard [Adapt framework](https://github.com/adaptlearning/adapt_framework) sizes

## Installation

Install [ImageMagick](https://www.imagemagick.org/script/binary-releases.php) on your machine. Make sure it has been added to your system PATH as we will be using mogrify to do the hard work.

```
npm install adapt-image-resize -g
```

## Usage
cd into the directory you want to resize all images in, and run either:


```
adapt-image-resize
```
This will copy all images to new sub-directories, and resize to basic Adapt widths (heights will stay in proportion)
* menu: 420
* narrow: 660
* wide: 900


test


```
adapt-image-resize --crop
```
This will copy all images to new sub-directories, resize, centre, and crop to the standard Adapt sizes
* accordion_full_width: 860x180
* full_width: 900x400
* gmcq_option: 700x700
* menu_thumb: 420x180
* single_width: 700x600
* single_width_small: 700x408
