import { cn } from "@/utils/cn";

const Loading = ({ className, variant = "grid" }) => {
  if (variant === "grid") {
    return (
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", className)}>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gradient-to-r from-burlap-100 to-burlap-200"></div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div className="h-4 bg-gradient-to-r from-burlap-100 to-burlap-200 rounded w-3/4"></div>
                <div className="h-3 bg-gradient-to-r from-forest-100 to-forest-200 rounded w-16"></div>
              </div>
              <div className="h-3 bg-gradient-to-r from-burlap-100 to-burlap-200 rounded w-1/2"></div>
              <div className="flex justify-between items-center">
                <div className="h-3 bg-gradient-to-r from-burlap-100 to-burlap-200 rounded w-20"></div>
                <div className="h-6 bg-gradient-to-r from-brown-100 to-brown-200 rounded w-16"></div>
              </div>
              <div className="h-10 bg-gradient-to-r from-forest-100 to-forest-200 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-burlap-200 border-t-forest-500"></div>
        <p className="text-burlap-600 font-medium">Loading products...</p>
      </div>
    </div>
  );
};

export default Loading;