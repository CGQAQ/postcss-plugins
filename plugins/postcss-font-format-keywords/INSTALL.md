# Installing PostCSS Font Format Keywords

[PostCSS Font Format Keywords] runs in all Node environments, with special instructions for:

- [Node](#node)
- [PostCSS CLI](#postcss-cli)
- [PostCSS Load Config](#postcss-load-config)
- [Webpack](#webpack)
- [Next.js](#nextjs)
- [Gulp](#gulp)
- [Grunt](#grunt)

## Node

Add [PostCSS Font Format Keywords] to your project:

```bash
npm install postcss @csstools/postcss-font-format-keywords --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssFontFormatKeywords = require('@csstools/postcss-font-format-keywords');

postcss([
	postcssFontFormatKeywords(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli @csstools/postcss-font-format-keywords --save-dev
```

Use [PostCSS Font Format Keywords] in your `postcss.config.js` configuration file:

```js
const postcssFontFormatKeywords = require('@csstools/postcss-font-format-keywords');

module.exports = {
	plugins: [
		postcssFontFormatKeywords(/* pluginOptions */)
	]
}
```

## PostCSS Load Config

If your framework/CLI supports [`postcss-load-config`](https://github.com/postcss/postcss-load-config).

```bash
npm install @csstools/postcss-font-format-keywords --save-dev
```

`package.json`:

```json
{
	"postcss": {
		"plugins": {
			"@csstools/postcss-font-format-keywords": {}
		}
	}
}
```

`.postcssrc.json`:

```json
{
	"plugins": {
		"@csstools/postcss-font-format-keywords": {}
	}
}
```

_See the [README of `postcss-load-config`](https://github.com/postcss/postcss-load-config#usage) for more usage options._

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader @csstools/postcss-font-format-keywords --save-dev
```

Use [PostCSS Font Format Keywords] in your Webpack configuration:

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
										"@csstools/postcss-font-format-keywords",
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
npm install @csstools/postcss-font-format-keywords --save-dev
```

Use [PostCSS Font Format Keywords] in your `postcss.config.json` file:

```json
{
	"plugins": [
		"@csstools/postcss-font-format-keywords"
	]
}
```

```json5
{
	"plugins": [
		[
			"@csstools/postcss-font-format-keywords",
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
npm install gulp-postcss @csstools/postcss-font-format-keywords --save-dev
```

Use [PostCSS Font Format Keywords] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssFontFormatKeywords = require('@csstools/postcss-font-format-keywords');

gulp.task('css', function () {
	var plugins = [
		postcssFontFormatKeywords(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss @csstools/postcss-font-format-keywords --save-dev
```

Use [PostCSS Font Format Keywords] in your Gruntfile:

```js
const postcssFontFormatKeywords = require('@csstools/postcss-font-format-keywords');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssFontFormatKeywords(/* pluginOptions */)
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
[PostCSS Font Format Keywords]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-format-keywords
[Next.js]: https://nextjs.org
