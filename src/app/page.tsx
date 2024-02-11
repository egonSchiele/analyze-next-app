"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const func = async () => {
      //const json = await fetch("/api/file?file=server/app/index.html", {
      const json = await fetch("/api/analyze", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      setData(json);
    };
    func();
  }, []);
  return (
    <div className="bg-gray-300 p-lg rounded text-black">
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
