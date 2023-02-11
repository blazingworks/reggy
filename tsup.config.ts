import { defineConfig, type Options } from "tsup";

const commonBuild: Options = {
  splitting: true,
  clean: true,
  sourcemap: true,
  dts: true,
  format: ["cjs", "esm"],
  minifySyntax: true,
  minifyWhitespace: true,
  target: "esnext",
  banner: {
    js: `/* Copyright ${new Date().getFullYear()} BlazingWorks. Published under MIT License. */`,
  },
};

export default defineConfig([
  {
    ...commonBuild,
    entry: ["src/index.ts"],
  },
  {
    ...commonBuild,
    entry: ["src/index.ts"],
    outDir: "dist/node",
  },
]);
