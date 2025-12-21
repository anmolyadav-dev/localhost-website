"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-star bg-cover bg-left lg:bg-center flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-8 border border-red-500 border-opacity-30">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="font-minecraft text-3xl text-white mb-4">
            Something Went <span className="text-red-500">Wrong</span>
          </h2>
          <p className="text-gray-300 mb-2">
            We encountered an unexpected error while processing your request.
          </p>
          {error.digest && (
            <p className="text-gray-400 text-sm font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold rounded-lg border border-greenblue border-opacity-30 transition-all"
          >
            Go Home
          </a>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          <p>If this problem persists, please contact us at:</p>
          <a
            href="mailto:localhost@iiitp.ac.in"
            className="text-greenblue hover:underline"
          >
            localhost@iiitp.ac.in
          </a>
        </div>
      </div>
    </div>
  );
}
