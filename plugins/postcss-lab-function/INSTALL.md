# Installing PostCSS Lab Function

[PostCSS Lab Function] runs in all Node environments, with special instructions for:

- [Node](#node)
- [PostCSS CLI](#postcss-cli)
- [PostCSS Load Config](#postcss-load-config)
- [Webpack](#webpack)
- [Next.js](#nextjs)
- [Gulp](#gulp)
- [Grunt](#grunt)

## Node

Add [PostCSS Lab Function] to your project:

```bash
npm install postcss postcss-lab-function --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssLabFunction = require('postcss-lab-function');

postcss([
	postcssLabFunction(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli postcss-lab-function --save-dev
```

Use [PostCSS Lab Function] in your `postcss.config.js` configuration file:

```js
const postcssLabFunction = require('postcss-lab-function');

module.exports = {
	plugins: [
		postcssLabFunction(/* pluginOptions */)
	]
}
```

## PostCSS Load Config

If your framework/CLI supports [`postcss-load-config`](https://github.com/postcss/postcss-load-config).

```bash
npm install postcss-lab-function --save-dev
```

`package.json`:

```json
{
	"postcss": {
		"plugins": {
			"postcss-lab-function": {}
		}
	}
}
```

`.postcssrc.json`:

```json
{
	"plugins": {
		"postcss-lab-function": {}
	}
}
```

_See the [README of `postcss-load-config`](https://github.com/postcss/postcss-load-config#usage) for more usage options._

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader postcss-lab-function --save-dev
```

Use [PostCSS Lab Function] in your Webpack configuration:

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
										"postcss-lab-function",
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
npm install postcss-lab-function --save-dev
```

Use [PostCSS Lab Function] in your `postcss.config.json` file:

```json
{
	"plugins": [
		"postcss-lab-function"
	]
}
```

```json5
{
	"plugins": [
		[
			"postcss-lab-function",
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
npm install gulp-postcss postcss-lab-function --save-dev
```

Use [PostCSS Lab Function] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssLabFunction = require('postcss-lab-function');

gulp.task('css', function () {
	var plugins = [
		postcssLabFunction(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss postcss-lab-function --save-dev
```

Use [PostCSS Lab Function] in your Gruntfile:

```js
const postcssLabFunction = require('postcss-lab-function');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssLabFunction(/* pluginOptions */)
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
[PostCSS Lab Function]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function
[Next.js]: https://nextjs.org
