const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const cors = require('./middleware/cors');
const clientConfig = require('../../webpack/client.dev.js');

const app = express();
const compiler = webpack(clientConfig);

app.use(cors);

app.use(
  webpackDevMiddleware(compiler, {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost',
    },
    publicPath: clientConfig.output.publicPath,
  }),
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.set('X-FRAME-OPTIONS', 'DENY');
  res.sendFile(path.join(__dirname, '../../dist/static/index.html'));
});

let isBuilt = false;
compiler.plugin('done', () => {
  if (!isBuilt) {
    app.listen(3000, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      isBuilt = true;
      console.log('Listening at http://localhost:3000');
    });
  }
});
