# PostCSS Pseudo Class Any Link [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![CSS Standard Status][css-img]][css-url]
[![Build Status][cli-img]][cli-url]
[<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]

[PostCSS Pseudo Class Any Link] lets you `:any-link` pseudo-class in CSS,
following the [Selectors] specification.

```pcss
nav :any-link > span {
  background-color: yellow;
}

/* becomes */

nav :link > span, nav :visited > span {
  background-color: yellow;
}

nav :any-link > span {
  background-color: yellow;
}
```

From the [proposal][Selectors]:

> The `:any-link` pseudo-class represents an element that acts as the source
  anchor of a hyperlink. It matches an element if the element would match
  `:link` or `:visited`.

[!['Can I use' table](https://caniuse.bitsofco.de/image/css-any-link.png)](https://caniuse.com/#feat=css-any-link)

## Usage

Add [PostCSS Pseudo Class Any Link] to your project:

```bash
npm install postcss postcss-pseudo-class-any-link --save-dev
```

Use [PostCSS Pseudo Class Any Link] as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssPseudoClassAnyLink = require('postcss-pseudo-class-any-link');

postcss([
  postcssPseudoClassAnyLink(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Pseudo Class Any Link] runs in all Node environments, with special
instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- |

## Options

### preserve

The `preserve` option determines whether the original `:any-link` rule is
preserved. By default, it is preserved.

```js
postcssPseudoClassAnyLink({ preserve: false })
```

```pcss
nav :any-link > span {
  background-color: yellow;
}

/* becomes */

nav :link > span, nav :visited > span {
  background-color: yellow;
}
```

### subFeatures

#### areaHrefNeedsFixing

The `subFeatures.areaHrefNeedsFixing` option determines if `<area href>` elements should match `:any-link` pseudo-class.<br>
In IE and Edge these do not match `:link` or `:visited`.

_This increased CSS bundle size and is disabled by default._

```js
postcssPseudoClassAnyLink({
  subFeatures: {
    areaHrefNeedsFixing: true
  }
})
```

```pcss
nav :any-link > span {
  background-color: yellow;
}

/* becomes */

nav :link > span, nav :visited > span, area[href] > span {
  background-color: yellow;
}
```

[cli-img]: https://github.com/csstools/postcss-plugins/workflows/test/badge.svg
[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[css-img]: https://cssdb.org/images/badges/any-link-pseudo-class.svg
[css-url]: https://cssdb.org/#any-link-pseudo-class
[discord]: https://discord.gg/bUadyRwkJS
[npm-img]: https://img.shields.io/npm/v/postcss-pseudo-class-any-link.svg
[npm-url]: https://www.npmjs.com/package/postcss-pseudo-class-any-link

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Pseudo Class Any Link]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-pseudo-class-any-link
[Selectors]: https://www.w3.org/TR/selectors-4/#the-any-link-pseudo
