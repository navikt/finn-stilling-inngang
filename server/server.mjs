import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import compression from 'compression';

const port = 3000;

const filename = fileURLToPath(import.meta.url);
const buildPath = path.join(path.dirname(filename), '../dist');

const app = express();

const cacheForever = {
    immutable: true,
    maxAge: 365000000,
};

const configureCors = (req, res, next) => {
    const { origin } = req.headers;

    if (origin?.includes('intern.nav.no') || origin?.includes('intern.dev.nav.no')) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    next();
};

const startServer = () => {
    app.use(compression());
    app.use('/*', configureCors);

    app.use('/assets', express.static(`${buildPath}/assets`, cacheForever));
    app.use('/asset-manifest.json', express.static(`${buildPath}/asset-manifest.json`));

    app.get('/internal/isAlive', (_, res) => res.sendStatus(200));
    app.get('/internal/isReady', (_, res) => res.sendStatus(200));

    app.listen(port, () => {
        console.log('Server kjører på port', port);
    });
};

startServer();
