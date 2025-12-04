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
                        // Behold kun index.html entry
                        const filtered = {
                            'index.html': manifest['index.html'],
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
