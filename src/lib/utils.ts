import * as htmlparser2 from "htmlparser2";

export const rootDir = process.cwd();

export function filePath(path: string) {
  return `${rootDir}/my-app/${path}`;
}

export function parse(data: string) {
  const result: (string | { [k: string]: string })[] = [];
  const parser = new htmlparser2.Parser(
    {
      onopentag(name, attribs) {
        result.push(name, attribs);
      },
      ontext(text) {
        result.push("-->", text);
      },
      onclosetag(tagname) {
        result.push(tagname);
      },
    },
    { decodeEntities: true }
  );

  parser.write(data);
  parser.end();
  return result;
}
