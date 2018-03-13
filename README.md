# Spotify API Course

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## About the course

TDD with JavaScript Course by William Justen

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Important commands

1.0 - List global npm plugins

```prompt
npm list -g --depth=0
```

## Fix possible bugs

### 1.0 - Webpack > UglifyJSPlugin

Maybe you'll have some trouble with this plugin. However, you can solve this installing it separately.


```
npm i -D uglifyjs-webpack-plugin
```

#### Config your `webpack.config.js` file.

```javascript
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

[...]
plugins: [
  new UglifyJSPlugin({
    uglifyOptions: {
      compress: { warnings: false },
      output: { comments: false },
    },
    sourceMap: true,
  }),
],
```

### 2.0 - NPM Error while running the test

This is a problem when using npm run, it has to do with Mocha exiting with code !== 0 whenever a test fails.


![http://prntscr.com/hripxp](https://image.prntscr.com/image/3aW37MduTDGKydeFPv_-zg.png)


```javascript
"scripts": {
  "test": "./node_modules/.bin/mocha specs/**/*.spec.js || ECHO.",
},
```

### Solve LF replace to CRLF on Git

This command will solve the problem with linebreak replacement on `git commit`.

```prompt
git config --global core.autocrlf input
```

![eslint-magic](screenshot/autocrlf.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
