# Installing PostCSS Nesting

[PostCSS Nesting] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS Nesting] to your project:

```bash
npm install postcss @csstools/postcss-nesting-experimental --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssNestingExperimental = require('@csstools/postcss-nesting-experimental');

postcss([
	postcssNestingExperimental(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli @csstools/postcss-nesting-experimental --save-dev
```

Use [PostCSS Nesting] in your `postcss.config.js` configuration file:

```js
const postcssNestingExperimental = require('@csstools/postcss-nesting-experimental');

module.exports = {
	plugins: [
		postcssNestingExperimental(/* pluginOptions */)
	]
}
```

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader @csstools/postcss-nesting-experimental --save-dev
```

Use [PostCSS Nesting] in your Webpack configuration:

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
										"@csstools/postcss-nesting-experimental",
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

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss @csstools/postcss-nesting-experimental --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS Nesting] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssNestingExperimental = require('@csstools/postcss-nesting-experimental');

module.exports = config => reactAppRewirePostcss(config, {
	plugins: () => [
		postcssNestingExperimental(/* pluginOptions */)
	]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss @csstools/postcss-nesting-experimental --save-dev
```

Use [PostCSS Nesting] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssNestingExperimental = require('@csstools/postcss-nesting-experimental');

gulp.task('css', function () {
	var plugins = [
		postcssNestingExperimental(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss @csstools/postcss-nesting-experimental --save-dev
```

Use [PostCSS Nesting] in your Gruntfile:

```js
const postcssNestingExperimental = require('@csstools/postcss-nesting-experimental');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssNestingExperimental(/* pluginOptions */)
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
[PostCSS Nesting]: https://github.com/csstools/postcss-plugins/tree/main/experimental/postcss-nesting
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired