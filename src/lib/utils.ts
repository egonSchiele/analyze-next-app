export const rootDir = process.cwd();

export function filePath(path: string) {
  return `${rootDir}/my-app/${path}`;
}
