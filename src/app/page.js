"use client";

import { useState, useEffect } from 'react';
import FadeIn from "text-fade-in";

export default function Home() {
  const codeString = `"use client"

import FadeIn from "text-fade-in"

export default function Home() {
  return (
    <div className="h-screen bg-black gap-1 flex flex-col px-10 py-40">
      <FadeIn linear className="w-[800px] mb-3">
        FadeIn is an npm package that fades in text beautifully
      </FadeIn>
      <FadeIn linear lines>
        Fade in text word-by-word or line-by-line.
      </FadeIn>
      <FadeIn linear lines>
        Then linearize it by adding the linear prop.
      </FadeIn>
    </div>
  );
}
`;

  const [copySuccess, setCopySuccess] = useState(false);
  const [showCodePanel, setShowCodePanel] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCodePanel(true);
    }, 2000); // Show the code panel after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Add event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
  }, []);

  // Append CSS styles to the document head only on the client side
  useEffect(() => {
    const styles = `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translate(1rem, 1rem); /* Start slightly below and to the right */
        }
        to {
          opacity: 1;
          transform: translate(0, 0); /* End at normal position */
        }
      }

      .animate-fade-in {
        animation: fade-in 0.7s forwards; /* 0.7 seconds for the animation */
      }
    `;
    
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    // Cleanup the style element on unmount
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="items-center sm:items-start h-screen bg-black gap-1 flex flex-col px-10 py-20 sm:py-40 relative">
      <FadeIn linear className="text-center sm:text-left md:w-[800px] sm:w-[600px] w-[350px] mb-3 xl:ml-40 transition-all">
        {isSmallScreen ? "Fade in text beautifully" : "FadeIn is an npm package that fades in text beautifully"}
      </FadeIn>
      <FadeIn className="text-center sm:text-left max-w-[300px] sm:max-w-[1000px] xl:ml-40 transition-all" linear lines>
      {isSmallScreen ? "Fade in text word-by-word or line-by-line. Then linearize it by adding the linear prop." : "Fade in any text word-by-word or line-by-line."}
      </FadeIn>
      {isSmallScreen ? 
      <></> :
      <FadeIn className="text-center sm:text-left max-w-[300px] sm:max-w-[1000px] xl:ml-40 transition-all" linear lines>
      Then linearize it by adding the linear prop.
      </FadeIn>
      }

      {/* Code Panel */}
      {showCodePanel && (
        <div className="absolute bottom-0 right-0 m-4 p-3 bg-black backdrop-blur bg-opacity-50 outline outline-neutral-800 text-neutral-400 text-xs rounded shadow-lg w-1000 box-border sm:w-1/2 max-w-[600px] max-h-[330px] h-1/3 sm:h-1/2 overflow-y-auto transform transition-all duration-700 translate-x-5 translate-y-5 opacity-0 animate-fade-in">
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
      )}
    </div>
  );
}
