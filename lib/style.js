var SVG = require("./draw.js")
var Filter = require("./filter.js")

var Style = (module.exports = {
  cssContent: `
    .sb-label {
      font-family: "Helvetica Neue", Helvetica, sans-serif;
      font-weight: normal;
      fill: #fff;
      font-size: 11px;
      word-spacing: 0px;
      opacity: 1;
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
      stroke-opacity: 0.15;
      stroke-alignment: inner;
    }
    .sb-input-round-dropdown,
    .sb-input-boolean {
      filter: url(#inputDarkFilter);
    }
    .sb-input {
      filter2: url(#inputBevelFilter);
      stroke: #000;
      stroke-opacity: 0.15;
      stroke-alignment: inner;
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
      font-size: 11px;
      word-spacing: 0;
    }
    .sb-literal-number,
    .sb-literal-string,
    .sb-literal-number-dropdown {
      fill: #000;
    }

    .sb-darker {
      filter2: url(#inputDarkFilter);
      stroke: #000;
      stroke-opacity: 0.1;
      stroke-alignment: inner;
    }
    .sb-desaturate {
      filter: url(#desaturateFilter);
    }

    .sb-outline {
      stroke: #000;
      stroke-opacity: 0.1;
      stroke-width: 1;
      fill: #FF4D6A;
    }

    .sb-define-hat-cap {
      stroke: #632d99;
      stroke-width: 1;
      fill: #8e2ec2;
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
      font-family: "Helvetica Neue", Helvetica, sans-serif;
      font-weight: bold;
      fill: #5c5d5f;
      word-spacing: 0;
      font-size: 12px;
    }

    .sb-diff {
      fill: none;
      stroke: #000;
    }
    .sb-diff-ins {
      stroke-width: 2px;
    }
    .sb-diff-del {
      stroke-width: 3px;
    }
  `.replace(/[ \n]+/, " "),

  makeIcons() {
    return [
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z",
            fill: "#45993d",
          }),
          SVG.el("path", {
            d:
              "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z",
            fill: "#4cbf56",
          }),
        ]),
        {
          id: "greenFlag",
          transform: "scale(0.65) translate(-8 4)", // TODO
        }
      ),
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
            fill: "#3d79cc",
          }),
          SVG.el("path", {
            d:
              "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
            fill: "#fff",
          }),
        ]),
        {
          id: "turnRight",
          transform: "scale(0.65) translate(-2 -5)", // TODO
        }
      ),
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
            fill: "#3d79cc",
          }),
          SVG.el("path", {
            d:
              "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
            fill: "#fff",
          }),
        ]),
        {
          id: "turnLeft",
          transform: "scale(0.65) translate(-2 -5)", // TODO
        }
      ),
      SVG.el("path", {
        d: "M0 0L4 4L0 8Z",
        fill: "#111",
        id: "addInput",
      }),
      SVG.el("path", {
        d: "M4 0L4 8L0 4Z",
        fill: "#111",
        id: "delInput",
      }),
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
            fill: "#cf8b17",
          }),
          SVG.el("path", {
            d:
              "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
            fill: "#fff",
          }),
        ]),
        {
          id: "loopArrow",
          transform: "scale(0.65) translate(-5 -20)", // TODO
        }
      ),
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
            fill: "#231f20",
            opacity: ".1",
          }),
          SVG.el("path", {
            d:
              "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
            fill: "#fff",
          }),
        ]),
        {
          id: "whiteDropdownArrow",
          transform: "scale(0.65)",
        }
      ),
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d:
              "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
            fill: "#231f20",
            opacity: ".1",
          }),
          SVG.el("path", {
            d:
              "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
            fill: "#111",
          }),
        ]),
        {
          id: "blackDropdownArrow",
          transform: "scale(0.65)",
        }
      ),
    ]
  },

  makeStyle() {
    var style = SVG.el("style")
    style.appendChild(SVG.cdata(Style.cssContent))
    return style
  },

  bevelFilter(id, inset) {
    var f = new Filter(id)

    var alpha = "SourceAlpha"
    var s = inset ? -1 : 1
    var blur = f.blur(1, alpha)

    f.merge([
      "SourceGraphic",
      f.comp(
        "in",
        f.flood("#fff", 0.15),
        f.subtract(alpha, f.offset(+s, +s, blur))
      ),
      f.comp(
        "in",
        f.flood("#0f0", 0.7),
        f.subtract(alpha, f.offset(-s, -s, blur))
      ),
    ])

    return f.el
  },

  darkFilter(id) {
    var f = new Filter(id)

    f.merge([
      "SourceGraphic",
      f.comp("in", f.flood("#000", 0.2), "SourceAlpha"),
    ])

    return f.el
  },

  desaturateFilter(id) {
    var f = new Filter(id)

    var q = 0.333
    var s = 0.333
    f.colorMatrix("SourceGraphic", [
      q,
      s,
      s,
      0,
      0,
      s,
      q,
      s,
      0,
      0,
      s,
      s,
      q,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
    ])

    return f.el
  },

  darkRect(w, h, category, el) {
    return SVG.setProps(
      SVG.group([
        SVG.setProps(el, {
          class: ["sb-" + category, "sb-darker"].join(" "),
        }),
      ]),
      { width: w, height: h }
    )
  },

  defaultFontFamily: "'Helvetica Neue', Helvetica, sans-serif",
})
