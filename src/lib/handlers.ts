import * as htmlparser2 from "htmlparser2";
export function headlinks(result: any[]): Partial<htmlparser2.Handler> {
  return {
    onopentag(
      name: string,
      attribs: {
        [s: string]: string;
      }
    ) {
      if (name === "link") {
        result.push(attribs);
      }
    },
  };
}
