import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import windi from "lume/plugins/windi_css.ts";
import metas from "lume/plugins/metas.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography"

const site = lume();

site.use(date());

// https://highlightjs.org/static/demo/ for themes
// to use, import from cdn
site.use(codeHighlight({
  options: {
    classPrefix: "syntax-",
  },
}));

// see https://lume.land/plugins/metas/
site.use(metas());

// keep in this order! see https://lume.land/plugins/tailwindcss/
site.use(tailwindcss({
  options: {
    plugins: [typography],
    fontFamily: {
      pixeloperator: ["Pixel Operator", "sans-serif"]
    }
  }
}));
site.use(postcss());


export default site;
