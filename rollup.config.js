import resolve from 'rollup-plugin-node-resolve'; // 引入包
import commonjs from 'rollup-plugin-commonjs'; // 解析es包
import strip from '@rollup/plugin-strip';
import { terser } from 'rollup-plugin-terser'; // 压缩
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import * as path from 'path';

export default [
  {
    input: 'src/index.ts', // 打包入口
    output: [
      {
        // 打包出口
        dir: path.dirname(pkg.module),
        format: 'esm',
        preserveModules: true,
        exports: 'named',
        name: pkg.name,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      // 打包插件
      babel({
        exclude: 'node_modules/**'
      }),
      json(),
      typescript({ outDir: 'dist', declaration: true, declarationDir: 'dist' }),
      resolve(), // 查找和打包node_modules中的第三方模块
      commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
      strip(),
      terser(),
    ],
  },
  {
    input: 'src/index.ts', // 打包入口
    output: [
      {
        // 打包出口
        file: `dist/${ pkg.name }-${ pkg.version }.min.js`,
        format: 'umd',
        name: pkg.name,
      },
    ],
    plugins: [
      // 打包插件
      babel({
        exclude: 'node_modules/**'
      }),
      json(),
      typescript({ declaration: false }),
      resolve(), // 查找和打包node_modules中的第三方模块
      commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
      strip(),
      terser(),
    ],
  }
];
