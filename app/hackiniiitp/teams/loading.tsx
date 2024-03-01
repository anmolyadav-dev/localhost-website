// components/SkeletonLoader.tsx

const SkeletonLoader = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="bg-gray-300 h-6 rounded mb-2"></div>
      <div className="bg-gray-300 h-12 rounded mb-2"></div>
      <div className="bg-gray-300 h-12 rounded mb-2"></div>
      <div className="bg-gray-300 h-12 rounded mb-2"></div>
      <div className="bg-gray-300 h-12 rounded mb-2"></div>
      <div className="bg-gray-300 h-12 rounded mb-2"></div>
      <div className="bg-gray-300 h-12 rounded mb-2"></div>
      <div className="bg-gray-300 h-12 rounded mb-2"></div>
    </div>
  );
};

export default SkeletonLoader;
