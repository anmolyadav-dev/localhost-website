export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-star bg-cover bg-left lg:bg-center flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-greenblue border-opacity-20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-greenblue border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-white font-minecraft text-2xl mb-2">
          Load<span className="text-greenblue">ing</span>...
        </h2>
        <p className="text-gray-400 text-sm">
          Please wait while we prepare your content
        </p>
      </div>
    </div>
  );
}
