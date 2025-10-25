import { defineConfig } from 'tsdown'
import LightningCSS from 'unplugin-lightningcss/rolldown'
import injectCssPlugin from '@bosh-code/tsdown-plugin-inject-css';

export default defineConfig({
  target: [
    'android141',
    'chrome109',
    'edge139',
    'firefox140',
    'safari18.5'
  ],
  entry: [
    './src/index.ts'
  ],
  platform: 'browser',
  sourcemap: true,
  tsconfig: './tsconfig.json',
  hash: true,
  dts: true,
  plugins: [
    LightningCSS({
      options: {
        minify: true
      }
    }),
    injectCssPlugin()
  ]
})
