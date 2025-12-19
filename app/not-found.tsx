export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-star bg-cover bg-left lg:bg-center flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-minecraft text-9xl text-greenblue mb-4 animate-pulse">
            404
          </h1>
          <h2 className="font-minecraft text-4xl text-white mb-4">
            Page Not <span className="text-greenblue">Found</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital void.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-greenblue hover:bg-opacity-80 text-black font-semibold rounded-lg transition-all"
          >
            Go Home
          </a>
          <a
            href="/events"
            className="px-6 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold rounded-lg border border-greenblue border-opacity-30 transition-all"
          >
            Browse Events
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/about"
            className="text-gray-400 hover:text-greenblue transition-colors text-sm"
          >
            About
          </a>
          <a
            href="/events"
            className="text-gray-400 hover:text-greenblue transition-colors text-sm"
          >
            Events
          </a>
          <a
            href="/members"
            className="text-gray-400 hover:text-greenblue transition-colors text-sm"
          >
            Members
          </a>
          <a
            href="/resources"
            className="text-gray-400 hover:text-greenblue transition-colors text-sm"
          >
            Resources
          </a>
        </div>
      </div>
    </div>
  );
}
