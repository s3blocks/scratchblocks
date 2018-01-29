var SVG = require('./draw.js');
var Filter = require('./filter.js');

var Style = module.exports = {
  cssContent: `
    .sb-label {
      font-family: "Helvetica Neue", Helvetica, sans-serif;
      opacity: 0.9;
      fill: #fff;
      font-size: 11px;
      padding: 2px;
      letter-spacing: 0px;
      vertical-align: inherit;
    }

    .sb-obsolete { fill: #d42828; }
    .sb-motion { fill: #4C97FF; }
    .sb-looks { fill: #9966FF; }
    .sb-sound { fill: #CF63CF; }
    .sb-pen { fill: #0fBD8C;  }
    .sb-events { fill: #FFBF00; }
    .sb-control { fill: #FFAB19; }
    .sb-sensing { fill: #5CB1D6; }
    .sb-operators { fill: #59C059; }
    .sb-variables { fill: #FF8C1A; }
    .sb-list { fill: #FF661A }
    .sb-custom { fill: #FF6680; }
    .sb-custom-arg { fill: #FF6680; }
    .sb-extension { fill: #4b4a60; }
    .sb-grey { fill: #969696; }

    .sb-bevel {
      filter2: url(#bevelFilter);
      stroke: #000;
      stroke-opacity: 0.2;
      stroke-alignment: inner;
    }

    .sb-input {
      filter2: url(#inputBevelFilter);
      fill: #000;
      fill-opacity: 1;
      stroke: #000;
      stroke-opacity: 0.1;
    }
    .sb-input-number,
    .sb-input-string,
    .sb-input-number-dropdown {
      fill: #fff;
    }
    .sb-literal-number,
    .sb-literal-string,
    .sb-literal-number-dropdown,
    .sb-literal-dropdown {
      font-weight: normal;
      font-size: 10px;
      letter-spacing: 0px;
      word-spacing: 0;
      text-opacity: 0.9;
    }
    .sb-literal-number,
    .sb-literal-string,
    .sb-literal-number-dropdown {
      fill: #000;
    }

    .sb-darker {
      filter: url(#inputDarkFilter);
    }

    .sb-outline {
      stroke: #fff;
      stroke-opacity: 0;
      stroke-width: 2;
      fill: #FF4D6A;
    }

    .sb-define-hat-cap {
      stroke: #632d99;
      stroke-width: 2;
      fill: #8e2ec200;
      display: none;
    }

    .sb-comment {
      fill: #ffffa5;
      stroke: #d0d1d2;
      stroke-width: 1;
    }
    .sb-comment-line {
      fill: #ffff80;
    }
    .sb-comment-label {
      font-family: Helevetica, Arial, DejaVu Sans, sans-serif;
      font-weight: bold;
      fill: #5c5d5f;
      word-spacing: 0;
      font-size: 12px;
      letter-spacing: 0px;
    }
  `.replace(/[ \n]+/, ' '),

  makeIcons() {
    return [
      SVG.el('path', {
        d: "M20.6,4.8l-0.1,9.1c0,0,0,0.1,0,0.1c-2.5,2-6.1,2-8.6,0c-1.1-0.9-2.5-1.4-4-1.4c-1.2,0.1-2.3,0.5-3.4,1.1V4 C7,2.6,10,2.9,12.2,4.6c2.4,1.9,5.7,1.9,8.1,0c0.1,0,0.1,0,0.2,0C20.5,4.7,20.6,4.7,20.6,4.8z",
        fill: '#4cbf56',
        stroke: '#45993d',
        id: 'greenFlag',
      }),
      SVG.el('path', {
        d: "M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z",
        fill: '#fff',
        id: 'turnRight',
      }),
      SVG.el('path', {
        d: "M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z",
        fill: '#fff',
        id: 'turnLeft',
      }),
      SVG.el('path', {
        d: "M0 0L4 4L0 8Z",
        fill: '#111',
        id: 'addInput',
      }),
      SVG.el('path', {
        d: "M4 0L4 8L0 4Z",
        fill: '#111',
        id: 'delInput',
      }),
      SVG.setProps(SVG.group([
        SVG.el('path', {
          d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
          fill: '#000',
          opacity: '0.3',
        }),
        SVG.move(-1, -1, SVG.el('path', {
          d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
          fill: '#fff',
          opacity: '0.9',
        })),
      ]), {
        id: 'loopArrow',
      }),
    ];
  },

  makeStyle() {
    var style = SVG.el('style');
    style.appendChild(SVG.cdata(Style.cssContent));
    return style;
  },

  bevelFilter(id, inset) {
    var f = new Filter(id);

    var alpha = 'SourceAlpha';
    var s = inset ? -1 : 1;
    var blur = f.blur(1, alpha);

    f.merge([
      'SourceGraphic',
      f.comp('in',
           f.flood('#fff', 0.15),
           f.subtract(alpha, f.offset(+s, +s, blur))
      ),
      f.comp('in',
           f.flood('#000', 0.7),
           f.subtract(alpha, f.offset(-s, -s, blur))
      ),
    ]);

    return f.el;
  },

  darkFilter(id) {
    var f = new Filter(id);

    f.merge([
      'SourceGraphic',
      f.comp('in',
        f.flood('#000', 0.2),
        'SourceAlpha'),
    ]);

    return f.el;
  },

  darkRect(w, h, category, el) {
    return SVG.setProps(SVG.group([
      SVG.setProps(el, {
        class: ['sb-'+category, 'sb-darker'].join(' '),
      })
    ]), { width: w, height: h });
  },

  defaultFontFamily: 'Lucida Grande, Verdana, Arial, DejaVu Sans, sans-serif',

};
