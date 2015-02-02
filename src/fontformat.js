goog.provide('ff.FontFormat');

goog.scope(function () {
  /**
   * @constructor
   */
  ff.FontFormat = function () {
    /**
     * @type {Promise.<!Array.<string>>}
     */
    this.font = null;
  };

  var FontFormat = ff.FontFormat;

  /**
   * Width is 3072 (3em).
   *
   * @const
   * @type {string}
   */
  FontFormat.WOFF2 = 'd09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAciuMTaGVo8IaqBbcKPeB3CyAAIO4unr9nb72QE3p00iGQQIZcAAcAMEJOztBx7zdWVWn//BAPW1l0BN429cPrCPE75MA637gPs0DjavNxzHtWeXXErKIV3AF9TbHqCTOATL2BgjeIH30lQwSAonU1LabV8Iz12wDvgd/obV5QVxXDKvUhW1QfWNrS6HzEQJaP4tBA==';

  /**
   * Width is 2048 (2em).
   *
   * @const
   * @type {string}
   */
  FontFormat.WOFF = 'd09GRgABAAAAAAHgAAoAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABUAAAABcAAABOBIQEIWNtYXAAAAFwAAAAJgAAACwADABzZ2x5ZgAAAaAAAAAUAAAAFAwBPQJoZWFkAAAA9AAAAC0AAAA2CHEB92hoZWEAAAEkAAAAFgAAACQMAQgDaG10eAAAAWgAAAAIAAAACAgAAABsb2NhAAABmAAAAAYAAAAGAAoAAG1heHAAAAE8AAAAEwAAACAABAACbmFtZQAAAbQAAAAeAAAAIAAjCF5wb3N0AAAB1AAAAAwAAAAgAAMAAHgBY2BkYABhb81vuvH8Nl8ZmFgYQOBCWvVrMP3VURxEczBAxBmYQAQAAFIIBgAAAHgBY2BkYGBhAAEOKAkUQQVMAAJKABkAAHgBY2BkYGBgAkIgjQ0AAAC+AAcAeAFjAIEUBkYGcoECgwILmAEiASBRAK4AAAAAAAgAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoQgvsP//xDy/0EwnwEATX4GfAAAAAAAAAAKAAAAAQAAAAAIAAQAAAEAADEBCAAEAHgBY2BgYGKQY2BmYGThZGAEshmgbCYw2wEABjMAigAAeAFjYGbACwAAfQAE';

  /**
   * Width is 1024 (1em).
   * @const
   * @type {string}
   */
  FontFormat.OPENTYPE = 'AAEAAAAKAIAAAwAgT1MvMgSEBCEAAAEoAAAATmNtYXAADABzAAABgAAAACxnbHlmCAE5AgAAAbQAAAAUaGVhZARxAiIAAACsAAAANmhoZWEIAQQDAAAA5AAAACRobXR4BAAAAAAAAXgAAAAIbG9jYQAKAAAAAAGsAAAABm1heHAABAACAAABCAAAACBuYW1lACMIXgAAAcgAAAAgcG9zdAADAAAAAAHoAAAAIAABAAAAAQAAayoF118PPPUAAgQAAAAAANBme+sAAAAA0PVBQgAAAAAEAAQAAAAAAAACAAAAAAAAAAEAAAQAAAAAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAACAAEAAAACAAIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAQAAAAAAAQAAAAAAAAAAAAEAAAAAAAAAQADAAEAAAAMAAQAIAAAAAQABAABAAAAQP//AAAAQP///8EAAQAAAAAAAAAAAAoAAAABAAAAAAQABAAAAQAAMQEEAAQAAAAAAgAeAAMAAQQJAAEAAgAAAAMAAQQJAAIAAgAAAEAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';

  /**
   * @return {Promise.<!Array.<string>>}
   */
  FontFormat.prototype.supports = function () {
    if (document['documentMode'] && document['documentMode'] < 9) {
      return Promise.resolve(['embedded-opentype']);
    }

    if (this.font === null) {
      var style = document.createElement('style');

      style.appendChild(document.createTextNode(
        '@font-face{' +
          'font-family:"__fff__";' +
          'src:' +
            'url(data:font/font-woff2;base64,' + FontFormat.WOFF2  +') format("woff2"),' +
            'url(data:application/font-woff;base64,' + FontFormat.WOFF + ') format("woff"),' +
            'url(data:font/opentype;base64,' + FontFormat.OPENTYPE + ') format("opentype");' +
        '}'
      ));

      document.head.appendChild(style);

      this.font = new FontFaceObserver('__fff__', {}).check('@').then(function () {
        var ruler = document.createElement('span'),
            formats = [];

        ruler.textContent = '@';
        ruler.style.cssText = 'font-family:__fff__;' +
                              'display:inline-block;' +
                              'position:absolute;' +
                              'visibility:hidden;' +
                              'margin:0;' +
                              'padding:0;' +
                              'top:0;' +
                              'whitespace:nowrap;' +
                              'max-height:10px;' +
                              'font-size:100px;';

        document.body.appendChild(ruler);

        var width = ruler.offsetWidth;

        if (width === 300) {
          formats = ['woff2', 'woff', 'opentype'];
        } else if (width === 200) {
          formats = ['woff', 'opentype'];
        } else if (width === 100) {
          formats = ['opentype'];
        }

        if (document['documentMode']) {
          formats.push('embedded-opentype');
        }

        return formats;
      });
    }

    return this.font;
  };
});
