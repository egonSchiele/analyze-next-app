import { filePath } from "@/lib/utils";
import fs from "fs";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const file = "server/app/index.html";
  const data = await fs.readFileSync(filePath(file), "utf8");

  return Response.json({ data });
}
