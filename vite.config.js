import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(() => {
    return {
        plugins: [
            react(),
            svgrPlugin(),
            {
                name: 'filter-manifest',
                writeBundle(options) {
                    const manifestPath = path.resolve(options.dir, 'asset-manifest.json');
                    if (fs.existsSync(manifestPath)) {
                        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
                        // Behold kun index.html entry og fjern assets felt
                        const indexEntry = { ...manifest['index.html'] };
                        delete indexEntry.assets;
                        const filtered = {
                            'index.html': indexEntry,
                        };
                        fs.writeFileSync(manifestPath, JSON.stringify(filtered, null, 2));
                    }
                },
            },
        ],
        build: {
            manifest: 'asset-manifest.json',
        },
    };
});
