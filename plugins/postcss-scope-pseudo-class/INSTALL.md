# Installing PostCSS Scope Pseudo Class

[PostCSS Scope Pseudo Class] runs in all Node environments, with special instructions for:

- [Node](#node)
- [PostCSS CLI](#postcss-cli)
- [PostCSS Load Config](#postcss-load-config)
- [Webpack](#webpack)
- [Next.js](#nextjs)
- [Gulp](#gulp)
- [Grunt](#grunt)

## Node

Add [PostCSS Scope Pseudo Class] to your project:

```bash
npm install postcss @csstools/postcss-scope-pseudo-class --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssScopePseudoClass = require('@csstools/postcss-scope-pseudo-class');

postcss([
	postcssScopePseudoClass(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli @csstools/postcss-scope-pseudo-class --save-dev
```

Use [PostCSS Scope Pseudo Class] in your `postcss.config.js` configuration file:

```js
const postcssScopePseudoClass = require('@csstools/postcss-scope-pseudo-class');

module.exports = {
	plugins: [
		postcssScopePseudoClass(/* pluginOptions */)
	]
}
```

## PostCSS Load Config

If your framework/CLI supports [`postcss-load-config`](https://github.com/postcss/postcss-load-config).

```bash
npm install @csstools/postcss-scope-pseudo-class --save-dev
```

`package.json`:

```json
{
	"postcss": {
		"plugins": {
			"@csstools/postcss-scope-pseudo-class": {}
		}
	}
}
```

`.postcssrc.json`:

```json
{
	"plugins": {
		"@csstools/postcss-scope-pseudo-class": {}
	}
}
```

_See the [README of `postcss-load-config`](https://github.com/postcss/postcss-load-config#usage) for more usage options._

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader @csstools/postcss-scope-pseudo-class --save-dev
```

Use [PostCSS Scope Pseudo Class] in your Webpack configuration:

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { importLoaders: 1 },
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"@csstools/postcss-scope-pseudo-class",
										{
											// Options
										},
									],
								],
							},
						},
					},
				],
			},
		],
	},
};
```

## Next.js

Read the instructions on how to [customize the PostCSS configuration in Next.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config)

```bash
npm install @csstools/postcss-scope-pseudo-class --save-dev
```

Use [PostCSS Scope Pseudo Class] in your `postcss.config.json` file:

```json
{
	"plugins": [
		"@csstools/postcss-scope-pseudo-class"
	]
}
```

```json5
{
	"plugins": [
		[
			"@csstools/postcss-scope-pseudo-class",
			{
				// Optionally add plugin options
			}
		]
	]
}
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss @csstools/postcss-scope-pseudo-class --save-dev
```

Use [PostCSS Scope Pseudo Class] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssScopePseudoClass = require('@csstools/postcss-scope-pseudo-class');

gulp.task('css', function () {
	var plugins = [
		postcssScopePseudoClass(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss @csstools/postcss-scope-pseudo-class --save-dev
```

Use [PostCSS Scope Pseudo Class] in your Gruntfile:

```js
const postcssScopePseudoClass = require('@csstools/postcss-scope-pseudo-class');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssScopePseudoClass(/* pluginOptions */)
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Scope Pseudo Class]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-scope-pseudo-class
[Next.js]: https://nextjs.org
