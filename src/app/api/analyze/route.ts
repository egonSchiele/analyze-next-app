import { filePath, parse } from "@/lib/utils";
import fs from "fs";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const file = "server/app/index.html";
  const data = fs.readFileSync(filePath(file), "utf8");

  const result = parse(data);
  return Response.json({ result });
}
