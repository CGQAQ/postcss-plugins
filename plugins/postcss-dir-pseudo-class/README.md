# PostCSS Dir Pseudo Class [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![CSS Standard Status][css-img]][css-url]
[![Build Status][cli-img]][cli-url]
[<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]

[PostCSS Dir Pseudo Class] lets you style by directionality using the `:dir()`
pseudo-class in CSS, following the [Selectors] specification.

[!['Can I use' table](https://caniuse.bitsofco.de/image/css-dir-pseudo.png)](https://caniuse.com/#feat=css-dir-pseudo)

```pcss
article h3:dir(rtl) {
  margin-right: 10px;
}

article h3:dir(ltr) {
  margin-left: 10px;
}

/* becomes */

[dir="rtl"] article h3 {
  margin-right: 10px;
}

[dir="ltr"] article h3 {
  margin-left: 10px;
}
```

### Maintaining Specificity

Using [PostCSS Dir Pseudo Class] will not impact selector weight, but it will
require having at least one `[dir]` attribute in your HTML. If you don’t have
_any_ `[dir]` attributes, consider using the following JavaScript:

```js
// force at least one dir attribute (this can run at any time)
document.documentElement.dir=document.documentElement.dir||'ltr';
```

If you absolutely cannot add a `[dir]` attribute in your HTML or even force one
via JavaScript, you can still work around this by presuming a direction in your
CSS using the [`dir` option](#dir-option), but understand that this will
sometimes increase selector weight by one element (`html`).

## Usage

Add [PostCSS Dir Pseudo Class] to your project:

```bash
npm install postcss-dir-pseudo-class --save-dev
```

Use [PostCSS Dir Pseudo Class] to process your CSS:

```js
const postcssDirPseudoClass = require('postcss-dir-pseudo-class');

postcssDirPseudoClass.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssDirPseudoClass = require('postcss-dir-pseudo-class');

postcss([
  postcssDirPseudoClass(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Dir Pseudo Class] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- |

## Options

### dir

The `dir` option allows you presume a direction in your CSS. By default, this
is not specified and you are required to include a direction `[dir]` attribute
somewhere in your HTML, preferably on the `html` element.

Here’s an example of using the `dir` option to presume a left-to-right
direction:

```js
postcssDirPseudoClass({ dir: 'ltr' });
```

```pcss
.example:dir(ltr) {
  margin-left: 10px;
}

.example:dir(rtl) {
  margin-right: 10px;
}

/* becomes */

html:not([dir="rtl"]) .example {
  margin-left: 10px;
}

[dir="rtl"] .example {
  margin-right: 10px;
}
```

### preserve

The `preserve` option determines whether the original `:dir()` rule should
remain in the CSS. By default, the original rule is not preserved.

```js
postcssDirPseudoClass({ preserve: true });
```

```pcss
article h3:dir(rtl) {
  margin-right: 10px;
}

article h3:dir(ltr) {
  margin-left: 10px;
}

/* becomes */

[dir="rtl"] article h3 {
  margin-right: 10px;
}

article h3:dir(rtl) {
  margin-right: 10px;
}

[dir="ltr"] article h3 {
  margin-left: 10px;
}

article h3:dir(ltr) {
  margin-left: 10px;
}
```

[cli-img]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml/badge.svg
[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[css-img]: https://cssdb.org/images/badges/dir-pseudo-class.svg
[css-url]: https://cssdb.org/#dir-pseudo-class
[discord]: https://discord.gg/bUadyRwkJS
[npm-img]: https://img.shields.io/npm/v/postcss-dir-pseudo-class.svg
[npm-url]: https://www.npmjs.com/package/postcss-dir-pseudo-class

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Dir Pseudo Class]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-dir-pseudo-class
[Selectors]: https://www.w3.org/TR/selectors-4/#the-dir-pseudo
