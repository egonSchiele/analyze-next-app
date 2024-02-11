import * as handlers from "@/lib/handlers";
import { filePath, parse } from "@/lib/utils";
import fs from "fs";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const file = request.nextUrl.searchParams.get("file");
  console.log({ file });
  if (!file) {
    return Response.json({ error: "file is required" }, { status: 400 });
  }
  const data = fs.readFileSync(filePath(file), "utf8");

  const headlinks = parse(data, handlers.headlinks);
  const result = {
    headlinks,
  };
  return Response.json({ result });
}
