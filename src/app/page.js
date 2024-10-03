"use client";

import { useState } from 'react';
import FadeIn from "text-fade-in";

export default function Home() {
  const codeString = `"use client"

import FadeIn from "text-fade-in"

export default function Home() {
  return (
    <div className="h-screen bg-black gap-1 flex flex-col px-10 py-40">
      <FadeIn linear className="w-[1000px] mb-3">
        Linear is a purpose-built tool for planning and building products
      </FadeIn>
      <FadeIn linear lines>
        Meet the system for modern software development.
      </FadeIn>
      <FadeIn linear lines>
        Streamline issues, projects, and product roadmaps.
      </FadeIn>
    </div>
  );
}
`;

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="h-screen bg-black gap-1 flex flex-col px-10 py-40 relative">
      <FadeIn linear className="w-[1000px] mb-3">
        Linear is a purpose-built tool for planning and building products
      </FadeIn>
      <FadeIn linear lines>
        Meet the system for modern software development.
      </FadeIn>
      <FadeIn linear lines>
        Streamline issues, projects, and product roadmaps.
      </FadeIn>

      {/* Code Panel */}
      <div className="absolute bottom-0 right-0 m-4 p-3 bg-black backdrop-blur bg-opacity-50 outline outline-neutral-800 text-neutral-400 text-xs rounded shadow-lg w-1/2 max-w-[600px] max-h-[330px] h-1/2 overflow-y-auto">
        <pre className="whitespace-pre-wrap">
          <code>{codeString}</code>
        </pre>
        <div
          className="absolute top-0 right-0 px-3 py-2 m-2 outline outline-neutral-800 transition-all rounded hover:bg-neutral-900 cursor-pointer"
          onClick={handleCopy}
        >
          {copySuccess ? 'Copied!' : 'Copy code'}
        </div>
      </div>
    </div>
  );
}
