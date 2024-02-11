import * as htmlparser2 from "htmlparser2";

export const rootAppDir = process.cwd() + "/my-app";

export function filePath(path: string) {
  return `${rootAppDir}/${path}`;
}

export function parse(
  data: string,
  handler: (result: any[]) => Partial<htmlparser2.Handler>
) {
  const result: any[] = [];
  const parser = new htmlparser2.Parser(handler(result), {
    decodeEntities: true,
  });

  parser.write(data);
  parser.end();
  return result;
}
