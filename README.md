# Font Format Feature Detection

This library detects support for @font-face font formats without resorting to user agent sniffing. To do this efficiently, it makes the following assumptions:

* All browsers support OpenType fonts (except IE6-8).
* All browsers that support WOFF2 support WOFF.
* All browsers that support WOFF support OpenType.

# Usage

    var fontformat = new FontFormat();

    fontformat.supports().then(function (formats) {
      // formats = ['opentype', 'woff', 'woff2']
    });

# License

FontFormat is licensed under the BSD License. Copyright 2015 Bram Stein. All rights reserved.
