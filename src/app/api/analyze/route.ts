import { filePath, parse, rootAppDir } from "@/lib/utils";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const htmlFiles = findHtmlFiles(rootAppDir);

  return Response.json({ htmlFiles });
}

function findHtmlFiles(dirPath: string) {
  // Read the contents of the directory
  const files = fs.readdirSync(dirPath);

  // Array to store the matching HTML file paths
  let htmlFiles: string[] = [];

  // Iterate over each file/directory in the directory
  files.forEach((file) => {
    // Create the absolute path of the current file/directory
    const filePath = path.resolve(dirPath, file);

    // Get the file's stats
    const stats = fs.statSync(filePath);

    // Check if it's a directory
    if (stats.isDirectory()) {
      // Recursively call the function on the subdirectory
      htmlFiles = htmlFiles.concat(findHtmlFiles(filePath));
    }
    // Check if it's an HTML file
    else if (path.extname(filePath) === ".html") {
      htmlFiles.push(filePath);
    }
  });

  return htmlFiles;
}
