import pkg from '../../package.json';

/**
 * @description 获得版本号
 * @version 1.0.0
 * @returns { String } 对应当前版本号
 */
export function version(): string {
  return pkg.version;
}
