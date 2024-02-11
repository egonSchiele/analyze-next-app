"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [htmlFiles, setHtmlFiles] = useState([]);
  const [data, setData] = useState(null);
  useEffect(() => {
    const func = async () => {
      //const json = await fetch("/api/file?file=server/app/index.html", {
      const json = await fetch("/api/analyze", {
        method: "GET",
      }).then((res) => res.json());

      setHtmlFiles(json.htmlFiles);

      const fileJson = await fetch(
        "/api/analyze/file?file=server/app/index.html",
        {
          method: "GET",
        }
      ).then((res) => res.json());

      setData(fileJson);
    };
    func();
  }, []);
  return (
    <div className="bg-gray-300 p-lg rounded text-black">
      <h1 className="text-2xl font-bold">
        {htmlFiles.length} HTML Files found
      </h1>
      <ul>
        {htmlFiles.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      {data ? (
        <pre className="w-full text-wrap whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
