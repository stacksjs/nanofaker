import { dts } from 'bun-plugin-dtsx'

await Bun.build({
  entrypoints: ['src/index.ts', 'bin/cli.ts'],
  outdir: './dist',
  minify: true,
  splitting: true,
  target: 'bun',
  plugins: [dts()],
})
